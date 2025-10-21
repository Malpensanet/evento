"use client";

import { Suspense } from "react";
import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";
import Image from "next/image";
import Container from "@/componets/container";

function MaybeContent() {
  const { guest, isReady } = useGuestData();

  if (!isReady) return null;

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Spacer size={32} />
        <Container className="centerd">
          <div className="centered">
            <Image
              src={"/maybe.webp"}
              alt="Dimmi quando quando quando"
              width={540}
              height={540}
            />
          </div>
        </Container>
      <Spacer size={32} />
      <Heading component="h1">
        {name ? `Ci penseremo insieme, ${name}` : "Ci penseremo insieme,"}
      </Heading>
      <Heading component="h3">
        La tua risposta non è ancora confermata
      </Heading>
      <Spacer size={48} line point />
      <Paragraph>
        Non c&apos;è problema, prenditi il tempo che ti serve.  
        Quando deciderai, potrai aggiornare la tua partecipazione.
        Ti aspettiamo con piacere, sperando di averti tra i nostri ospiti.
      </Paragraph>
      <Spacer size={48} />
    </>
  );
}

export default function MaybePage() {
  return (
    <Suspense fallback={
      <div>
        <Spacer size={48} />
        <Heading component="h1">Ci penseremo insieme,</Heading>
        <Heading component="h3">La tua risposta non è ancora confermata</Heading>
        <Spacer size={48} />
        <div>Loading...</div>
      </div>
    }>
      <MaybeContent />
    </Suspense>
  );
}