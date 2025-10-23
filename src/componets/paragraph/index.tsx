import Container from "@/componets/container";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface ParagraphProps {
  children: React.ReactNode;
  scope?: "lg" | "default" | "sm";
  size?: "default" | "small";
}

const Paragraph = ({
  children,
  scope = "default",
  size = "default",
}: ParagraphProps) => {
  const paragraphClass = clsx(styles.paragraph, {
    [styles.paragraphSmall]: size === "small",
  });

  return (
    <Container scope={scope}>
      <p className={paragraphClass}>{children}</p>
    </Container>
  );
};

export default Paragraph;
