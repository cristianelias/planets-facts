// Dependencies
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

// Components
import Header from "../components/Header";
import AspectsNavSmall from "../components/AspectsNav/AspectsNavSmall";

// Assets
import "@fontsource/antonio/500.css";
import "@fontsource/spartan/400.css";
import "@fontsource/spartan/700.css";

// Assets
import stars from "../assets/background-stars.svg";

const globalCSSRules = css`
  ${emotionReset},

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  li {
    list-style: none;
  }

  :root {
    --background-color: #070724;
    --letters-color: #ffffff;
    --mercury-color: #419ebb;
    --venus-color: #eda249;
    --earth-color: #6d2ed5;
    --mars-color: #d14c32;
    --jupiter-color: #d83a34;
    --saturn-color: #cd5120;
    --uranus-color: #1ec1a2;
    --neptune-color: #2d68f0;

    --border: solid 1px #ffffff20;

    --text-primary-font-family: "Antonio", sans-serif;
    --text-primary-font-size: 80px;
    --text-primary-font-weight: normal;
    --text-primary-line-height: 103px;
    --text-primary-letter-spacing: normal;

    --text-secondary-font-family: "Antonio", sans-serif;
    --text-secondary-font-size: 40px;
    --text-secondary-font-weight: normal;
    --text-secondary-line-height: 52px;
    --text-secondary-letter-spacing: -1.5px;

    --text-tertiary-font-family: "Spartan", sans-serif;
    --text-tertiary-font-size: 12px;
    --text-tertiary-font-weight: bold;
    --text-tertiary-line-height: 25px;
    --text-tertiary-letter-spacing: 2.6px;

    --text-quaternary-font-family: "Spartan", sans-serif;
    --text-quaternary-font-size: 11px;
    --text-quaternary-font-weight: bold;
    --text-quaternary-line-height: 25px;
    --text-quaternary-letter-spacing: 1px;

    --text-regular-font-family: "Spartan", sans-serif;
    --text-regular-font-size: 14px;
    --text-regular-font-weight: normal;
    --text-regular-line-height: 25px;
    --text-regular-letter-spacing: normal;
  }

  body {
    min-width: 300px;
    font-family: var(--text-regular-font-family);
    background-color: var(--background-color);
    color: var(--letters-color);
    font-size: var(--text-regular-font-size);
    font-weight: var(--text-regular-font-weight);
    line-height: var(--text-regular-line-height);
    letter-spacing: var(--text-regular-letter-spacing);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${stars});
    position: relative;
    animation: stars linear 10s 2s infinite alternate;
  }

  @keyframes stars {
    0% {
      background-position: 50% 0;
    }

    100% {
      background-position: 0;
    }
  }
`;

const ContentSection = styled.section`
  padding: 126px 11.5% 56px 11.5%;

  @media (max-width: 930px) {
    padding: 146px 39px 36px 39px;
  }

  @media (max-width: 620px) {
    padding: 95px 24px 47px 24px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalCSSRules} />

      <Header />
      <AspectsNavSmall />
      <ContentSection>{children}</ContentSection>
    </>
  );
};

export default Layout;
