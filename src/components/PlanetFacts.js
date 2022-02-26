// Dependencies
import { useSelector } from "react-redux";

const PlanetFacts = () => {
  const { planet } = useSelector((state) => state).planets;

  return (
    <footer>
      <dl className="list-footer-cards">
        <div className="card">
          <dt className="card__term">ROTATION TIME</dt>
          <dd className="card__description">{planet.rotation}</dd>
        </div>
        <div className="card">
          <dt className="card__term">REVOLUTION TIME</dt>
          <dd className="card__description">{planet.revolution}</dd>
        </div>
        <div className="card">
          <dt className="card__term">RADIUS</dt>
          <dd className="card__description">{planet.radius}</dd>
        </div>
        <div className="card">
          <dt className="card__term">AVERAGE TEMP.</dt>
          <dd className="card__description">{planet.temperature}</dd>
        </div>
      </dl>
    </footer>
  );
};
export default PlanetFacts;
