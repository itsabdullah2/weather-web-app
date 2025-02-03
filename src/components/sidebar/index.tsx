import NextFiveDays from './NextFiveDays';
import SearchInput from './SearchInput';
import SuggestedCity from './SuggestedCity';
import WeatherDetails from './WeatherDetails';

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCitySelect: (city: string) => void;
  searchValue: string;
  humidity: number;
  wind: number;
  sunrise: string;
  sunset: string;
};

const Sidebar = ({
  handleSubmit,
  onChange,
  handleCitySelect,
  searchValue,
  humidity,
  wind,
  sunrise,
  sunset,
}: Props) => {
  return (
    <div className="absolute top-0 right-0 w-[600px] h-dvh !pt-10 !px-10 md:!px-[60px] bg-opacityBlue">
      <SearchInput
        handleSubmit={handleSubmit}
        onChange={onChange}
        searchValue={searchValue}
      />
      <SuggestedCity handleCitySelect={handleCitySelect} />
      <WeatherDetails
        humidity={humidity}
        wind={wind}
        sunrise={sunrise}
        sunset={sunset}
      />
      <NextFiveDays />
    </div>
  );
};

export default Sidebar;
