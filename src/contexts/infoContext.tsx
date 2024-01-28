import { createContext, ReactNode, useState } from "react";
import contentInPortuguese from "../json/content_pt-br.json";
import contentInEnglish from "../json/content_en-us.json";

interface InfoContextProps {
  changeToPortuguese: () => void;
  changeToEnglish: () => void;
  info: {
    title: string,
    subtitle: string,
    presentation: string,
    contactMeButton: string,
    aboutTitle: string,
    aboutSubtitle: string,
    aboutText1: string,
    aboutText2: string,
    CVButton: string,
    CVLink: string,
    formationTitle: string,
    formationSubtitle: string,
    academicTitle: string,
    professionalTitle: string,
    coursesTitle: string,
    eventsTitle: string,
    skillsTitle: string,
    othersText: string,
    skillsSubtitle: string,
    portifolioTitle: string,
    portifolioSubtitle: string,
    publicRepoText: string,
    integrationText: string,
    seeMoreText: string,
    projectsTitle: string,
    projectsSubtitle: string,
    academicFormation: { title: string, period: string; }[],
    coursesFormation: { title: string, period: string; }[],
    eventsFormation: { title: string, period: string; }[],
    professionalFormation: { title: string, period: string; }[],
    skills: {
      frontend: { skill: string, percent: number; }[],
      backend: { skill: string, percent: number; }[],
      others: { skill: string, percent: number; }[];
    },
    contactTitle: string,
    contacts: {
      email: string,
      whatsapp: string,
      whatsappLink: string,
      linkedin: string,
      instagram: string,
      facebook: string;
    };
  };
}

interface InfoProviderProps {
  children: ReactNode;
}

export const InfoContext = createContext({} as InfoContextProps);

export default function InfoProvider({ children }: InfoProviderProps) {
  const [info, setInfo] = useState(contentInPortuguese);

  const changeToPortuguese = () => {
    const html = document.getElementsByTagName("html")[0].lang = "pt-br";
    setInfo(contentInPortuguese);
  };

  const changeToEnglish = () => {
    const html = document.getElementsByTagName("html")[0].lang = "en-us";
    setInfo(contentInEnglish);
  };

  return (
    <InfoContext.Provider value={{ info, changeToEnglish, changeToPortuguese }}>
      {children}
    </InfoContext.Provider>
  );
}
