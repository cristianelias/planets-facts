// Dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const planetStyles = {
  mercury: css`
    width: 38% !important;

    @media (max-width: 930px) {
      width: 184px !important;
    }

    @media (max-width: 620px) {
      width: 111px !important;
    }
  `,
  venus: css`
    width: 52.6% !important;

    @media (max-width: 930px) {
      width: 253px !important;
    }

    @media (max-width: 620px) {
      width: 154px !important;
    }
  `,
  earth: css`
    width: 59% !important;

    @media (max-width: 930px) {
      width: 285px !important;
    }

    @media (max-width: 620px) {
      width: 173px !important;
    }
  `,
  mars: css`
    width: 44% !important;

    @media (max-width: 930px) {
      width: 213px !important;
    }

    @media (max-width: 620px) {
      width: 129px !important;
    }
  `,
  jupiter: css`
    width: 76.5% !important;

    @media (max-width: 930px) {
      width: 369px !important;
    }

    @media (max-width: 620px) {
      width: 224px !important;
    }
  `,
  saturn: css`
    width: 87% !important;

    @media (max-width: 930px) {
      width: 422px !important;
    }

    @media (max-width: 620px) {
      width: 256px !important;
    }
  `,
  uranus: css`
    width: 60% !important;

    @media (max-width: 930px) {
      width: 290px !important;
    }

    @media (max-width: 620px) {
      width: 176px !important;
    }
  `,
  neptune: css`
    width: 59% !important;

    @media (max-width: 930px) {
      width: 285px !important;
    }

    @media (max-width: 620px) {
      width: 173px !important;
    }
  `,
};

const usePlanetImagesStyles = (Component, planet) => {
  return styled(Component)`
    ${planetStyles[planet]}
  `;
};

export default usePlanetImagesStyles;
