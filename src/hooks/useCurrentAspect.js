// Dependencies
import { useLocation } from "react-router-dom";

const useCurrentAspect = () => useLocation().pathname.split("/")[2];

export default useCurrentAspect;
