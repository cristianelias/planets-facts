// Dependencies
import { NavLink, useLocation } from "react-router-dom";

const PlanetLinksLarge = ({ planets }) => {
  let currentPlanet = useLocation().pathname.split("/")[1];

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

export default PlanetLinksLarge;
