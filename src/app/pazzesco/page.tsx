"use client";

import { Suspense } from "react";
import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";
import Image from "next/image";
import Container from "@/componets/container";

// Main component that uses the hook
const PazzescoContent = () => {
  const { guest, isReady } = useGuestData();

  // Show loading state while data is being fetched
  if (!isReady) {
    return (
      <>
        <Spacer size={40} />
        <Paragraph>Caricamento...</Paragraph>
      </>
    );
  }

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Spacer size={40} />
      <section>
        <Paragraph>Gentile {name ? name : "Ospite"},</Paragraph>
        <Paragraph>
          questa sera avremo il piacere di collaborare con{" "}
          <strong>Pazzesco Catering</strong>, un laboratorio vivo di creatività,
          sapori e intuizioni.
        </Paragraph>
        <Spacer size={24} line point />
        <Spacer size={16} />
        <Container>
          <div className="centered">
            <a
              href="https://pazzesco.catering"
              hrefLang="it"
              rel="nofollow noopener noreferrer"
              target="_blank"
              aria-label="Visita il sito di Pazzesco Catering"
            >
              <Image
                src="/pazzesco-logo.svg"
                width={380}
                height={80}
                alt="Logo di Pazzasco Catersing"
                priority
              />
            </a>
          </div>
          <div className="centered">
            <span className="subtitleItem">
              <strong>Catering</strong>
            </span>
          </div>
        </Container>
        <Spacer size={40} />
        <Paragraph>
          La loro filosofia è cristallina — come amano dire, i sapori sono le
          lettere del loro alfabeto, e con queste lettere costruiscono piatti
          capaci di esprimere un’emozione, un ricordo, un evento.
        </Paragraph>
        <Paragraph>
          Il loro invito, questa sera, è semplice e generoso: sedetevi,
          rilassatevi, versatevi un bicchiere… a tutto il resto pensano loro.
        </Paragraph>
        <Paragraph>
          La cucina di Pazzesco è un racconto che parte dal mercato rionale,
          passa per la conoscenza antica degli ingredienti, e cresce grazie a
          viaggi, assaggi e ispirazioni raccolte in giro per il mondo.
        </Paragraph>
      </section>
      <section>
        <Spacer size={32} line point />
        <Spacer size={16} />
        <Heading component="h2">Saranno con noi</Heading>
        <Heading component="h3">Una presenza davvero pazzesca</Heading>
        <Spacer size={24} />
        <Paragraph>
          Questa sera Pazzesco non ci offrirà solo un <em>servizio</em> come
          tanti ma una vera presenza che aggiunge valore umano, creativo e
          sensoriale al nostro percorso. Infatti saranno con noi:
        </Paragraph>
        <Container>
          <div className="centered">
            <Image
              src="/piergianni-de-tomasi.webp"
              alt="Foto di Piergianni Massimo De Tomasi"
              height={360}
              width={360}
              loading="lazy"
            />
          </div>
        </Container>
        <Spacer size={24} />
        <Heading component="h2">Piergianni Massimo De Tomasi</Heading>
        <Heading component="h3">Ceo & Founder</Heading>
        <Spacer line size={48} />
        <Container>
          <div className="centered">
            <Image
              src="/luigi-di-donna.webp"
              alt="Foto di Luigi di Donna"
              height={360}
              width={360}
              loading="lazy"
            />
          </div>
        </Container>
        <Spacer size={24} />
        <Heading component="h2">Luigi Di Donna</Heading>
        <Heading component="h3">Executive Chef & Founder</Heading>
      </section>
      <section>
        <Spacer line point />
        <Heading component="h2">Il Percorso ideato per voi</Heading>
        <Heading component="h3">In un viaggio da nord a sud</Heading>
      </section>
      <Paragraph>
        Pazzesco non prepara semplicemente piatti: crea esperienze. Eventi che
        diventano storie, menù che diventano dialoghi tra tradizione e
        innovazione, ricordi che rimangono impressi.
      </Paragraph>

      <Paragraph>
        E per questa serata speciale, <strong>Max</strong> e <strong>Luigi</strong> hanno immaginato per voi qualcosa di davvero audace e affascinante: far dialogare due mondi lontani, quasi opposti, ma sorprendentemente complementari — l’Alto Adige e la Sicilia.
      </Paragraph>
      <Paragraph>
        Due terre che parlano linguaggi diversi: uno scolpito dalle Alpi, l’altro accarezzato dal Mediterraneo.
      </Paragraph>
      <Paragraph>
        Il percorso gastronomico firmato Pazzesco nasce proprio da qui: un ponte sensoriale tra nord e sud.
E, per lasciarvi vivere la magia fino in fondo, non vi sveliamo nulla… rimane tutto una sorpresa. 🙃
      </Paragraph>
      <section>
        <Spacer line point />
        <DisplayFalse name={name} />
      </section>
      <Spacer size={80} />
    </>
  );
};

const DisplayFalse = ({ name = "" }: { name?: string }) => {
  return (
    <>
      <Paragraph>
        {name && `${name}, `}non vediamo l&apos;ora di passare con te una serata
        davvero speciale! Ti aspettiamo il <strong>27 novembre</strong>, in via
        Palmanova 19 a Olgiate Olona, dalle <strong>18:00</strong> alle{" "}
        <strong>22:00</strong>.
      </Paragraph>
    </>
  );
};

// Main page component with Suspense boundary
export default function PazzescoPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Spacer size={40} />
          <Paragraph>Caricamento...</Paragraph>
        </div>
      }
    >
      <PazzescoContent />
    </Suspense>
  );
}
