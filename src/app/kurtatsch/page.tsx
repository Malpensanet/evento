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
  amos: {
    bottle: "/amos.webp",
    background: "/amos-vineyard.webp",
    title: "Amos",
    description:
      "Questo cuvée bianco è espressione più pura delle altitudini elevate e della freschezza di montagna.",
    typology:
      "Cuvée Bianco Alto Adige DOC, ottenuto dalle migliori uve bianche provenienti dai vigneti situati tra i 600 e 900 m di altitudine. Base di varietà Borgogna (70%) — Pinot Bianco, Chardonnay, Pinot Grigio — con aggiunta di Riesling e Sauvignon.",
    senses:
      "Naso di pesca bianca, albicocca, fiori e agrumi; al palato freschezza, verticalità ed eleganza. Un bianco complesso ma cristallino, la montagna in bottiglia del tastting",
  },

  pinotBianco: {
    bottle: "/pinot-bianco.webp",
    background: "/pinot-bianco-vineyard.webp",
    title: "Il Pinot Bianco",
    description:
      "Il Pinot Bianco è emblema della purezza e della precisione enologica altoatesina, rappresentando un vino essenziale e un classico del territorio.",
    typology:
      "Pinot Bianco Alto Adige DOC proveniente da vigneti su terreni calcarei e argillosi, situati in zone fresche di pendio.",
    senses:
      "Colore giallo paglierino con riflessi verdognoli; al naso mela, pesca bianca, agrumi e note minerali. Al palato fresco, elegante, di bella persistenza e pulizia.",
  },

  pinotNoir: {
    bottle: "/pinot-noir.webp",
    background: "/pinot-noir-vineyard.webp",
    title: "Il Pinot Noir",
    description:
      "Il Pinot Nero segna il passaggio ai rossi, e rappresenta eleganza e raffinatezza della Cantina nel trattare un vitigno molto sensibile.",
    typology:
      "Pinot Nero Alto Adige DOC, vigneti esposti a sud-ovest, terreno sabbioso/argilloso rosso-marroncino con minerali. Altitudine circa 400-650 m.",
    senses:
      "Naso di ciliegia, prugna, ribes rosso e spezie; al palato un rosso elegante, fresco, con tannini gentili.",
  },

  soma: {
    bottle: "/soma.webp",
    background: "/soma-vineyard.webp",
    title: "Soma",
    description:
      "Soma rappresenta la parte più calda del territorio, sia per altitudine che per tipologia. Kurtatsch dimostra come in Alto Adige si può fare un rosso corposo, mediterraneo nello spirito, ma di montagna nella sua eleganza.",
    typology:
      "Alto Adige Merlot-Cabernet DOC: 60% Merlot, 30% Cabernet Franc, 10% Cabernet Sauvignon. Vigneti a 220–250 m, esposizione sud-est, terreni sabbiosi/limosi con dolomite e minerali argillosi.",
    senses:
      "Colore rubino intenso; aromi di ciliegia, mora e prugna. Al palato pieno, con tannini presenti e struttura adatta a lungo affinamento.",
  },

  ushas: {
    bottle: "/ushas.webp",
    background: "/ushas-vineyard.webp",
    title: "Ushas",
    description:
      "Ushas è un vero gioiello della Cantina: un vino raro, elegante e sofisticato. Un moscato luminoso che ci parla di altitudini, forti pendenze, basse rese e grande cura.",
    typology:
      "Mitterberg Moscato Rosa IGT, vitigno rarissimo (solo 10 ettari in Alto Adige) coltivato su terreni sabbiosi-ghiaiosi ricchi di dolomite, a 400–500 m di altitudine, esposizione sud-est e forte pendenza.",
    senses:
      "Profumi di petali di rosa secchi, fragole candite e spezie orientali; al palato dolcezza equilibrata da acidità viva e struttura tannica. Il grande dessert della cantina.",
  },
};

const { amos, pinotBianco, pinotNoir, soma, ushas } = wines;

