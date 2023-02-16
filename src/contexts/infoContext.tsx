import { createContext, ReactNode, useState } from "react";

interface InfoContextProps {
  info: {
    title: string,
    subtitle: string,
    presentation: string,
    aboutText1: string,
    aboutText2: string,
    academicFormation: {title: string, period: string}[],
    professionalFormation: {title: string, period: string}[],
    skills: {
      frontend: {skill: string, percent: number}[],
      backend: {skill: string, percent: number}[],
      others: {skill: string, percent: number}[]
    },
    contacts: {
      email: string,
      whatsapp: string,
      whatsappLink: string,
      linkedin: string,
      instagram: string,
      facebook: string
    }
  };
}

interface InfoProviderProps {
  children: ReactNode;
}

export const InfoContext = createContext({} as InfoContextProps);

export default function InfoProvider({ children }: InfoProviderProps) {
  const [info] = useState({
    title: "Prazer, Ricardo Rodrigues",
    subtitle: "Desenvolvedor Frontend",
    presentation: "Apaixonado por Javascript e desenvolvimento de aplicações. Gosto de solucionar problemas usando programação. Muito curioso, sempre estou rastreando as novas tecnologias na área.",
    aboutText1: "Cursando Ciência da Computação na Universidade Estadual do Sudoeste da Bahia (UESB).",
    aboutText2: "Em busca de novos desafios na área da programação, contribuindo cada vez mais para o avanço da tecnologia da informação, pois acredito que isso tende a mudar cada vez mais o mundo para melhor.",
    academicFormation: [
      {title: "Técnico em Informática - IFNMG", period: "2014 - 2018"},
      {title: "Ciência da Computação - UESB", period: "2017 - atual"},
      {title: "Curso de Javascript - Udemy", period: "2019"},
      {title: "Curso de React Native - Udemy", period: "2019"},
    ],
    professionalFormation: [
      {title: "Minicurso Android Studio - UESB", period: "2018"},
      {title: "Estagiário de programação - Mercadótica Franquias", period: "2020 - 2021"},
      {title: "Desenvolvedor React - FWC Tecnologia", period: "2021"},
      {title: "Desenvolvedor React - Órulo", period: "2021 - 2022"},
      {title: "Desenvolvedor React/Angular - Vetta", period: "2022 - atual"},
    ],
    skills: {
      frontend: [
        {skill: 'ReactJS', percent: 100},
        {skill: 'HTML', percent: 100},
        {skill: 'Javascript', percent: 100},
        {skill: 'CSS', percent: 100},
        {skill: 'AngularJS', percent: 80},
        {skill: 'NextJS', percent: 70},
        {skill: 'React Native', percent: 70},
        {skill: 'ElectronJS', percent: 50},
      ],
      backend: [
        {skill: 'NodeJS', percent: 90},
        {skill: 'Express', percent: 90},
        {skill: 'Firebase', percent: 70},
        {skill: 'Knex', percent: 70},
        {skill: 'PostegreSQL', percent: 60},
      ],
      others: [
        {skill: 'Java', percent: 80},
        {skill: 'C++', percent: 70},
        {skill: 'Python', percent: 60},
        {skill: 'Haskell', percent: 60},
      ]
    },
    contacts: {
      email: 'ricardor662@gmail.com',
      whatsapp: '+55 77 988792719',
      whatsappLink: 'https://api.whatsapp.com/send?phone=55988792719&text=Ol%C3%A1%2C%20Ricardo!',
      linkedin: 'https://www.linkedin.com/in/ricardorodrigues17/',
      instagram: 'https://www.instagram.com/ricardo_rodrigues17/',
      facebook: 'https://www.facebook.com/ricardorodrigues17'
    }
  })

  return (
    <InfoContext.Provider value={{ info }}>
      {children}
    </InfoContext.Provider>
  );
}
