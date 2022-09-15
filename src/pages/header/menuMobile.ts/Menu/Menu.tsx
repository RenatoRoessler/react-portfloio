
import React from "react";
import { StyledMenu } from "./styles";

type MenuMobileProps = {
  open: boolean;
  id: string;
  setOpen: (open: boolean) => void;
};

export const Menu = ({ open, setOpen, ...props }: MenuMobileProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/#about" onClick={() => setOpen(false)}>Sobre</a>

      <a href="/#experience" onClick={() => setOpen(false)}>Trabalhos</a>

      <a href="/#conhecimento" onClick={() => setOpen(false)}>Conhecimentos</a>

      <a href="/#contact" onClick={() => setOpen(false)}>Contato</a>
    </StyledMenu>
  );
};
