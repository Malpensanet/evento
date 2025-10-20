import Spacer from "../spacer";
import styles from "./styles.module.scss";
import Image from "next/image";

const WineList = () => {
  return (
    <ul className={styles.wineList}>
      <li className={styles.wineItem}>
        <a
          href="https://www.kellerei-kurtatsch.it/it/"
          hrefLang="it"
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="Visita il sito della cantina Kurtatsch"
        >
          <Image
            src="/kurtatsch-logo.svg"
            width={300}
            height={150}
            alt="Logo della cantina Kurtatsch, Alto Adige"
            priority
          />
        </a>
        <strong>Kurtatsch – Alto Adige</strong>
        <br />
        <span>con la presenza di Paul Tauferer</span>, <em>Sales Manager</em>
      </li>

      <Spacer size={48} />

      <li className={styles.wineItem}>
        <a
          href="https://firriato.it/"
          hrefLang="it"
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="Visita il sito della cantina Firriato"
        >
          <Image
            src="/firriato-logo.svg"
            width={300}
            height={100}
            alt="Logo della cantina Firriato, Sicilia"
          />
        </a>
        <strong>Firriato - Sicilia</strong>
        <br />
        <span>con Francesca Matsumura</span>, <em>Area Sales Manager</em>
      </li>
    </ul>
  );
};

export default WineList;
