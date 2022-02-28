// Dependencies
import { NavLink } from "react-router-dom";

// Custom hooks
import useCurrentPlanet from "../../hooks/useCurrentPlanet";

const PlanetsNavLarge = ({ planets }) => {
  const currentPlanet = useCurrentPlanet();

  return (
    <div className="header-nav__container-planets">
      {planets.map((planet, index) => {
        const planetName = planet?.toLowerCase();

        return (
          <NavLink
            key={`${planet}x${index}`}
            to={`/${planetName}/overview`}
            className={() =>
              planetName === currentPlanet
                ? `header-nav__planet header-nav__${planetName} --${planetName}-active`
                : `header-nav__planet header-nav__${planetName}`
            }
          >
            {planet?.toUpperCase()}
          </NavLink>
        );
      })}
    </div>
  );
};

export default PlanetsNavLarge;
