import WineImage from "../wine-image";
import styles from "./styles.module.scss";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Spacer from "../spacer";

interface Wine {
  background: string;
  bottle: string;
  title: string;
  typology: string;
  senses: string;
  description: string;
  alt?: string;
  strength?: number;
  height?: number;
}

interface WineDetailProps extends Wine {
  children?: React.ReactNode;
}

export default function WineDetail({
  title,
  typology,
  senses,
  description,
  children,
  ...wine
}: WineDetailProps) {
  return (
    <section className={styles.wineDetail}>
      <WineImage
        background={wine.background}
        bottle={wine.bottle}
        alt={wine.alt}
        strength={wine.strength}
        height={wine.height}
      />

      <div className={styles.content}>
        <Heading component="h2">{title}</Heading>
        <Spacer />
        <Paragraph>{description}</Paragraph>
        <Paragraph>
          <strong>Tipo e provenienza:</strong> {typology}
        </Paragraph>
        <Paragraph>
          <strong>Profilo Sensoriale:</strong> {senses}
        </Paragraph>
        {children}
      </div>
    </section>
  );
}
