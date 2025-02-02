import Sidebar from './components/sidebar';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <div className="content-container h-dvh bg-center bg-cover bg-no-repeat relative">
      <h3 className="absolute top-[70px] left-24 text-white text-2xl font-medium">
        the.weather
      </h3>
      <WeatherInfo />
      <Sidebar />
    </div>
  );
}

export default App;
