// Dependencies
import { useLocation } from "react-router-dom";

const useCurrentPlanet = () =>
  useLocation().pathname.split("/")[1].toLocaleLowerCase();

export default useCurrentPlanet;
