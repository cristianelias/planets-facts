// Dependencies
import { useSelector } from "react-redux";

// Custom hooks
import useImage from "../hooks/useImage";

const PlanetImage = () => {
  const { aspect, planet } = useSelector((state) => state).planets;
  const planetName = planet?.name;

  const images = {
    overview: useImage(planet?.images[["overview"]]).image,
    structure: useImage(planet?.images[["structure"]]).image,
    geology: useImage(planet?.images[["geology"]]).image,
  };

  return (
    <div className="container-img">
      <img
        className={`content__planet-image content__planet-image--spinning ${planetName}-image`}
        src={aspect === "geology" ? images["overview"] : images[aspect]}
        alt={`Planet ${planetName}`}
      />
      {aspect === "geology" && (
        <img
          className="planet-geology-image"
          src={images["geology"]}
          alt={`Planet ${planetName} geology`}
        />
      )}
    </div>
  );
};
export default PlanetImage;
