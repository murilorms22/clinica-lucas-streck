"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  prefix: string;
  emphasis: string;
  suffix?: string;
  className?: string;
  emphasisClassName?: string;
}

/**
 * Reveal palavra por palavra para o H1 do Hero, preservando espaços reais no DOM
 * para acessibilidade (leitores de tela), SEO e cópia de texto.
 */
export function SplitText({
  prefix,
  emphasis,
  suffix,
  className,
  emphasisClassName,
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const prefixWords = prefix.trim().split(/\s+/);
  const suffixWords = suffix ? suffix.trim().split(/\s+/) : [];

  if (prefersReducedMotion) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={cn("inline", className)}
      >
        {prefix}{" "}
        <span
          className={cn(
            "font-serif text-[1.08em] font-normal tracking-normal text-gold italic normal-case",
            emphasisClassName
          )}
        >
          {emphasis}
        </span>
        {suffix ? ` ${suffix}` : ""}
      </motion.span>
    );
  }

  return (
    <span className={cn("inline", className)}>
      {prefixWords.map((word, idx) => (
        <React.Fragment key={`p-${word}-${idx}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.06em]">
            <motion.span
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.62,
                delay: 0.06 * idx,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>{" "}
        </React.Fragment>
      ))}

      <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
        <motion.span
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.06 * prefixWords.length + 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            "inline-block pr-1 font-serif text-[1.08em] font-normal tracking-normal text-gold italic normal-case",
            emphasisClassName
          )}
        >
          {emphasis}
        </motion.span>
      </span>

      {suffixWords.map((word, idx) => (
        <React.Fragment key={`s-${word}-${idx}`}>
          {" "}
          <span className="inline-block overflow-hidden align-bottom pb-[0.06em]">
            <motion.span
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.62,
                delay: 0.06 * (prefixWords.length + 1 + idx) + 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        </React.Fragment>
      ))}
    </span>
  );
}
