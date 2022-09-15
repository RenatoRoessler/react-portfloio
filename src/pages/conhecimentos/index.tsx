import React from "react";
import { BsGithub, BsPatchCheckFill } from "react-icons/bs";
import { FaAngular, FaBootstrap, FaCss3, FaDocker, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";

import {IoLogoJavascript} from 'react-icons/io'
import {SiDelphi, SiMysql, SiPostgresql, SiStyledcomponents, SiTypescript} from 'react-icons/si'
import {DiScrum} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import { MdHttp } from "react-icons/md";
import { Container, ContainerConhecimentos } from "./styles";

export const Conhecimentos = () => {
  return (
    <section id="conhecimento" >
      <Container>
        <h1>Meus conhecimentos</h1>
        <ContainerConhecimentos>
          <article>
            <FaHtml5 />
            <div>
              <h4>HTML</h4>
              <small>Experiente</small>
            </div>
          </article>
          <article>
            <FaCss3 />
            <div>
              <h4>CSS</h4>
              <small>Intermediario</small>
            </div>
          </article>
          <article>
            <IoLogoJavascript />
            <div>
              <h4>JavaScript</h4>
              <small>Intermediario</small>
            </div>
          </article>
          <article>
            <FaReact />
            <div>
              <h4>ReactJs</h4>
              <small>Experiente</small>
            </div>
          </article>
          <article>
            <FaReact />
            <div>
              <h4>React Native</h4>
              <small>Intermediario</small>
            </div>
          </article>
          <article>
            <SiMysql />
            <div>
              <h4>MySQL</h4>
              <small>Experiente</small>
            </div>
          </article>
          <article>
            <SiTypescript />
            <div>
              <h4>typescript</h4>
              <small>Intermediario</small>
            </div>
          </article>
          <article>
            <SiPostgresql />
            <div>
              <h4>PostgresSQL</h4>
              <small>Intermediario</small>
            </div>
          </article>
          <article>
            <FaPhp />
            <div>
              <h4>PHP</h4>
              <small>Básico</small>
            </div>
          </article>
          <article>
            <BsPatchCheckFill />
            <div>
              <h4>NX</h4>
              <small>Básico</small>
            </div>
          </article>
          <article>
            <FaNodeJs />
            <div>
              <h4>Node</h4>
              <small>Básico</small>
            </div>
          </article>
          <article>
            <DiScrum />
            <div>
              <h4>Scrum</h4>
              <small>Básico</small>
            </div>
          </article>
          <article>
            <SiDelphi />
            <div>
              <h4>Delphi</h4>
              <small>Experiente</small>
            </div>
          </article>
          <article>
            <FaDocker />
            <div>
              <h4>Docker</h4>
              <small>Básico</small>
            </div>
          </article>
       
          <article>
            <TbBrandNextjs />
            <div>
              <h4>NextJs</h4>
              <small>Básico</small>
            </div>
          </article>
          <article>
            <BsPatchCheckFill />
            <div>
              <h4>Material UI</h4>
              <small>Experiente</small>
            </div>
          </article>
          <article>
            <SiStyledcomponents />
            <div>
              <h4>Styled components</h4>
              <small>Experiente</small>
            </div>
          </article>
          <article>
            <BsGithub />
            <div>
              <h4>git</h4>
              <small>Intermediario</small>
            </div>
          </article>
          <article>
            <FaAngular />
            <div>
              <h4>Angular</h4>
              <small>Básico</small>
            </div>
          </article>
          <article>
            <MdHttp />
            <div>
              <h4>HTTP</h4>
              <small>Intermediario</small>
            </div>
          </article>
        </ContainerConhecimentos>
      </Container>
    </section>
  );
};
