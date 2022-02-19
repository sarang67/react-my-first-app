const data = [
  { city: "Amstrerdam", temp: 299.15 },
  { city: "Berlin", temp: 195.15 },
  { city: "Delhi", temp: 307.15 },
  { city: "Johanseburg", temp: 288.15 },
  { city: "Londan", temp: 294.15 },
  { city: "New yourk", temp: 301.55 },
];

export const wetaherdata = (scale) => {
  switch (scale) {
    case "celcius": {
      return data.map(({ city, temp }) => {
        return { city, temp: (temp - 273.15).toFixed(2) };
      });
      break;
    }
    case "fahrenheit": {
      return data.map(({ city, temp }) => {
        return { city, temp: ((temp - 273.15) * 1.8 + 32).toFixed(2) };
      });
      break;
    }
    case "kelvin": {
      return data;
    }
  }
};
