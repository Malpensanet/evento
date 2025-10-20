"use client";

import { Suspense } from "react";
import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";

function MaybeContent() {
  const { guest, isReady } = useGuestData();

  if (!isReady) return null;

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Spacer size={48} />
      <Heading component="h1">
        {name ? `Ci penseremo insieme, ${name}` : "Ci penseremo insieme,"}
      </Heading>
      <Heading component="h3">
        La tua risposta non è ancora confermata
      </Heading>
      <Spacer size={48} />
      <Paragraph>
        Non c&apos;è problema, prenditi tutto il tempo che ti serve.  
        Quando deciderai, potrai aggiornare la tua partecipazione.
      </Paragraph>
      <Paragraph>
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