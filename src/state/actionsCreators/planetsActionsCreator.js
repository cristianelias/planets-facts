const changeCurrentPlanet = (payload) => ({
  type: "CHANGE_CURRENT_PLANET",
  payload,
});

const changeCurrentAspect = (payload) => ({
  type: "CHANGE_CURRENT_ASPECT",
  payload,
});

export { changeCurrentPlanet, changeCurrentAspect };
