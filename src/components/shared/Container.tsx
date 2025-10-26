// components/shared/Container.tsx
"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`container mx-auto px-6 lg:px-12 ${className || ""}`}>
      {children}
    </div>
  );
};
