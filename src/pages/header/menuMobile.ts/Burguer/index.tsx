import React from "react";
import { StyledBurger } from "./styles";

interface BurguerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

export const Burguer = ({ open, setOpen, ...props }: BurguerProps) => {
  const isExpanded = open ? true : false;
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
