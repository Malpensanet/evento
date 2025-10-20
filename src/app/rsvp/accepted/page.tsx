"use client";

import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";
import Image from "next/image";
import Confetti from 'react-confetti'
import Container from "@/componets/container";

export default function AcceptedPage() {
  const { guest, isReady } = useGuestData();

  if (!isReady) return null;

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Confetti />
    <Spacer size={32} />
      <Container className="centerd">
        <div className="centered">

      <Image
        src={"/accepted.webp"}
        alt="Felici che tu ci sia"
        width={540}
        height={540}
        />
        </div>
      </Container>
      <Spacer size={24} />
      <Heading component="h1">
        {name ? `Grazie ${name},` : "Grazie,"}
      </Heading>
      <Heading component="h3">
        la tua partecipazione è confermata!
      </Heading>
      <Spacer size={8} line point/>
      <Paragraph>
        Non vediamo l’ora di condividere questa giornata speciale con te.
        Prepara il tuo palato e il tuo sorriso: sarà un’esperienza indimenticabile!
      </Paragraph>
      <Spacer size={48} />
    </>
  );
}
