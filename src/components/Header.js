/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Dependencies
import { useSelector } from "react-redux";

// Custom hooks
import useComponentVisible from "../hooks/useComponentVisible";

// Assets
import hamburguerIcon from "../assets/icon-hamburger.svg";

// Components
import PlanetsNavLarge from "./PlanetsNav/PlanetsNavLarge";
import PlanetsNavSmall from "./PlanetsNav/PlanetsNavSmall";

const Header = () => {
  const { refComponent, refTrigger, isComponentVisible } =
    useComponentVisible(true);
  const { planets } = useSelector((state) => state).planets;
  const planetsArray = planets.map((planet) => planet.name);

  return (
    <header>
      <nav className="header-nav">
        <h2 className="header-nav__title">THE PLANETS</h2>
        <PlanetsNavLarge planets={planetsArray} />

        <img
          className="header-nav__dropdown-mobile"
          src={hamburguerIcon}
          alt="Planets dropdown menu"
          ref={refTrigger}
        />
      </nav>
      {isComponentVisible && (
        <PlanetsNavSmall planets={planetsArray} ref={refComponent} />
      )}
    </header>
  );
};

export default Header;
