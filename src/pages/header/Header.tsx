import React, { useState } from "react";
import { Burguer } from "./menuMobile.ts/Burguer";
import { Menu } from "./menuMobile.ts/Menu/Menu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  return (
    <>
      <Menu open={open} id={menuId} setOpen={setOpen} />
      <Burguer open={open} setOpen={setOpen} id={menuId} />
    </>
  );
};
