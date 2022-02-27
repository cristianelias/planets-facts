// Dependencies
import { useSelector } from "react-redux";

// Custom hooks
import useImage from "../hooks/useImage";

const PlanetImage = () => {
  const { aspect, planet } = useSelector((state) => state).planets;

  const images = {
    overview: useImage(planet?.images[["overview"]]).image,
    structure: useImage(planet?.images[["structure"]]).image,
    geology: useImage(planet?.images[["geology"]]).image,
  };

  return (
    <div className="container-img">
      <img
        className="content__planet-image content__planet-image--spinning"
        src={aspect === "geology" ? images["overview"] : images[aspect]}
        alt={`Planet ${planet?.name}`}
      />
      {aspect === "geology" && (
        <img
          className="planet-geology-image"
          src={images["geology"]}
          alt={`Planet ${planet?.name} geology`}
        />
      )}
    </div>
  );
};
export default PlanetImage;
