import { useContext } from "react";
import { InfoContext } from "../contexts/infoContext";

export default function useInfo() {
  return useContext(InfoContext).info
}