const SuggestedCity = ({
  handleCitySelect,
}: {
  handleCitySelect: (city: string) => void;
}) => {
  const commonStyles =
    'text-grayishBlue text-[18px] cursor-pointer !pb-2 hover:text-white duration-300';

  const cities = ['Moscow', 'Alaska', 'Boston', 'Istanbul'];

  return (
    <div className="!pb-5 border-b border-borderColor">
      <h3 className="text-white text-[18px] font-medium !pb-3">
        Suggested City
      </h3>
      <ul className="">
        {cities.map((city) => (
          <li
            key={city}
            className={commonStyles}
            onClick={() => handleCitySelect(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedCity;
