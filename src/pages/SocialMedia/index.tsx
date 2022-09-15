import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContainerSocialMedia } from "./styles";

export const SocialMedia = () => {
  return (
    <ContainerSocialMedia>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/renato-roessler-9b0b786b/">
            <FaLinkedin  fontSize={24}/>
          </a>
        </li>
        <li>
          <a href="https://github.com/RenatoRoessler">
            <FaGithub fontSize={24} />
          </a>
        </li>
      </ul>
    </ContainerSocialMedia>
  );
};
