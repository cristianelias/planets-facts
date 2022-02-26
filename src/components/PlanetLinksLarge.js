// Dependencies
import { NavLink } from "react-router-dom";

const PlanetLinksLarge = ({ planets }) => (
  <div className="header-nav__container-planets">
    {planets.map((planet, index) => {
      const planetName = planet?.toLowerCase();

      return (
        <NavLink
          key={`${planet}x${index}`}
          to={`/${planetName}/overview`}
          className={({ isActive }) =>
            isActive
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

export default PlanetLinksLarge;
