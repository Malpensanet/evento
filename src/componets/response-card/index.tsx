'use client';

import styles from "./styles.module.scss";
import Container from "../container";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ResponseCardProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

interface GuestData {
  name: string | null;
  email: string | null;
}

const ResponseCard = ({ 
  children, 
  isLoading = false 
}: ResponseCardProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoadingState, setIsLoadingState] = useState(isLoading);
  const [guest, setGuest] = useState<GuestData>({ name: null, email: null });
  const [isReady, setIsReady] = useState(false);

  // Guest data logic merged from the hook
  useEffect(() => {
    const urlName = searchParams.get("name");
    const urlEmail = searchParams.get("email");

    const savedName = sessionStorage.getItem("guestName");
    const savedEmail = sessionStorage.getItem("guestEmail");

    const name = urlName || savedName;
    const email = urlEmail || savedEmail;

    if (name) sessionStorage.setItem("guestName", name);
    if (email) sessionStorage.setItem("guestEmail", email);

    setGuest({ name, email });
    setIsReady(true);

    // Debug log
    console.log('Guest data loaded:', { name, email, urlName, urlEmail, savedName, savedEmail });
  }, [searchParams]);

  const handleResponse = async (response: 'accepted' | 'declined' | 'maybe') => {
    if (isLoadingState || !isReady) return;

    // Verifica che l'email sia presente
    if (!guest.email) {
      console.error('Email non trovata:', guest);
      alert('Impossibile procedere: email non trovata. Ricarica la pagina e riprova.');
      return;
    }

    setIsLoadingState(true);

    try {
      // Chiamata API server-side per aggiornare Brevo usando solo l'email
      const apiResponse = await fetch('/api/update-brevo-contact-v2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: guest.email,
          eventState: response.charAt(0).toUpperCase() + response.slice(1) // Accepted / Declined / Maybe
        })
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(`Errore ${apiResponse.status}: ${errorData.message || 'Errore sconosciuto'}`);
      }

      const result = await apiResponse.json();
      console.log('Risposta Brevo:', result);

      // Redirect automatico alla pagina corrispondente
      const query = new URLSearchParams({ 
        name: guest.name || '', 
        email: guest.email 
      }).toString();
      router.push(`/rsvp/${response}?${query}`);

    } catch (err) {
      console.error('Errore aggiornando Brevo:', err);
      alert('Si è verificato un errore. Riprova più tardi.');
      setIsLoadingState(false);
    }
  };

  // Show loading while guest data is being loaded
  if (!isReady) {
    return (
      <Container>
        <div className={styles.outerWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.loadingState}>
              <div className={styles.loadingSpinner}></div>
              <p>Caricamento dati...</p>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={styles.outerWrapper}>
        <div className={`${styles.innerWrapper} ${isLoadingState ? styles.loading : ''}`}>
          
          {isLoadingState ? (
            <div className={styles.loadingState}>
              <div className={styles.loadingSpinner}></div>
              <p>Stiamo registrando la tua risposta...</p>
            </div>
          ) : (
            <>
              <div className={styles.content}>
                {children}
              </div>

              <button 
                className={`${styles.button} ${styles.acceptButton}`}
                onClick={() => handleResponse('accepted')}
                disabled={isLoadingState}
              >
                <span className={styles.buttonIcon}>✓</span>
                Sì, sarò con voi!
              </button>

              <div className={styles.bottomButtons}>
                <button 
                  className={`${styles.button} ${styles.declineButton}`}
                  onClick={() => handleResponse('declined')}
                  disabled={isLoadingState}
                >
                  <span className={styles.buttonIcon}>✕</span>
                  No, non potrò esserci
                </button>

                <button 
                  className={`${styles.button} ${styles.maybeButton}`}
                  onClick={() => handleResponse('maybe')}
                  disabled={isLoadingState}
                >
                  <span className={styles.buttonIcon}>?</span>
                  Non so ancora
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ResponseCard;