const pathDoesNotExist = (path, planets) => {
  return !planets.includes(path.toLowerCase());
};

export { pathDoesNotExist };
