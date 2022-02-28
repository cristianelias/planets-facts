// Dependencies
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

// Styles
const List = styled.dl`
  display: flex;
  justify-content: space-between;
  gap: 2.7%;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 20px 10px 27px 23px;
  border: var(--border);

  @media (max-width: 1140px) {
    padding: 15px 10px 19px 15px;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 9px 24px 13px 24px;
  }
`;

const Term = styled.dt`
  font-family: var(--text-quaternary-font-family);
  font-size: var(--text-quaternary-font-size);
  font-weight: var(--text-quaternary-font-weight);
  line-height: var(--text-quaternary-line-height);
  letter-spacing: var(--text-quaternary-letter-spacing);
  opacity: 0.5;

  @media (max-width: 1140px) {
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.7px;
  }
`;

const Description = styled.dd`
  font-family: var(--text-secondary-font-family);
  font-size: var(--text-secondary-font-size);
  font-weight: var(--text-secondary-font-weight);
  line-height: var(--text-secondary-line-height);
  letter-spacing: var(--text-secondary-letter-spacing);

  @media (max-width: 1140px) {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
  }

  @media (max-width: 620px) {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.75px;
  }
`;

const PlanetFacts = () => {
  const { planet } = useSelector((state) => state).planets;

  const facts = [
    {
      term: "ROTATION TIME",
      description: planet.rotation,
    },
    {
      term: "REVOLUTION TIME",
      description: planet.revolution,
    },
    {
      term: "RADIUS",
      description: planet.radius,
    },
    {
      term: "AVERAGE TEMP.",
      description: planet.temperature,
    },
  ];

  return (
    <footer>
      <List>
        {facts.map(({ term, description }, index) => (
          <Card key={`${term}x${index}`}>
            <Term>{term}</Term>
            <Description>{description}</Description>
          </Card>
        ))}
      </List>
    </footer>
  );
};
export default PlanetFacts;
