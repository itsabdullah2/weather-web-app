// API Key
const API_KEY = 'c8ae62a7a9621960f5e261f34387856f';

// Get weather data
export async function getWeatherData(lat: number, lon: number) {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return fetch(weatherApiUrl)
    .then((response) => response.json())
    .then((data) => data);
}
// Get coordinate data
export async function getCityCoordinates(cityName: string) {
  const coordinatesApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  return fetch(coordinatesApi)
    .then((response) => response.json())
    .then((data) => {
      const { lat, lon } = data[0];
      return getWeatherData(lat, lon);
    });
}

export interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  icon: string;
  description: string;
  country: string;
  sunrise: string;
  sunset: string;
  day: string;
  date: string;
}

type SetWeatherData = (weather: WeatherData) => void;

export const getWeather = (
  cityName: string,
  setWeatherData: SetWeatherData
) => {
  const city = cityName?.trim();
  getCityCoordinates(city)
    .then((data) => {
      if (!data) return;

      const tempInCelsius = Math.round(data.main.temp - 273.15);
      const humidity = data.main.humidity;
      const wind = data.wind.speed;
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const description = data.weather[0].description;
      const country = `${data.sys.country}, ${data.name}`;

      // Convert sunrise & sunset times to readable format
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
        'en-US',
        { hour: '2-digit', minute: '2-digit' }
      );
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
        'en-US',
        { hour: '2-digit', minute: '2-digit' }
      );

      // Format date
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      };
      const formattedDate = today.toLocaleDateString('en-US', options);

      // Set weather data
      setWeatherData({
        temp: tempInCelsius,
        humidity,
        wind,
        icon,
        description,
        country,
        sunrise,
        sunset,
        day: formattedDate.split(',')[0],
        date: formattedDate.split(',')[1].trim(),
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
