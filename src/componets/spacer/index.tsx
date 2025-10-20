// Spacer.tsx
import styles from "./styles.module.scss";
import Container from "@/componets/container";

type SpacerSize = 8 | 16 | 24 | 32 | 40 | 48 | 64 | 80 | 96 | 128 | 240;
type LineVariant = "default" | "thick" | "dotted" | "dashed";

interface SpacerProps {
  size?: SpacerSize;
  line?: boolean;
  lineVariant?: LineVariant;
  containerScope?: "sm" | "default" | "lg" | "fullWidth";
  className?: string;
  point?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({
  size = 16,
  line = false,
  lineVariant = "default",
  containerScope = "sm",
  className = "",
  point,
}) => {
  const spacerClass = `${styles.spacer} ${styles[`spacer--${size}`] || ""}`;
  const lineClass = `${styles.line} ${styles[`line--${lineVariant}`] || ""}`;

  return (
    <Container scope={containerScope}>
      <div className={`${spacerClass} ${className}`} aria-hidden="true">
        {line && (
          <div className={styles.lineWrapper}>
            <div className={lineClass} />
            {point && <div className={styles.point} />}
            <div className={lineClass} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Spacer;
