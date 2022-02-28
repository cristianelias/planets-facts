// Custom hooks
import useCurrentPlanet from "./useCurrentPlanet";

const usePlanetAspects = () => {
  const planet = useCurrentPlanet();

  return [
    {
      text: "OVERVIEW",
      linkTo: `/${planet}/overview`,
    },
    {
      text: "INTERNAL STRUCTURE",
      linkTo: `/${planet}/structure`,
    },
    {
      text: "SURFACE GEOLOGY",
      linkTo: `/${planet}/geology`,
    },
  ];
};

export default usePlanetAspects;
