import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import WeatherInfo from './components/WeatherInfo';
import { WeatherData, getWeather } from './services';

const initialWeatherState: WeatherData = {
  temp: 0,
  humidity: 0,
  wind: 0,
  icon: '',
  description: '',
  country: '',
  sunrise: '00:00',
  sunset: '00:00',
  day: '',
  date: '',
};

function App() {
  const [weatherData, setWeatherData] =
    useState<WeatherData>(initialWeatherState);
  const [searchValue, setSearchValue] = useState<string>('');

  // Get default weather data
  useEffect(() => {
    getWeather('Faiyum', setWeatherData);
  }, []);

  const handleCitySelect = (city: string) => {
    getWeather(city, setWeatherData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getWeather(searchValue, setWeatherData);
    setSearchValue('');
  };

  return (
    <div className="content-container h-dvh bg-center bg-cover bg-no-repeat relative">
      <h3 className="absolute top-[70px] left-24 text-white text-2xl font-medium">
        the.weather
      </h3>
      <WeatherInfo {...weatherData} />
      <Sidebar
        handleSubmit={handleSubmit}
        searchValue={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        handleCitySelect={handleCitySelect}
        {...weatherData}
      />
    </div>
  );
}

export default App;
