// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";

// Assets
import iconSource from "../assets/icon-source.svg";

// Components
import AspectsNavLarge from "./AspectsNav/AspectsNavLarge";

// Styles
const Container = styled.div`
  width: 350px;
  z-index: 10;

  @media (max-width: 930px) {
    width: 100%;
    margin-top: 130px;
    display: flex;
    align-items: center;
    gap: 10%;
    margin-top: 0;
  }

  @media (max-width: 620px) {
    margin-top: 0px;
  }
`;

const InnerWrapper = styled.div`
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const userSelectable = css`
  user-select: text;
`;

const Title = styled.h1`
  font-family: var(--text-primary-font-family);
  font-weight: var(--text-primary-font-weight);
  font-size: var(--text-primary-font-size);
  line-height: var(--text-primary-line-height);
  margin-bottom: 23px;

  @media (max-width: 930px) {
    font-size: 48px;
    line-height: 62px;
  }

  @media (max-width: 620px) {
    margin-bottom: 16px;
  }

  ${userSelectable}
`;

const Description = styled.p`
  min-height: 150px;
  ${userSelectable}

  @media (max-width: 930px) {
    font-size: 11px;
    line-height: 22px;

    min-height: unset;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--letters-color);
  opacity: 0.5;
  margin: 24px 0 39px 0;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 930px) {
    margin: 32px 0 0 0;
    font-size: 12px;
  }

  @media (max-width: 620px) {
    margin: 32px 0 28px 0;
  }
`;

const ExternalSourceName = styled.span`
  font-weight: bold;
  text-decoration: underline;
  margin: 0 8px;
`;

const ExternalSourceIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const PlanetDescription = () => {
  const { planet, aspect } = useSelector((state) => state).planets;
  const { content, source } = planet[aspect];

  return (
    <>
      {content && source && (
        <Container>
          <InnerWrapper>
            <Title>{planet?.name?.toUpperCase()}</Title>
            <Description>{content}</Description>
            <div>
              <ExternalLink href={source} target="_blank" rel="noreferrer">
                Source : <ExternalSourceName>Wikipedia</ExternalSourceName>
                <ExternalSourceIcon
                  className="content-description__icon"
                  src={iconSource}
                  alt="icon source"
                />
              </ExternalLink>
            </div>
          </InnerWrapper>

          <AspectsNavLarge />
        </Container>
      )}
    </>
  );
};
export default PlanetDescription;
