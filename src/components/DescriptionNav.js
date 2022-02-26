// Dependencies
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DescriptionNav = () => {
  let currentPlanet = useLocation().pathname.split("/")[1];

  const planetAspects = [
    {
      text: "OVERVIEW",
      linkTo: `/${currentPlanet}/overview`,
    },
    {
      text: "INTERNAL STRUCTURE",
      linkTo: `/${currentPlanet}/structure`,
    },
    {
      text: "SURFACE GEOLOGY",
      linkTo: `/${currentPlanet}/geology`,
    },
  ];

  return (
    <ul className="descriptions-buttons">
      {planetAspects.map(({ text, linkTo }, index) => (
        <li key={`${text}x${index}`}>
          <NavLink
            to={linkTo}
            className={({ isActive }) =>
              isActive
                ? `descriptions-buttons__${currentPlanet}--selected`
                : `descriptions-buttons__${currentPlanet}`
            }
          >
            <button className={`descriptions-buttons__button`}>
              <span className="descriptions-buttons__number">
                {`0${index + 1}`}
              </span>
              <span className="descriptions-buttons__title">{text}</span>
            </button>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default DescriptionNav;
