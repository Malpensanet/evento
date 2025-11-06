"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./styles.module.scss";

interface BottleImageProps {
  background: string;
  bottle: string;
  alt?: string;
  strength?: number;
  height?: number;
  /** Custom width for this specific bottle */
  bottleWidth?: number;
  /** Custom height for this specific bottle */
  bottleHeight?: number;
  /** Maximum width constraint */
  maxWidth?: number;
}

export default function WineImage({
  background,
  bottle,
  alt = "Wine Bottle",
  strength = 1,
  height = 70,
  bottleWidth = 500,
  bottleHeight = 800,
  maxWidth = 400,
}: BottleImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${-20 * strength}%`]);

  return (
    <section
      ref={containerRef}
      className={styles.container}
      style={{ height: `${height}vh` }}
    >
      <div className={styles.backgroundContainer}>
        <motion.div
          className={styles.background}
          style={{
            backgroundImage: `url(${background})`,
            y,
          }}
        />
      </div>
      <div className={styles.bottleWrapper}>
        <Image
          src={bottle}
          alt={alt}
          width={bottleWidth}
          height={bottleHeight}
          className={styles.bottle}
          style={{
            maxWidth: `${maxWidth}px`,
          }}
          priority
        />
      </div>
    </section>
  );
}
