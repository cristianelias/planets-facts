// Dependencies
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
    box-sizing: border-box;
  }

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

  .--hidden {
    display: none !important;
  }

  [class^="aspects-nav-large__"]:hover button {
    background-color: #d8d8d820 !important;
    border: 1px solid transparent !important;
  }

  .aspects-nav-large__mercury:hover button,
  .aspects-nav-large__mercury--selected button {
    background-color: var(--mercury-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__venus:hover button,
  .aspects-nav-large__venus--selected button {
    background-color: var(--venus-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__earth:hover button,
  .aspects-nav-large__earth--selected button {
    background-color: var(--earth-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__mars:hover button,
  .aspects-nav-large__mars--selected button {
    background-color: var(--mars-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__jupiter:hover button,
  .aspects-nav-large__jupiter--selected button {
    background-color: var(--jupiter-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__saturn:hover button,
  .aspects-nav-large__saturn--selected button {
    background-color: var(--saturn-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__neptune:hover button,
  .aspects-nav-large__neptune--selected button {
    background-color: var(--neptune-color);
    border: solid 1px transparent;
  }

  .aspects-nav-large__uranus:hover button,
  .aspects-nav-large__uranus--selected button {
    background-color: var(--uranus-color);
    border: solid 1px transparent;
  }

  .header-nav__mercury:hover,
  .--mercury-active {
    border-color: var(--mercury-color) !important;
  }

  .header-nav__venus:hover,
  .--venus-active {
    border-color: var(--venus-color) !important;
  }

  .header-nav__earth:hover,
  .--earth-active {
    border-color: var(--earth-color) !important;
  }

  .header-nav__mars:hover,
  .--mars-active {
    border-color: var(--mars-color) !important;
  }

  .header-nav__jupiter:hover,
  .--jupiter-active {
    border-color: var(--jupiter-color) !important;
  }

  .header-nav__saturn:hover,
  .--saturn-active {
    border-color: var(--saturn-color) !important;
  }

  .header-nav__uranus:hover,
  .--uranus-active {
    border-color: var(--uranus-color) !important;
  }

  .header-nav__neptune:hover,
  .--neptune-active {
    border-color: var(--neptune-color) !important;
  }

  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px 0px 32px;
    border-bottom: var(--border);
    padding: 0 40px 0 32px;
  }

  .header-nav__title {
    font-family: var(--text-secondary-font-family);
    font-size: 28px;
    line-height: 36px;
    letter-spacing: var(--text-secondary-letter-spacing);
    font-weight: var(--text-secondary-font-weight);
  }

  .header-nav__container-planets {
    display: flex;
    gap: 33px;
  }

  .header-nav__planet {
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
  }

  .header-nav__planet--active {
    opacity: 1;
    font-size: 13px;
    border-top: 4px solid var(--mercury-color);
  }

  .header-nav__dropdown-mobile {
    display: none;
    cursor: pointer;
    padding: 10px;
    padding-right: 0;
    transition: all 0.3s;
  }

  .header-nav__dropdown-mobile:hover {
    transform: scale(1.1);
  }

  .header-nav-mobile {
    display: none;
    padding: 24px 24px 0 24px;
  }

  .header-nav-mobile__planet {
    display: flex;
    padding: 20px 0;
    text-decoration: none;
    border-bottom: var(--border);
    gap: 24px;
    box-sizing: border-box;
  }

  .header-nav-mobile__text-image {
    width: 100%;
    color: var(--letters-color);
    font-size: 15px;
    letter-spacing: 1.4;
    line-height: var(--text-tertiary-line-height);
    font-weight: var(--text-tertiary-font-weight);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-nav-mobile__planet-circle {
    background-color: #ffffff;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .header-nav-mobile__chevron {
    text-align: right;
  }

  .header-nav-mobile__planet .--circle-mercury {
    background-color: var(--mercury-color);
  }

  .header-nav-mobile__planet .--circle-venus {
    background-color: var(--venus-color);
  }

  .header-nav-mobile__planet .--circle-earth {
    background-color: var(--earth-color);
  }

  .header-nav-mobile__planet .--circle-mars {
    background-color: var(--mars-color);
  }

  .header-nav-mobile__planet .--circle-jupiter {
    background-color: var(--jupiter-color);
  }

  .header-nav-mobile__planet .--circle-saturn {
    background-color: var(--saturn-color);
  }

  .header-nav-mobile__planet .--circle-uranus {
    background-color: var(--uranus-color);
  }

  .header-nav-mobile__planet .--circle-neptune {
    background-color: var(--neptune-color);
  }

  .aspects-nav-small {
    display: none;
    justify-content: space-between;
    border-bottom: var(--border);
    padding: 0px 24px;
  }

  [class^="aspects-nav-small__button"] {
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
  }

  [class$="--active"] [class^="aspects-nav-small__button"],
  [class^="aspects-nav-small__button"]:hover {
    opacity: 1;
  }

  .aspects-nav-small__link-mercury--active button,
  .aspects-nav-small__button-mercury:hover {
    border-color: var(--mercury-color);
  }

  .aspects-nav-small__link-venus--active button,
  .aspects-nav-small__button-venus:hover {
    border-color: var(--venus-color);
  }

  .aspects-nav-small__link-earth--active button,
  .aspects-nav-small__button-earth:hover {
    border-color: var(--earth-color);
  }

  .aspects-nav-small__link-mars--active button,
  .aspects-nav-small__button-mars:hover {
    border-color: var(--mars-color);
  }

  .aspects-nav-small__link-jupiter--active button,
  .aspects-nav-small__button-jupiter:hover {
    border-color: var(--jupiter-color);
  }

  .aspects-nav-small__link-saturn--active button,
  .aspects-nav-small__button-saturn:hover {
    border-color: var(--saturn-color);
  }

  .aspects-nav-small__link-uranus--active button,
  .aspects-nav-small__button-uranus:hover {
    border-color: var(--uranus-color);
  }

  .aspects-nav-small__link-neptune--active button,
  .aspects-nav-small__button-neptune:hover {
    border-color: var(--neptune-color);
  }

  .aspects-nav-small__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    padding: 126px 11.5% 56px 11.5%;
  }

  .main-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 27%;
    margin-bottom: 87px;
  }

  .mercury-image {
    width: 290px;
    height: 290px;
  }
  .venus-image {
    width: 400px;
    height: 400px;
  }
  .earth-image {
    width: 450px;
    height: 450px;
  }
  .mars-image {
    height: 336px;
    width: 336px;
  }
  .jupiter-image {
    height: 582px;
    width: 582px;
  }
  .saturn-image {
    height: 666px;
    width: 666px;
  }
  .uranus-image {
    height: 458px;
    width: 458px;
  }
  .neptune-image {
    height: 450px;
    width: 450px;
  }

  .planet-geology-image {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    bottom: -100px;
  }

  .content__planet-image--spinning {
    animation: planet-transform 2s linear,
      planet-movement 20s 2s linear infinite;
  }

  .content-description__paragraph {
    min-height: 150px;
  }

  @keyframes planet-transform {
    0% {
      transform: scale(7) rotate(360deg);
      opacity: 0.1;
    }

    60% {
      transform: scale(5) rotate(300deg);
      opacity: 0.3;
    }

    80% {
      transform: scale(3) rotate(200deg);
      opacity: 0.5;
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes planet-movement {
    0% {
      transform: rotate(360deg);
    }
  }

  .container-img {
    position: relative;
    animation: puls 2s 2s ease-in-out infinite alternate;
  }

  @keyframes puls {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.04);
    }

    100% {
      transform: scale(1);
    }
  }

  .content-description {
    width: 350px;
  }

  .content-description__title,
  .content-description__paragraph {
    user-select: text;
  }

  .content-description__title {
    font-family: var(--text-primary-font-family);
    font-weight: var(--text-primary-font-weight);
    font-size: var(--text-primary-font-size);
    line-height: var(--text-primary-line-height);
    margin-bottom: 23px;
  }

  .content-description__source {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--letters-color);
    opacity: 0.5;
    margin: 24px 0 39px 0;
    transition: all 0.3s;
  }

  .content-description__source:hover {
    opacity: 1;
  }

  .content-description__source > span {
    font-weight: bold;
    text-decoration: underline;
    margin: 0 8px;
  }

  .content-description__icon {
    width: 12px;
    height: 12px;
  }

  .aspects-nav-large {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .aspects-nav-large > li {
    list-style: none;
  }

  .aspects-nav-large__button {
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
  }

  .aspects-nav-large__number {
    opacity: 0.5;
    margin-right: 25px;
  }

  .list-footer-cards {
    display: flex;
    justify-content: space-between;
    gap: 2.7%;
  }

  .card {
    width: 100%;
    padding: 20px 10px 27px 23px;
    border: var(--border);
  }

  .card__term {
    font-family: var(--text-quaternary-font-family);
    font-size: var(--text-quaternary-font-size);
    font-weight: var(--text-quaternary-font-weight);
    line-height: var(--text-quaternary-line-height);
    letter-spacing: var(--text-quaternary-letter-spacing);
    opacity: 0.5;
  }

  .card__description {
    font-family: var(--text-secondary-font-family);
    font-size: var(--text-secondary-font-size);
    font-weight: var(--text-secondary-font-weight);
    line-height: var(--text-secondary-line-height);
    letter-spacing: var(--text-secondary-letter-spacing);
  }

  @media (max-width: 1140px) {
    .mercury-image {
      width: 184px;
      height: 184px;
    }
    .venus-image {
      width: 253px;
      height: 253px;
    }

    .earth-image {
      width: 285px;
      height: 285px;
    }
    .mars-image {
      height: 213px;
      width: 213px;
    }

    .jupiter-image {
      height: 369px;
      width: 369px;
    }
    .saturn-image {
      height: 422px;
      width: 422px;
    }
    .uranus-image {
      height: 290px;
      width: 290px;
    }
    .neptune-image {
      height: 285px;
      width: 285px;
    }

    .main-content {
      gap: 0;
      justify-content: space-between;
    }

    .card {
      padding: 15px 10px 19px 15px;
    }

    .card__term {
      font-size: 8px;
      line-height: 16px;
      letter-spacing: 0.7px;
    }

    .card__description {
      font-size: 24px;
      line-height: 31px;
      letter-spacing: -0.9px;
    }
  }

  @media (max-width: 930px) {
    .header-nav {
      height: 159px;
      flex-direction: column;
      padding: 32px 51px 0 51px;
    }

    .header-nav__planet {
      border-top: unset;
      padding-bottom: 0 0 23px 0;
      border-bottom: 4px solid transparent;
    }

    .header-nav__planet:hover {
      opacity: 1;
      font-size: 13px;
      border-top: unset;
    }

    .header-nav__container-planets {
      width: 100%;
      justify-content: space-between;
      gap: 0;
    }

    .content {
      padding: 146px 39px 36px 39px;
    }

    .main-content {
      flex-direction: column;
    }

    .content-description {
      width: 100%;
      margin-top: 130px;
      display: flex;
      align-items: center;
      gap: 10%;
    }

    .content-description__title {
      font-size: 48px;
      line-height: 62px;
    }

    .content-description__paragraph {
      font-size: 11px;
      line-height: 22px;
    }

    .content-description__source {
      margin: 32px 0 0 0;
      font-size: 12px;
    }
    .aspects-nav-large__button {
      width: 281px;
      height: 40px;
      padding: 0 20px 0 20px;
      font-size: 9px;
      letter-spacing: 1.9px;
    }

    .aspects-nav-large__number {
      margin-right: 17px;
    }

    .main-content {
      margin-bottom: 27px;
    }
  }

  @media (max-width: 620px) {
    TABLETTTT .mercury-image {
      width: 111px;
      height: 111px;
    }
    .venus-image {
      width: 154px;
      height: 154px;
    }

    .earth-image {
      width: 173px;
      height: 173px;
    }
    .mars-image {
      height: 129px;
      width: 129px;
    }

    .jupiter-image {
      height: 224px;
      width: 224px;
    }
    .saturn-image {
      height: 159px;
      width: 159px;
    }
    .uranus-image {
      height: 176px;
      width: 176px;
    }
    .neptune-image {
      height: 173px;
      width: 173px;
    }

    .header-nav__container-planets {
      display: none;
    }

    .header-nav__dropdown-mobile {
      display: inline;
    }

    .header-nav {
      height: auto;
      flex-direction: row;
      padding: 16px 24px;
    }

    .aspects-nav-small {
      display: flex;
    }

    .main-content {
      margin: 0;
    }

    .content {
      padding: 95px 24px 47px 24px;
    }

    .content__planet-image {
      width: 111px;
      height: 111px;
    }

    .content-description {
      margin-top: 98px;
    }

    .content-description__description {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content-description__title {
      margin-bottom: 16px;
    }

    .content-description__source {
      margin: 32px 0 28px 0;
    }

    .aspects-nav-large {
      display: none;
    }

    .list-footer-cards {
      flex-direction: column;
      gap: 8px;
    }

    .card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 9px 24px 13px 24px;
    }

    .card__description {
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.75px;
    }

    .header-nav-mobile {
      display: block;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalCSSRules} />

      <Header />
      <AspectsNavSmall />
      <section className="content">{children}</section>
    </>
  );
};

export default Layout;
