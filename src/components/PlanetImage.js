// Dependencies
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

// Custom hooks
import useImage from "../hooks/useImage";
import usePlanetImagesStyles from "../hooks/usePlanetImageStyles";

// Styles
const Container = styled.div`
  position: relative;
  animation: pulse 2s 2s ease-in-out infinite alternate;

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
`;

const BaseImage = styled.img`
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

  @media (max-width: 620px) {
    width: 111px;
    height: 111px;
  }
`;

const GeologyImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  bottom: -100px;

  @media (max-width: 620px) {
    width: 90px;
    bottom: -83px;
  }
`;

const PlanetImage = () => {
  const { aspect, planet } = useSelector((state) => state).planets;
  const planetName = planet?.name;
  const PlanetImage = usePlanetImagesStyles(BaseImage, planetName);

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
