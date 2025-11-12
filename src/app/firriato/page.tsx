"use client";

import { Suspense } from "react";
import useGuestData from "@/hooks/use-guest-name";
import Heading from "@/componets/heading";
import Paragraph from "@/componets/paragraph";
import Spacer from "@/componets/spacer";
import QuestionsAnswers from "@/componets/questions-answers";
import ResponseCard from "@/componets/response-card";
import Image from "next/image";
import Container from "@/componets/container";
import WineDetail from "@/componets/wine-details";

const wines = {
  stGermain: {
    bottle: "/saint-germain.webp",
    background: "/borgo-guarini.webp",
    title: "Saint Germain",
    description: `Saint Germain è un vino che parla di leggerezza consapevole, di convivialità e di accoglienza. Si ritrova la solarità dell’isola nella brillantezza del colore, accompagnata da finezza e fragranza.`,
    typology: `spumante brut metodo charmat lungo, ottenuto da una selezione di uve autoctone a bacca bianca coltivate in zone ventilate e ricche di luce. Fermentazione a temperatura controllata e presa di spuma lenta per preservare aromi freschi e floreali.`,
    senses: `profumi di agrumi, fiori bianchi, mela verde e zagara. In bocca è fresco, sapido, leggero e preciso, con bollicina fine e chiusura pulita.`,
  },

  sabbieEtnaBianco: {
    bottle: "/sabbie-dell-etna-bianco.webp",
    background: "/cavanera-etnea.webp",
    title: `Le Sabbie dell’Etna Bianco`,
    description: `Le Sabbie dell’Etna Bianco è un vino di altitudine e figlio del vulcano. Qui la vite affonda le sue radici in un territorio estremo, fatto di pietra lavica, pendii ripidi e grande escursione termica. Il risultato è un bianco unico, verticale, minerale e vibrante.`,
    typology: `Etna DOC Bianco, Carricante in purezza. Vigneti situati tra i 600 e i 900 m di altitudine su suoli lavici sabbiosi, ricchi di minerali, con forti escursioni termiche.`,
    senses: `Sentori di agrumi, fiori gialli e pietra focaia. Al palato è teso, minerale, sapido, con una chiusura lunga che ricorda la roccia da cui proviene. Un bianco di carattere e identità.`,
  },

  caelesCataratto: {
    bottle: "/caeles-cataratto.webp",
    background: "/borgo-guarini-2.webp",
    title: "Caeles Catarratto",
    description: `La terra è protagonista, e il vino ne è un riflesso diretto: essenziale, chiaro, luminoso, sincero. È un omaggio alla Sicilia più autentica, quella che non cerca di impressionare, ma di farsi conoscere.`,
    typology: `Terre Siciliane IGT Bianco, Catarratto in purezza, proveniente da vigneti biologici in zona collinare a clima ventilato.`,
    senses: `naso di ciliegia, prugna, ribes rosso e spezie; al palato un rosso elegante, fresco, con tannini gentili.`,
  },

  bayamore: {
    bottle: "/bayamore.webp",
    background: "/baglio-soria.webp",
    title: "Bayamore Rosso di Rossi",
    description: `Un blend in cui il Frappato porta fragranza e leggerezza aromatica, il Merlot dona rotondità e frutto maturo e il Syrah aggiunge una vena speziata e profonda. È un vino che invita alla convivialità e alla condivisione. Un rosso sincero, solare, rotondo, che fa sentire il suo abbraccio.`,
    typology: `Terre Siciliane IGT. Rosso, blend di Frappato, Merlot e Syrah. Vinificazione tradizionale con macerazione sulle bucce in acciaio per circa 20 giorni. Affinamento di 6 mesi in barrique di rovere francese.`,
    senses: `Profumi di ciliegia, prugna, melograno e rose rosse con tocchi di pepe nero e vaniglia. Palato morbido, con tannini fini e una chiusura avvolgente.`,
  },

  ecru: {
    bottle: "/ecru.webp",
    background: "/ecru-terroir.webp",
    title: `L'Ecrù`,
    description: `L’Ecrù è un passito che nasce dall’appassimento dei grappoli stesi al sole sui graticci per più di un mese. Le uve Zibibbo si concentrano di aromi che si lasciano apprezzare in un vino dal corredo aromatico di ampiezza assoluta.`,
    typology: `Passito da uve Zibibbo appassite al sole, prodotto con il metodo dell’infusione che salvaguarda gli aromi primari e la struttura naturale degli zuccheri.`,
    senses: `Agrumi, panettone, uvetta passa, albicocca con finale di mentuccia e rosmarino.`,
  },
};

const { stGermain, sabbieEtnaBianco, caelesCataratto, bayamore, ecru } = wines;

