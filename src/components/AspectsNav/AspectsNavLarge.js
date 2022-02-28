// Dependencies
import { NavLink } from "react-router-dom";
import useCurrentPlanet from "../../hooks/useCurrentPlanet";

// Custom hooks
import usePlanetAspects from "../../hooks/usePlanetAspects";

const AspectsNavLarge = () => {
  const currentPlanet = useCurrentPlanet();
  const planetAspects = usePlanetAspects();

  return (
    <ul className="aspects-nav-large">
      {planetAspects.map(({ text, linkTo }, index) => (
        <li key={`${text}x${index}`}>
          <NavLink
            to={linkTo}
            className={({ isActive }) =>
              isActive
                ? `aspects-nav-large__${currentPlanet}--selected`
                : `aspects-nav-large__${currentPlanet}`
            }
          >
            <button className={`aspects-nav-large__button`}>
              <span className="aspects-nav-large__number">
                {`0${index + 1}`}
              </span>
              <span className="aspects-nav-large__title">{text}</span>
            </button>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default AspectsNavLarge;
