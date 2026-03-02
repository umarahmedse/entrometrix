"use client";

import {
  useRef,
  useEffect,
  useState,
  ReactNode,
  isValidElement,
  cloneElement,
} from "react";
import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  children,
  className = "",
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let charIndex = 0; // to keep delay consistent across nested elements

  const renderNode = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split("").map((char) => {
        const span = (
          <motion.span
            key={charIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + charIndex * 0.03,
              ease: [0.33, 0.66, 0.66, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
        charIndex += 1;
        return span;
      });
    }

    if (isValidElement(node)) {
      return cloneElement(node, {
        ...node.props,
        children: renderNode(node.props.children),
      });
    }

    if (Array.isArray(node)) {
      return node.map((child) => renderNode(child));
    }

    return node;
  };

  return (
    <div ref={ref} className={className}>
      {renderNode(children)}
    </div>
  );
}
