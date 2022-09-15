import React from "react";
import { About } from "../about";
import { Conhecimentos } from "../conhecimentos";
import { Contact } from "../contact";
import { Experiencia } from "../Experiencia/Experiencia";
import { Footer } from "../footer";
import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { SocialMedia } from "../SocialMedia";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";

export const Conteudo = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experiencia />
      <Conhecimentos />
      <Contact />
      <Footer />
      <SocialMedia />
      
    </>
  );
};
