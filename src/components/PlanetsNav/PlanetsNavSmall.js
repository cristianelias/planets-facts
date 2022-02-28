// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

// Assets
import iconChevron from "../../assets/icon-chevron.svg";
import stars from "../../assets/background-stars.svg";

// Styles
const planetStyles = {
  mercury: css`
    background-color: var(--mercury-color);
  `,
  venus: css`
    background-color: var(--venus-color);
  `,
  earth: css`
    background-color: var(--earth-color);
  `,
  mars: css`
    background-color: var(--mars-color);
  `,
  jupiter: css`
    background-color: var(--jupiter-color);
  `,
  saturn: css`
    background-color: var(--saturn-color);
  `,
  uranus: css`
    background-color: var(--uranus-color);
  `,
  neptune: css`
    background-color: var(--neptune-color);
  `,
};

const BasePlanetCircle = styled.span`
  background-color: #ffffff;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 20px 0;
  text-decoration: none;
  border-bottom: var(--border);
  gap: 24px;
  box-sizing: border-box;
`;

const PlanetName = styled.span`
  width: 100%;
  color: var(--letters-color);
  font-size: 15px;
  letter-spacing: 1.4;
  line-height: var(--text-tertiary-line-height);
  font-weight: var(--text-tertiary-font-weight);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Chevron = styled.img`
  text-align: right;
`;

const Container = styled.aside`
  padding: 0 24px;
  position: absolute;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  z-index: 2;
  background-image: url(${stars});
  animation: stars linear 10s 2s infinite alternate;
`;

const PlanetsNavSmall = ({ planets }, ref) => (
  <Container ref={ref}>
    {planets.map((planet, index) => {
      const planetName = planet?.toLowerCase();
      const StyledPlanetCircle = styled(BasePlanetCircle)`
        ${planetStyles[planetName]}
      `;

      return (
        <StyledLink key={`${planet}x${index}`} to={`/${planetName}/overview`}>
          <StyledPlanetCircle />
          <PlanetName>
            {planetName?.toUpperCase()}
            <Chevron src={iconChevron} alt="Arrow pointing right" />
          </PlanetName>
        </StyledLink>
      );
    })}
  </Container>
);

export default forwardRef(PlanetsNavSmall);
