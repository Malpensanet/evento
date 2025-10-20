import Image from "next/image";
import Container from "../container";

const HeaderImage = () => {
  return (
    <Container scope="lg">
      <Image
        src="/alto-adige-etna.webp"
        width={600}
        height={400}
        alt="Acquarello raffigurante l’Alto Adige e l’Etna"
        priority // ensures it's preloaded if above the fold
        placeholder="blur" // adds a smooth blur-up effect
        blurDataURL="/alto-adige-etna-placeholder.webp" // small low-res placeholder
        sizes="(max-width: 768px) 100vw, 600px" // responsive size hint for browsers
        loading="eager" // ensure fast display on initial load
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "16px",
          objectFit: "cover",
        }}
      />
    </Container>
  );
};

export default HeaderImage;
