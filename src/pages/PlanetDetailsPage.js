// Dependencies
import styled from "@emotion/styled";
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

// Styles
const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 27%;
  margin-bottom: 87px;

  @media (max-width: 1140px) {
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    margin-bottom: 27px;
  }

  @media (max-width: 620px) {
    margin: 0;
  }
`;

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
      <MainContent>
        <PlanetImage />
        <PlanetDescription />
      </MainContent>
      <PlanetFacts />
    </>
  );
};

export default PlanetDetailsPage;
