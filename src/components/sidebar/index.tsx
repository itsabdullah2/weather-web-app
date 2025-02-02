import NextFiveDays from './NextFiveDays';
import SearchInput from './SearchInput';
import SuggestedCity from './SuggestedCity';
import WeatherDetails from './WeatherDetails';

const Sidebar = () => {
  return (
    <div className="absolute top-0 right-0 w-[600px] h-dvh !pt-10 !px-10 md:!px-[60px] bg-opacityBlue">
      <SearchInput />
      <SuggestedCity />
      <WeatherDetails />
      <NextFiveDays />
    </div>
  );
};

export default Sidebar;
