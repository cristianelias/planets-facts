// Dependencies
import { useSelector } from "react-redux";

// Assets
import iconSource from "../assets/icon-source.svg";

// Components
import AspectsNavLarge from "./AspectsNav/AspectsNavLarge";

const PlanetDescription = () => {
  const { planet, aspect } = useSelector((state) => state).planets;
  const { content, source } = planet[aspect];

  return (
    <>
      {content && source && (
        <div className="content-description">
          <div className="content-description__description">
            <h1 className="content-description__title">
              {planet?.name?.toUpperCase()}
            </h1>
            <p className="content-description__paragraph">{content}</p>
            <div>
              <a
                className="content-description__source"
                href={source}
                target="_blank"
                rel="noreferrer"
              >
                Source : <span>Wikipedia</span>
                <img
                  className="content-description__icon"
                  src={iconSource}
                  alt="icon source"
                />
              </a>
            </div>
          </div>

          <AspectsNavLarge />
        </div>
      )}
    </>
  );
};
export default PlanetDescription;