// Main component that uses the hook
const KurtatschContent = () => {
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
          è con immenso piacere che ti presentiamo la nostra prima ospite per la
          serata di giovedì 27 novembre. Non si tratta solo di una grande
          cantina, ma di una realtà autentica, così come le persone che ne fanno
          parte: <strong>la cantina Kurtatsch</strong> con cui collaboriamo da anni.
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
              src="/acquarello-kurtatsch.webp"
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
        <Heading component="h2">Il territorio: Cortaccia</Heading>
        <Heading component="h3">
          Un piccolo gioiello sospeso fra le vigne e il cielo
        </Heading>
        <Spacer size={24} />
        <Paragraph>
          Kurtatsch, Cortaccia in italiano, è un piccolo paese sospeso tra
          vigneti e montagne, nel cuore dell&apos;Alto Adige.
        </Paragraph>
        <Paragraph>
          Qui, la vite e la roccia convivono da secoli in un equilibrio raro: un
          mosaico di altitudini, esposizioni e suoli che raccontano la forza e
          la delicatezza della natura.
        </Paragraph>
        <Paragraph>
          Dal fondovalle, dove il calore favorisce rossi intensi e profondi,
          fino ai pendii più alti — oltre i 900 metri — dove nascono bianchi
          vibranti, minerali e luminosi.
        </Paragraph>
        <Paragraph>
          È un territorio che cambia metro dopo metro, ma resta sempre fedele a
          sé stesso: autentico, essenziale, puro.
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
            src="/cantina-kurtatsch.webp"
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
        <Heading component="h3">Un eccellenza di oltre 120 anni</Heading>
        <Spacer size={24} />
        <Paragraph>
          Fondata nel 1900, la Cantina Kurtatsch è oggi una delle cooperative
          più dinamiche e rispettate dell&apos;Alto Adige.
        </Paragraph>
        <Paragraph>
          La sua forza non risiede solo nei numeri, ma nella filosofia:
          precisione, trasparenza, rispetto del territorio.
        </Paragraph>
        <Paragraph>
          Ogni vino è il frutto di un microclima preciso, di un versante ben
          definito, di una scelta consapevole. Kurtatsch non produce semplicemente vini —
          produce <em>luoghi in bottiglia</em>. Ogni etichetta è un racconto del
          dialogo costante tra l&apos;uomo e la montagna, tra tradizione e
          ricerca, tra passato e futuro. In una parola: purezza.
        </Paragraph>
      </section>
      <section>
        <Spacer line point />
        <Container>
          <div className="centered">
            <Image
              src="/paul-tauferer.webp"
              alt="Foto di Paul Tauferer"
              height={360}
              width={360}
              loading="lazy"
            />
          </div>
        </Container>
        <Spacer />
        <Heading component="h2">Il nostro ospite: Paul Tauferer</Heading>
        <Heading component="h3">Sales Manager della cantina Kurtatsch</Heading>
        <Spacer />
        <Paragraph>
          In rappresentanza sarà con noi Paul Tauferer, Sales Manager della
          Cantina Kurtatsch e ambasciatore appassionato di questo territorio
          straordinario.
        </Paragraph>
        <Paragraph>
          Con Paul non condividiamo solo una collaborazione professionale, ma
          una vera amicizia.
        </Paragraph>
        <Paragraph>
          Un rapporto costruito nel tempo, basato sulla fiducia, sulla passione
          per la qualità e su un profondo rispetto reciproco.
        </Paragraph>
        <Paragraph>
          Quello che abbiamo capito con Paul è che dietro al vino ci sono
          persone autentiche, ogni bottiglia diventa un racconto di verità.
        </Paragraph>
      </section>
      <section>
        <Spacer line point />
        <Heading component="h2">La selezione fatta per te</Heading>
        <WineDetail {...pinotBianco} />
        <Spacer line />
        <WineDetail {...pinotNoir} />
        <Spacer line />
        <WineDetail {...amos} />
        <Spacer line />
        <WineDetail {...soma} />
        <Spacer line />
        <WineDetail {...ushas} />
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
        {name && `${name}, `}non vediamo l&apos;ora di passare con te una serata
        davvero speciale! Ti aspettiamo il <strong>27 novembre</strong>, in via
        Palmanova 19 a Olgiate Olona, dalle <strong>18:00</strong> alle{" "}
        <strong>22:00</strong>.
      </Paragraph>
    </>
  );
};

// Main page component with Suspense boundary
export default function KurtatschPage() {
  return (
    <Suspense fallback={
      <div>
        <Spacer size={40} />
        <Paragraph>Caricamento...</Paragraph>
      </div>
    }>
      <KurtatschContent />
    </Suspense>
  );
}