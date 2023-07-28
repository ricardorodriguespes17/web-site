import { useContext } from "react";
import { InfoContext } from "../contexts/infoContext";

export default function useLanguage() {
  return {
    changeToEnglish: useContext(InfoContext).changeToEnglish,
    changeToPortuguese: useContext(InfoContext).changeToPortuguese
  };
}