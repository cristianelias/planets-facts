// Dependencies
import { NavLink } from "react-router-dom";
import useCurrentPlanet from "../../hooks/useCurrentPlanet";

// Custom hooks
import usePlanetAspects from "../../hooks/usePlanetAspects";

const AspectsNavSmall = () => {
  const currentPlanet = useCurrentPlanet();
  const planetAspects = usePlanetAspects();

  return (
    <div className="aspects-nav-small">
      {planetAspects.map(({ text, linkTo }, index) => (
        <NavLink
          to={linkTo}
          key={`${text}x${index}`}
          className={({ isActive }) =>
            isActive
              ? `aspects-nav-small__link-${currentPlanet} aspects-nav-small__link-${currentPlanet}--active`
              : `aspects-nav-small__link-${currentPlanet}`
          }
        >
          <button className={`aspects-nav-small__button-${currentPlanet}`}>
            {text?.toUpperCase()}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default AspectsNavSmall;
