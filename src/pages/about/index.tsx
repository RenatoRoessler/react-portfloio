import { FaAward, FaReact } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import eu2 from "../../assets/geral/eu2.jpg";
import me from "../../assets/geral/me.png";
import {
  AboutCards,
  AboutCardsArticle,
  AboutContainer,
  AboutMeImage,
  ContainerConteudo,
  StyledButtonLetsTalk,
  StyledText,
} from "./styles";

export const About = () => {
  return (
    <section id="about">
      <AboutContainer>
        {/* <AboutMe> */}
        <AboutMeImage>
          <img src={me} alt="About Image" />
        </AboutMeImage>
        {/* </AboutMe> */}
        <ContainerConteudo>
          <AboutCards>
            <AboutCardsArticle>
              <FaAward fontSize={24} />
              <h5>Experiência</h5>
              <small>8+ anos software developer</small>
            </AboutCardsArticle>
            <AboutCardsArticle>
              <FaReact fontSize={24} />
              <h5>Experiência</h5>
              <small>2+ anos Frontend</small>
            </AboutCardsArticle>
            <AboutCardsArticle>
              <VscFolderLibrary />
              <h5>Projetos</h5>
              <small>20+ Projetos Completos</small>
            </AboutCardsArticle>
          </AboutCards>
          <StyledText>
            Eu sou software developer com mais de 8 anos de experiência, já
            trabalhei em projetos para clínicas médicas, cartórios, sistema de
            gestão de processos e produtos e outros, organizado, apaixonado por
            aprender.
          </StyledText>
          <StyledButtonLetsTalk href="#contact" className="btn btn-primary">
            Vamos conversar
          </StyledButtonLetsTalk>
        </ContainerConteudo>
      </AboutContainer>
    </section>
  );
};
