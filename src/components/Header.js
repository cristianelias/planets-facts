/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Dependencies
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

// Custom hooks
import useComponentVisible from "../hooks/useComponentVisible";

// Assets
import hamburguerIcon from "../assets/icon-hamburger.svg";

// Components
import PlanetsNavLarge from "./PlanetsNav/PlanetsNavLarge";
import PlanetsNavSmall from "./PlanetsNav/PlanetsNavSmall";

// Styles
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 32px;
  border-bottom: var(--border);
  padding: 0 40px 0 32px;

  @media (max-width: 930px) {
    height: 159px;
    flex-direction: column;
    padding: 32px 51px 0 51px;
  }

  @media (max-width: 620px) {
    height: auto;
    flex-direction: row;
    padding: 16px 24px;
  }
`;

const Heading = styled.h2`
  font-family: var(--text-secondary-font-family);
  font-size: 28px;
  line-height: 36px;
  letter-spacing: var(--text-secondary-letter-spacing);
  font-weight: var(--text-secondary-font-weight);
`;

const MobileMenuImage = styled.img`
  display: none;
  cursor: pointer;
  padding: 10px;
  padding-right: 0;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 620px) {
    display: inline;
  }
`;

const Header = () => {
  const { refComponent, refTrigger, isComponentVisible } =
    useComponentVisible(false);
  const { planets } = useSelector((state) => state).planets;
  const planetsArray = planets.map((planet) => planet.name);

  return (
    <header>
      <Nav>
        <Heading>THE PLANETS</Heading>
        <PlanetsNavLarge planets={planetsArray} />

        <MobileMenuImage
          src={hamburguerIcon}
          alt="Planets dropdown menu"
          ref={refTrigger}
        />
      </Nav>
      <PlanetsNavSmall
        planets={planetsArray}
        ref={refComponent}
        isComponentVisible={isComponentVisible}
      />
    </header>
  );
};

export default Header;
