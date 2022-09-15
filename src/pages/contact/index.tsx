import React from "react";
import { Container, ContainerCards, ContainerForm } from "./styles";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Formulario } from "./Formulario";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <ContainerCards>
          <article className="contact__option">
            <MdOutlineMail className="contact__options-icon" fontSize="24" />
            <h4>Email</h4>
            <h5>renatoroessler@gmail.com</h5>
            <a href="mailto:renatoroessler@gmail.com" rel="noopener">
              Enviar Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__options-icon" />
            <h4>Linkedin</h4>
            <h5>renatoroessler</h5>
            <a
              href="https://br.linkedin.com/in/renato-roessler-9b0b786b"
              rel="noopener"
            >
              Enviar Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__options-icon" />
            <h4>WhatsAPP</h4>
            <h5>54 996384949</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+5554996384949"
              rel="noopener"
            >
              Enviar Mensagem
            </a>
          </article>
        </ContainerCards>
        <ContainerForm>
          <Formulario />
        </ContainerForm>
      </Container>
    </section>
  );
};
