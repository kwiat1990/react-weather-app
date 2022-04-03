const compassSectors = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
  "N",
];

const formatWindDirection = (degree: number) => {
  const singleSectorLength = 360 / (compassSectors.length - 1);
  const itemIndex = Math.floor(degree / singleSectorLength);
  return compassSectors[itemIndex];
};

export { formatWindDirection };
