import styles from "./styles.module.scss";

type Scope = "sm" | "default" | "lg" | "fullWidth";

interface ContainerProps {
  children: React.ReactNode;
  scope?: Scope;
  className?: string;
}

const Container = ({
  children,
  scope = "default",
  className = "",
}: ContainerProps) => {
  const scopeMap: Record<Scope, string> = {
    sm: styles.sm,
    default: styles.default,
    lg: styles.lg,
    fullWidth: styles.fullWidth,
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={`${styles.container} ${scopeMap[scope]} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
