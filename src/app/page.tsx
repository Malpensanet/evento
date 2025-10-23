"use client";

import { Suspense } from "react";
import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";
import WineList from "@/componets/wine-list";
import HeaderImage from "@/componets/header-image";
import QuestionsAnswers from "@/componets/questions-answers";
import ResponseCard from "@/componets/response-card";
import Image from "next/image";
import Container from "@/componets/container";

function HomeContent() {
  const { guest, isReady } = useGuestData();

  if (!isReady) return null;

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Spacer size={48} />
      <Heading component="h1">
        {name ? `${name},` : "Carissimo ospite,"}
      </Heading>
      <Heading component="h3">
        abbiamo pensato a questo evento <em>per te</em>.
      </Heading>
      <Spacer size={48} />
      <Paragraph>
        Sono passati <em>25 anni</em> da quando è iniziato il nostro cammino —
        fatto di fiducia, collaborazione e relazioni sincere. Per celebrare
        questo importante traguardo e inaugurare la nostra{" "}
        <em>nuova sede direzionale</em>, abbiamo deciso di aprirti le porte di
        casa.
      </Paragraph>
      <Paragraph>
        Sarà l&apos;occasione per ripresentarci, raccontarti i nostri progetti
        futuri e brindare insieme a chi ha reso possibile tutto questo: anche{" "}
        <em>a te</em>.
      </Paragraph>
      <Spacer size={24} line point />
      <HeaderImage />
      <Spacer size={48} />
      <Heading component="h2">Sarà un viaggio nel gusto</Heading>
      <Heading component="h3">
        dall&apos;<em>Alto Adige</em> alla <em>Sicilia</em>
      </Heading>
      <Spacer size={24} />
      <Paragraph>
        Durante la serata potrai degustare l&apos;eccellenza di due grandi
        cantine
      </Paragraph>
      <WineList />
      <Spacer size={24} />
      <Paragraph>
        e un ricco percorso gastronomico curato in ogni dettaglio da
      </Paragraph>
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
              width={280}
              height={80}
              alt="Logo di Pazzasco Catersing"
              priority
            />
          </a>
        </div>
      </Container>
      <Spacer size={24} />
      <Paragraph>
        che attraverserà l&apos;Italia, unendo il carattere dell&apos;Alto Adige
        ai profumi intensi della Sicilia.
      </Paragraph>
      <Paragraph>
        Il tutto accompagnato da musica, sorrisi e la compagnia di amici,
        colleghi e partner che hanno condiviso con noi questo viaggio.
      </Paragraph>
      <Spacer size={24} line point />
      <QuestionsAnswers />
      <Spacer size={24} line point />

      {/* ResponseCard aggiornata gestisce API call + redirect */}
      <ResponseCard>
        <Spacer size={24} />
        <Paragraph size="small" scope="lg">
          Averti con noi sarebbe il nostro più grande piacere. Per ragioni
          organizzative è importante per noi una conferma della tua presenza al
          fine di offrire la migliore esperienza possibile.
        </Paragraph>
      </ResponseCard>
    </>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          <Spacer size={48} />
          <Heading component="h1">Carissimo ospite,</Heading>
          <Heading component="h3">
            abbiamo pensato a questo evento <em>per te</em>.
          </Heading>
          <Spacer size={48} />
          <div>Loading...</div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
