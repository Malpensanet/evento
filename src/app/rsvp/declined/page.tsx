"use client";

import { Suspense } from "react";
import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";

function DeclinedContent() {
  const { guest, isReady } = useGuestData();

  if (!isReady) return null;

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Spacer size={48} />
      <Heading component="h1">
        {name ? `Peccato ${name},` : "Peccato,"}
      </Heading>
      <Heading component="h3">
        non potrai essere dei nostri
      </Heading>
      <Spacer size={48} />
      <Paragraph>
        Ci dispiace molto, ma speriamo di poterti avere con noi in futuro.
      </Paragraph>
      <Paragraph>
        Ti terremo aggiornato sui prossimi eventi e iniziative.
      </Paragraph>
      <Spacer size={48} />
    </>
  );
}

export default function DeclinedPage() {
  return (
    <Suspense fallback={
      <div>
        <Spacer size={48} />
        <Heading component="h1">Peccato,</Heading>
        <Heading component="h3">non potrai essere dei nostri</Heading>
        <Spacer size={48} />
        <div>Loading...</div>
      </div>
    }>
      <DeclinedContent />
    </Suspense>
  );
}