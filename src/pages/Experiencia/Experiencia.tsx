import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Conteudo, ConteudoProps } from "./Conteudo";
import { ContainerStyled } from "./styles";

const steps = [
  {
    title: "Allclinic",
    label: "Allclinic - Radiologic information System",
    empresa: {nome: '@allclinic', site: 'http://www.allclinic.com.br/'},
    subtitle: "Software developer - Junho de 2013 - junho de 2019",
    atividades: [
      "Desenvolvimento de softwares para clinicas médicas.",
      "Responsável pelo desenvolvimento do modulo de Agendamento.",
      "Responsável pelo desenvolvimento do modulo de Consultas.",
      "Responsável pelo desenvolvimento do modulo de Faturamento.",
      "Responsável pelo desenvolvimento do modulo de Estoque.",
      "Responsável pelo desenvolvimento do modulo de Atendimento.",
      "Responsável pelo desenvolvimento do modulo de Laudos.",
      "Responsável pelo desenvolvimento do modulo de Financeiro.",
      "Contribui no desenvolvimento do modulo de diagnostico web.",
    ],
  },
  {
    title: "Ceprotec",
    subtitle: "Software developer - Junho de 2019 - Maio de 2021",
    empresa: {nome: '@ceprotec', site: 'https://www.ceprotec.com.br'},
    label: "CEPROTEC - sistemas e soluções para cartórios",
    atividades: [
      "Desenvolvimento de softwares para cartórios.",
      "Desenvolvimento do modulo de Títulos e Documentos & Pessoa Jurídica",
      "Responsável pelo desenvolvimento do modulo de protestos (Apontamento de Títulos, CRA, Boletos Bancários, Partes Envolvidas, Certidão negativa/positiva, integração com SERASA/SCPC, Digitalização de Documentos, Documentos diversos, Intimações",
    ],
  },
  {
    title: "DotSE",
    label: "DotSE - Software Engineering",
    empresa: {nome: '@dotse', site: 'https://dotse.com.br/'},
    subtitle: "Software developer - Maio de 2021 - Atual",
    atividades: [
        'Desenvolvimento de softwares para industria',
        'Desenvolvimento do sistema dot.BSC web e mobile (Perspectivas, Concepção de Projetos, definição de cadastro de indicadores, cartas de controle, Lançamento e carga de dados, Visualização e verificação, comparativos).',
        'Desenvolvimento do sistema dot.SGP web e mobile  (Demandas, Acompanhamento, Gantt, Payback).',
        'Desenvolvimento do sistema de Terceiros (Fornecedor, colaboradores, documentos, mapa de risco, acesso, cracha)'
    ],
  },
];

export const Experiencia = () => {
  const [activeStep, setActiveStep] = useState(2);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSelectActiveStep = (newActiveStep: number) => {
    setActiveStep(newActiveStep);
  };
  return (
    <section id="experience">
      <ContainerStyled>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step
              key={step.title}
              onClick={() => handleSelectActiveStep(index)}
              completed={false}
            >
              <StepLabel>{step.title}</StepLabel>
              <StepContent>
                <Conteudo
                  title={step.label}
                  subtitle={step.subtitle}
                  atividades={step.atividades}
                  empresa={step.empresa}
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </ContainerStyled>
    </section>
  );
};
