"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "components/ui/card";

interface IllustrationCardProps {
  imagePath: string;
  altText: string;
  delay?: number;
}

export function IllustrationCard({ imagePath, altText, delay = 0 }: IllustrationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`
        relative overflow-hidden transition-all duration-500 
        border border-primary/10 dark:border-primary/20 hover:border-accent/30
        ${isHovered ? "shadow-xl shadow-primary/10 dark:shadow-primary/20 transform translate-y-[-5px]" : "shadow-md"}
        bg-background/80 backdrop-blur-sm
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="zoom-in"
      data-aos-delay={delay * 100}
    >
      <div className="p-4 flex justify-center items-center h-full">
        <div
          className={`
            transition-all duration-500 transform
            ${isHovered ? "scale-110" : "scale-100"}
          `}
        >
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={altText}
            width={300}
            height={300}
            className="h-auto w-auto"
          />
        </div>
      </div>

      {/* Animated gradient overlay on hover */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10
          dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20
          transition-opacity duration-500 pointer-events-none
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      ></div>
    </Card>
  );
}
