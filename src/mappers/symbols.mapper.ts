const weatherCodes = {
  clear: [800],
  fog: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
  heavyClouds: [802, 803, 804],
  heavyRain: [500, 501, 502, 503, 504],
  lightClouds: [801],
  lightRain: [300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531],
  shower: [500, 501],
  sleet: [611, 612, 613],
  snow: [511, 600, 601, 602, 615, 616, 620, 621, 622],
  thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
};

const iconsMap = [
  {
    name: "clear",
    codes: weatherCodes.clear,
  },
  {
    name: "shower",
    codes: weatherCodes.shower,
  },
  {
    name: "sleet",
    codes: weatherCodes.sleet,
  },
  {
    name: "snow",
    codes: weatherCodes.snow,
  },
  {
    name: "thunderstorm",
    codes: weatherCodes.thunderstorm,
  },
  {
    name: "heavy-clouds",
    codes: [...weatherCodes.heavyClouds, ...weatherCodes.fog],
  },
  {
    name: "heavy-rain",
    codes: weatherCodes.heavyRain,
  },
  {
    name: "light-clouds",
    codes: weatherCodes.lightClouds,
  },
  {
    name: "light-rain",
    codes: weatherCodes.lightRain,
  },
];

const symbolsNameMapper = (code: number) => {
  return iconsMap.find((icon) => icon.codes.includes(code))?.name || "clear";
};

export { symbolsNameMapper };
