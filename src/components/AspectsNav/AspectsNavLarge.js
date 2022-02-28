// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import useCurrentPlanet from "../../hooks/useCurrentPlanet";

// Custom hooks
import usePlanetAspects from "../../hooks/usePlanetAspects";

// Styles
const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 620px) {
    display: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 350px;
  height: 48px;
  background-color: transparent;
  border: var(--border);
  text-align: left;
  color: var(--letters-color);
  font-family: var(--text-tertiary-font-family);
  font-size: var(--text-tertiary-font-size);
  font-weight: var(--text-tertiary-font-weight);
  line-height: var(--text-tertiary-line-height);
  letter-spacing: var(--text-tertiary-letter-spacing);
  padding: 0 28px 0 28px;
  transition: all 0.3s;

  @media (max-width: 930px) {
    width: 281px;
    height: 40px;
    padding: 0 20px 0 20px;
    font-size: 9px;
    letter-spacing: 1.9px;
  }
`;

const NavNumber = styled.span`
  opacity: 0.5;
  margin-right: 25px;

  @media (max-width: 930px) {
    margin-right: 17px;
  }
`;

const StyledBaseLink = styled(NavLink)`
  &:hover button {
    background-color: #d8d8d820 !important;
    border: 1px solid transparent !important;
  }
`;

const planetStyles = {
  mercury: css`
    &:hover button,
    &.active button {
      background-color: var(--mercury-color);
    }
  `,
  venus: css`
    &:hover button,
    &.active button {
      background-color: var(--venus-color);
    }
  `,
  earth: css`
    &:hover button,
    &.active button {
      background-color: var(--earth-color);
    }
  `,
  mars: css`
    &:hover button,
    &.active button {
      background-color: var(--mars-color);
    }
  `,
  jupiter: css`
    &:hover button,
    &.active button {
      background-color: var(--jupiter-color);
    }
  `,
  saturn: css`
    &:hover button,
    &.active button {
      background-color: var(--saturn-color);
    }
  `,
  uranus: css`
    &:hover button,
    &.active button {
      background-color: var(--uranus-color);
    }
  `,
  neptune: css`
    &:hover button,
    &.active button {
      background-color: var(--neptune-color);
    }
  `,
};

const AspectsNavLarge = () => {
  const currentPlanet = useCurrentPlanet();
  const planetAspects = usePlanetAspects();
  const StyledNav = styled(StyledBaseLink)`
    ${planetStyles[currentPlanet]}
  `;

  return (
    <List>
      {planetAspects.map(({ text, linkTo }, index) => (
        <li key={`${text}x${index}`}>
          <StyledNav
            to={linkTo}
            className={({ isActive }) => (isActive ? `active` : ``)}
          >
            <Button>
              <NavNumber>{`0${index + 1}`}</NavNumber>
              <span>{text}</span>
            </Button>
          </StyledNav>
        </li>
      ))}
    </List>
  );
};
export default AspectsNavLarge;
