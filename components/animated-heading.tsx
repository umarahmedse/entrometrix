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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let wordIndex = 0;

  const renderNode = (node: ReactNode): ReactNode => {
    // TEXT NODE → split by words (NOT characters)
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((word) => {
        if (word.trim() === "") return word; // keep spaces natural

        const currentIndex = wordIndex++;

        return (
          <motion.span
            key={currentIndex}
            initial={{ y: 32, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: 32, opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: delay + currentIndex * 0.05,
              ease: [0.33, 0.66, 0.66, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        );
      });
    }

    // JSX ELEMENT → recurse into children
    if (isValidElement(node)) {
      return cloneElement(node, {
        ...node.props,
        children: renderNode(node.props.children),
      });
    }

    // ARRAY → recurse
    if (Array.isArray(node)) {
      return node.map((child) => renderNode(child));
    }

    return node;
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        whitespace-normal
        break-normal
        overflow-visible
      `}
    >
      {renderNode(children)}
    </div>
  );
}