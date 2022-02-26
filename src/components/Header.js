// Dependencies
import { useSelector } from "react-redux";

// Assets
import hamburguerIcon from "../assets/icon-hamburger.svg";

// Components
import PlanetLinksLarge from "./PlanetLinksLarge";
import PlanetLinksSmall from "./PlanetLinksSmall";

const Header = () => {
  const { planets } = useSelector((state) => state).planets;
  const planetsArray = planets.map((planet) => planet.name);

  return (
    <header>
      <nav className="header-nav">
        <h2 className="header-nav__title">THE PLANETS</h2>
        <PlanetLinksLarge planets={planetsArray} />

        <img
          className="header-nav__dropdown-mobile"
          src={hamburguerIcon}
          alt="Planets dropdown menu"
        />
      </nav>
      <PlanetLinksSmall planets={planetsArray} />
    </header>
  );
};

export default Header;
