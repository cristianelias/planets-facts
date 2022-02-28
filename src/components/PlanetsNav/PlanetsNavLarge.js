// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

// Custom hooks
import useCurrentPlanet from "../../hooks/useCurrentPlanet";

// Styles
const Container = styled.div`
  display: flex;
  gap: 33px;

  @media (max-width: 930px) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

const planetStyles = {
  mercury: css`
    &:hover,
    &.active {
      border-color: var(--mercury-color);
    }
  `,
  venus: css`
    &:hover,
    &.active {
      border-color: var(--venus-color);
    }
  `,
  earth: css`
    &:hover,
    &.active {
      border-color: var(--earth-color);
    }
  `,
  mars: css`
    &:hover,
    &.active {
      border-color: var(--mars-color);
    }
  `,
  jupiter: css`
    &:hover,
    &.active {
      border-color: var(--jupiter-color);
    }
  `,
  saturn: css`
    &:hover,
    &.active {
      border-color: var(--saturn-color);
    }
  `,
  uranus: css`
    &:hover,
    &.active {
      border-color: var(--uranus-color);
    }
  `,
  neptune: css`
    &:hover,
    &.active {
      border-color: var(--neptune-color);
    }
  `,
};

const StyledBaseNav = styled(NavLink)`
  text-decoration: none;
  color: var(--letters-color);
  opacity: 0.75;
  font-family: var(--text-quaternary-font-family);
  font-weight: var(--text-quaternary-font-weight);
  font-size: var(--text-quaternary-font-size);
  line-height: var(--text-quaternary-line-height);
  letter-spacing: var(--text-quaternary-letter-spacing);
  transition: all 0.3s;
  padding: 33px 0 27px 0;
  border-top: solid 4px transparent;

  &:hover,
  &.active {
    opacity: 1;
    font-size: 13px;
    border-top: 4px solid var(--mercury-color);
  }

  @media (max-width: 930px) {
    border-top: none !important;
    padding-bottom: 0 0 23px 0;
    border-bottom: 4px solid transparent;

    &:hover {
      opacity: 1;
      font-size: 13px;
      border-top: none;
    }
  }
`;

const PlanetsNavLarge = ({ planets }) => {
  const currentPlanet = useCurrentPlanet();

  return (
    <Container>
      {planets.map((planet, index) => {
        const planetName = planet?.toLowerCase();

        const StyledNav = styled(StyledBaseNav)`
          ${planetStyles[planetName]}
        `;

        return (
          <StyledNav
            key={`${planet}x${index}`}
            to={`/${planetName}/overview`}
            className={() =>
              planetName === currentPlanet
                ? `${planetName} active`
                : `${planetName}`
            }
          >
            {planet?.toUpperCase()}
          </StyledNav>
        );
      })}
    </Container>
  );
};

export default PlanetsNavLarge;
