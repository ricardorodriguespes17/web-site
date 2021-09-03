import { createContext, ReactNode, useState } from "react";

interface PageContextProps {
  mouseInPage: string;
  onMouseInPage: (page: string) => void;
}

interface PageProviderProps {
  children: ReactNode;
}

export const PageContext = createContext({} as PageContextProps);

export default function PageProvider({ children }: PageProviderProps) {
  const [mouseInPage, setMouseInPage] = useState("home");

  function onMouseInPage(page: string) {
    setMouseInPage(page);
  }

  return (
    <PageContext.Provider value={{ mouseInPage, onMouseInPage }}>
      {children}
    </PageContext.Provider>
  );
}
