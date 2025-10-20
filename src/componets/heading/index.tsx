import React, { CSSProperties, ReactNode } from "react";
import Container from "@/componets/container";
import styles from "./styles.module.scss";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  component?: HeadingTag;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  component = "h4",
  children,
  style = {},
  className = "",
  ...props
}) => {
  const HeadingTag = component;

  const headingClass = styles[`heading--${component}`];

  const combinedClassName = `${headingClass} ${className}`.trim();

  return (
    <Container>
      <HeadingTag className={combinedClassName} style={style} {...props}>
        {children}
      </HeadingTag>
    </Container>
  );
};

export default Heading;
