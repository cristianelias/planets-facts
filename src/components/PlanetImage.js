// Dependencies
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

// Custom hooks
import useImage from "../hooks/useImage";
import usePlanetImagesStyles from "../hooks/usePlanetImageStyles";

// Styles
const Container = styled.div`
  width: 100%;
  animation: pulse 2s 2s ease-in-out infinite alternate;

  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.04);
    }

    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 620px) {
    height: 304px;
  }
`;

const BaseImage = styled.img`
  position: relative;
  max-width: 700px;
  width: 100%;

  @keyframes planet-transform {
    0% {
      transform: scale(7) rotate(360deg);
      opacity: 0.1;
    }

    60% {
      transform: scale(5) rotate(300deg);
      opacity: 0.3;
    }

    80% {
      transform: scale(3) rotate(200deg);
      opacity: 0.5;
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes planet-movement {
    0% {
      transform: rotate(360deg);
    }
  }

  animation: planet-transform 0.4s linear,
    planet-movement 20s 2s linear infinite;
`;

const GeologyImage = styled.img`
  max-width: 700px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  bottom: 0;

  @keyframes delay {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: delay 0.4s;

  @media (max-width: 620px) {
    width: 90px;
  }
`;

const PlanetImage = () => {
  const { aspect, planet } = useSelector((state) => state).planets;
  const planetName = planet?.name;

  const PlanetImage = usePlanetImagesStyles(
    BaseImage,
    planetName.toLowerCase()
  );

  const images = {
    overview: useImage(planet?.images[["overview"]]).image,
    structure: useImage(planet?.images[["structure"]]).image,
    geology: useImage(planet?.images[["geology"]]).image,
  };

  return (
    <Container>
      <PlanetImage
        src={aspect === "geology" ? images["overview"] : images[aspect]}
        alt={`Planet ${planetName}`}
      />
      {aspect === "geology" && (
        <GeologyImage
          src={images["geology"]}
          alt={`Planet ${planetName} geology`}
        />
      )}
    </Container>
  );
};
export default PlanetImage;