// Main component that uses the hook
const FirriatoContent = () => {
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

  const display = guest.display;

  return (
    <>
      <Spacer size={40} />
      <section>
        <Paragraph>Gentile {name ? name : "Ospite"},</Paragraph>
        <Paragraph>
          con grande piacere ti presentiamo la nostra seconda gradita ospite.
        </Paragraph>
        <Paragraph>
          Avere <strong>Firriato</strong> con noi significa concedersi un
          viaggio lungo la Sicilia autentica: dalla viticoltura eroica di
          montagna a quella del mare, fino ai dolci pendii dell’Agro Trapanese
        </Paragraph>
        <Paragraph>
          La produzione di Firriato porta con sé l’anima vibrante e complessa di
          quest’isola straordinaria.
        </Paragraph>
        <Spacer size={24} line point />
        <Spacer size={16} />
        <Container scope="lg">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "800/533",
            }}
          >
            <Image
              src="/etna.webp"
              alt="Acquarello della chiesa di Cortaccia"
              fill
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/acquarello-kurtatsch-blur.webp"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Container>
        <Spacer size={40} />
        <Heading component="h2">Il territorio: la Sicilia</Heading>
        <Heading component="h3">Un ricco mosaico di terroir</Heading>
        <Spacer size={24} />
        <Paragraph>
          Nel cuore della Sicilia, dove il mare incontra il cielo e la terra,
          nasce la visione di Firriato.
        </Paragraph>
        <Paragraph>
          La Sicilia è un mosaico di terroir: la campagna di Trapani con i suoi
          suoli rossi e argillosi, l’isola di Favignana tra fossili marini e
          vento, e poi le altitudini del Monte Etna, il vulcano attivo più alto
          d’Europa, che regalano mineralità e vigore.
        </Paragraph>
        <Paragraph>
          Il nome <em>Firriato</em> deriva da un termine siciliano antico che
          significa <em>perimetrato</em> e designava l’area più protetta
          prossima alla casa padronale scelta per custodire le coltivazioni di
          valore. Un nome che oggi diventa simbolo di cura, esclusività e
          identità.
        </Paragraph>
        <Paragraph>
          In questo contesto — mare, collina, vulcano — Firriato ha coltivato la
          convinzione che il vitigno sia specchio fedele del suo territorio.
        </Paragraph>
      </section>
      <section>
        <Spacer size={32} line point />
        <Spacer size={16} />
        <Container scope="lg">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "800/533",
            }}
          >
            <Image
              src="/cantina-firriato.webp"
              alt="foto della cantina Kurtatsch"
              fill
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/cantina-kurtatsch-blur.webp"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Container>
        <Spacer size={40} />
        <Heading component="h2">La Cantina</Heading>
        <Heading component="h3">Una azienda visionaria</Heading>
        <Spacer size={24} />
        <Paragraph>
          Fondata alla fine degli anni ’70 da Salvatore Di Gaetano, insieme alla
          moglie Vinzia Novara Di Gaetano, Firriato è cresciuta diventando una
          delle realtà produttive più importanti della Sicilia.
        </Paragraph>
        <Paragraph>
          Oggi l’azienda vanta ben 7 tenute di produzione per un totale di 490
          ettari di proprietà tra Trapani, Isola di Favignana ed Etna, tutti
          coltivati in regime di biologico certificato, in linea con i valori
          aziendali da sempre vocati alla sostenibilità.
        </Paragraph>
        <Paragraph>
          La filosofia è chiara: viticoltura di precisione, rispetto dei
          contesti pedoclimatici e valorizzazione delle varietà autoctone.
        </Paragraph>
      </section>
      <section>
        <Spacer line point />
        <Container>
          <div className="centered">
            <Image
              src="/francesca-matsumura-2.webp"
              alt="Foto di Francesca Matsumura"
              height={460}
              width={460}
              loading="lazy"
            />
          </div>
        </Container>
        <Spacer />
        <Heading component="h2">
          La nostra ospite: Francesca Masako Matsumura
        </Heading>
        <Heading component="h3">
          Area Sales Manager della cantina Firriato
        </Heading>
        <Spacer />
        <Paragraph>
          Questa sera abbiamo il grande piacere di accogliere Francesca Masako
          Matsumura, Area Sales Manager di Cantine Firriato.
        </Paragraph>
        <Paragraph>
          Francesca è una professionista che incarna in pieno lo spirito della
          sua azienda: una presenza discreta ma determinata, capace di
          ascoltare, raccontare e trasmettere, attraverso il vino, la storia e
          l’identità profonda del territorio siciliano.
        </Paragraph>
        <Paragraph>
          Il suo percorso, fatto di esperienze internazionali e radici salde, le
          permette di dialogare con mondi diversi mantenendo sempre un filo
          saldo: la tradizione.
        </Paragraph>
        <Paragraph>
          È grazie a persone come lei se le aziende diventano ponti: ponti tra
          produttori e appassionati, tra tradizione e contemporaneità, tra la
          Sicilia più vera e le tavole di tutto il mondo.
        </Paragraph>
      </section>
      <section>
        <Spacer line point />
        <Heading component="h2">La selezione fatta per te</Heading>
        <WineDetail {...stGermain} />
        <Spacer line />
        <WineDetail {...sabbieEtnaBianco} />
        <Spacer line />
        <WineDetail {...caelesCataratto} />
        <Spacer line />
        <WineDetail {...bayamore} />
        <Spacer line />
        <WineDetail {...ecru} />
      </section>
      <section>
        <Spacer line point />
        {display ? <DisplayTrue /> : <DisplayFalse name={name} />}
      </section>
      <Spacer size={80} />
    </>
  );
};

const DisplayTrue = () => {
  return (
    <div>
      <QuestionsAnswers />
      <Spacer line point />
      <ResponseCard>
        <Paragraph size="small" scope="lg">
          Averti con noi sarebbe il nostro più grande piacere. Per ragioni
          organizzative è importante per noi una conferma della tua presenza al
          fine di offrire la migliore esperienza possibile.
        </Paragraph>
      </ResponseCard>
    </div>
  );
};

const DisplayFalse = ({ name = "" }: { name?: string }) => {
  return (
    <>
      <Paragraph>
        {name && `${name}, `}non vediamo l’ora di passare con te una serata
        davvero speciale! Ti aspettiamo il <strong>27 novembre</strong>, in via
        Palmanova 19 a Olgiate Olona, dalle <strong>18:00</strong> alle{" "}
        <strong>22:00</strong>.
      </Paragraph>
    </>
  );
};

// Main page component with Suspense boundary
export default function FirriatoPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Spacer size={40} />
          <Paragraph>Caricamento...</Paragraph>
        </div>
      }
    >
      <FirriatoContent />
    </Suspense>
  );
}
