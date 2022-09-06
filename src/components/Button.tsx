import React from "react";

interface ButtonProp {
  children: React.ReactNode;
  className: string;
}

export const Button = ({ children, className = "" }: ButtonProp) => (
  <button className={className}>{children}</button>
);
