// Dependencies
import { forwardRef } from "react";
import { Link } from "react-router-dom";

// Assets
import iconChevron from "../assets/icon-chevron.svg";

const PlanetLinksSmall = ({ planets }, ref) => (
  <aside className={`header-nav-mobile`} ref={ref}>
    {planets.map((planet, index) => {
      const planetName = planet?.toLowerCase();

      return (
        <Link
          className="header-nav-mobile__planet"
          key={`${planet}x${index}`}
          to={`/${planetName}/overview`}
        >
          <span
            className={`header-nav-mobile__planet-circle --circle-${planetName}`}
          ></span>
          <span className="header-nav-mobile__text-image">
            {planetName?.toUpperCase()}
            <img
              className="header-nav-mobile__chevron"
              src={iconChevron}
              alt="chevron"
            />
          </span>
        </Link>
      );
    })}
  </aside>
);

export default forwardRef(PlanetLinksSmall);
