// Dependencies
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// Action creators
import {
  changeCurrentPlanet,
  changeCurrentAspect,
} from "../state/actionsCreators/planetsActionsCreator";

// Components
import PlanetFacts from "../components/PlanetFacts";
import PlanetImage from "../components/PlanetImage";
import PlanetDescription from "../components/PlanetDescription";
import { useEffect } from "react";

// Custom hooks
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import useCurrentAspect from "../hooks/useCurrentAspect";

const PlanetDetailsPage = () => {
  const dispatch = useDispatch();
  const currentPlanet = useCurrentPlanet();
  const currentAspect = useCurrentAspect();

  useEffect(() => {
    dispatch(changeCurrentPlanet(currentPlanet));
    dispatch(changeCurrentAspect(currentAspect));
  }, [dispatch, currentAspect, currentPlanet]);

  return (
    <>
      <main className="main-content">
        <PlanetImage />
        <PlanetDescription />
      </main>
      <PlanetFacts />
    </>
  );
};

export default PlanetDetailsPage;
