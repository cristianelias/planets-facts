// Dependencies
import { useSelector } from "react-redux";

// Custom hooks
import useImage from "../hooks/useImage";

const PlanetImage = () => {
  const { planet } = useSelector((state) => state).planets;
  const { image } = useImage(planet?.images?.planet);

  return (
    <div className="container-img">
      <img
        className="content__planet-image"
        src={image}
        alt={`Planet ${planet?.name} outside`}
      />
    </div>
  );
};
export default PlanetImage;
