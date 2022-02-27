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

const stripCurrentPlanet = (str) => str.split("/")[1];
const stripCurrentAspect = (str) => str.split("/")[2];

const PlanetDetailsPage = () => {
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    dispatch(changeCurrentPlanet(stripCurrentPlanet(location.pathname)));
    dispatch(changeCurrentAspect(stripCurrentAspect(location.pathname)));
  }, [dispatch, location]);

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
