// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const planetStyles = {
  mercury: css`
    width: 290px;
    height: 290px;

    @media (max-width: 1140px) {
      width: 184px;
      height: 184px;
    }

    @media (max-width: 620px) {
      width: 111px;
      height: 111px;
    }
  `,
  venus: css`
    width: 400px;
    height: 400px;

    @media (max-width: 1140px) {
      width: 253px;
      height: 253px;
    }

    @media (max-width: 620px) {
      width: 154px;
      height: 154px;
    }
  `,
  earth: css`
    width: 450px;
    height: 450px;

    @media (max-width: 1140px) {
      width: 285px;
      height: 285px;
    }

    @media (max-width: 620px) {
      width: 173px;
      height: 173px;
    }
  `,
  mars: css`
    height: 336px;
    width: 336px;

    @media (max-width: 1140px) {
      height: 213px;
      width: 213px;
    }

    @media (max-width: 620px) {
      height: 129px;
      width: 129px;
    }
  `,
  jupiter: css`
    height: 582px;
    width: 582px;

    @media (max-width: 1140px) {
      height: 369px;
      width: 369px;
    }

    @media (max-width: 620px) {
      height: 224px;
      width: 224px;
    }
  `,
  saturn: css`
    height: 666px;
    width: 666px;

    @media (max-width: 1140px) {
      height: 422px;
      width: 422px;
    }

    @media (max-width: 620px) {
      height: 159px;
      width: 159px;
    }
  `,
  uranus: css`
    height: 458px;
    width: 458px;

    @media (max-width: 1140px) {
      height: 290px;
      width: 290px;
    }

    @media (max-width: 620px) {
      height: 176px;
      width: 176px;
    }
  `,
  neptune: css`
    height: 450px;
    width: 450px;

    @media (max-width: 1140px) {
      height: 285px;
      width: 285px;
    }

    @media (max-width: 620px) {
      height: 173px;
      width: 173px;
    }
  `,
};

const usePlanetImagesStyles = (Component, planet) => {
  return styled(Component)`
    ${planetStyles[planet]}
  `;
};

export default usePlanetImagesStyles;
