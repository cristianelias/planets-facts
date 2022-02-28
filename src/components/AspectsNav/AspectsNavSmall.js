// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import useCurrentPlanet from "../../hooks/useCurrentPlanet";

// Custom hooks
import usePlanetAspects from "../../hooks/usePlanetAspects";

// Styles
const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-family: var(--text-quaternary-font-family);
  color: var(--letters-color);
  font-weight: var(--text-quaternary-font-weight);
  opacity: 0.5;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 2px;
  padding: 20px 5px 17px 5px;
  transition: all 0.3s;
  position: relative;
  border-bottom: solid 4px transparent;
  height: 100%;
`;

const Container = styled.div`
  display: none;
  justify-content: space-between;
  border-bottom: var(--border);
  padding: 0px 24px;

  @media (max-width: 620px) {
    display: flex;
  }
`;

const StyledBaseNav = styled(NavLink)`
  &.active button {
    opacity: 1;
  }
`;

const planetStyles = {
  mercury: css`
    &:hover button,
    &.active button {
      border-color: var(--mercury-color);
    }
  `,
  venus: css`
    &:hover button,
    &.active button {
      border-color: var(--venus-color);
    }
  `,
  earth: css`
    &:hover button,
    &.active button {
      border-color: var(--earth-color);
    }
  `,
  mars: css`
    &:hover button,
    &.active button {
      border-color: var(--mars-color);
    }
  `,
  jupiter: css`
    &:hover button,
    &.active button {
      border-color: var(--jupiter-color);
    }
  `,
  saturn: css`
    &:hover button,
    &.active button {
      border-color: var(--saturn-color);
    }
  `,
  uranus: css`
    &:hover button,
    &.active button {
      border-color: var(--uranus-color);
    }
  `,
  neptune: css`
    &:hover button,
    &.active button {
      border-color: var(--neptune-color);
    }
  `,
};

const AspectsNavSmall = () => {
  const currentPlanet = useCurrentPlanet();
  const planetAspects = usePlanetAspects();

  const StyledNav = styled(StyledBaseNav)`
    ${planetStyles[currentPlanet]}
  `;

  return (
    <Container>
      {planetAspects.map(({ text, linkTo }, index) => (
        <StyledNav
          to={linkTo}
          key={`${text}x${index}`}
          className={({ isActive }) => (isActive ? `active` : ``)}
        >
          <Button>{text?.toUpperCase()}</Button>
        </StyledNav>
      ))}
    </Container>
  );
};

export default AspectsNavSmall;
