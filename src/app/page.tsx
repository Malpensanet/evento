"use client";

import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";
import WineList from "@/componets/wine-list";
import HeaderImage from "@/componets/header-image";
import QuestionsAnswers from "@/componets/questions-answers";
import ResponseCard from "@/componets/response-card";

export default function Home() {
  const { guest, isReady } = useGuestData();

  if (!isReady) return null;

  const name = guest.name
    ? guest.name.charAt(0).toUpperCase() + guest.name.slice(1).toLowerCase()
    : undefined;

  return (
    <>
      <Spacer size={48} />
      <Heading component="h1">
        {name ? `Carissimo ${name},` : "Carissimo ospite,"}
      </Heading>
      <Heading component="h3">
        abbiamo pensato a questo evento <em>per te</em>.
      </Heading>
      <Spacer size={48} />
      <HeaderImage />
      <Spacer size={48} />
      <Paragraph>
        Sono passati 25 anni da quando è iniziato il nostro cammino — fatto di
        fiducia, collaborazione e relazioni sincere. Per celebrare questo
        importante traguardo e inaugurare la nostra nuova sede direzionale,
        abbiamo deciso di aprirti le porte di casa.
      </Paragraph>
      <Paragraph>
        Sarà l’occasione per ripresentarci, raccontarti i nostri progetti futuri
        e brindare insieme a chi ha reso possibile tutto questo: anche{" "}
        <em>a te</em>.
      </Paragraph>

      <Spacer size={24} line point />
      <Heading component="h2">Sarà un viaggio di sapori</Heading>
      <Heading component="h3">
        dall’<em>Alto Adige</em> alla <em>Sicilia</em>
      </Heading>
      <Spacer size={24} />
      <Paragraph>
        Verrai guidato in un curato percorso gastronomico che attraversa
        l’Italia, unendo il carattere dell’Alto Adige ai profumi intensi della
        Sicilia.
      </Paragraph>
      <Paragraph>
        Durante la serata potrai degustare le eccellenze di due grandi cantine
      </Paragraph>
      <WineList />
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
        <Paragraph size="small">
          Averti con noi sarebbe il nostro più grande piacere.
          Per ragioni organizzative è importante per noi una conferma della tua presenza al fine di offrire la migliore esperienza possibile.
        </Paragraph>
      </ResponseCard>
    </>
  );
}
