const SuggestedCity = () => {
  const commonStyles =
    'text-grayishBlue text-[18px] cursor-pointer !pb-2 hover:text-white duration-300';

  return (
    <div className="!pb-5 border-b border-borderColor">
      <h3 className="text-white text-[18px] font-medium !pb-3">
        Suggested City
      </h3>
      <ul className="">
        <li className={`${commonStyles}`}>Giza</li>
        <li className={`${commonStyles}`}>Cairo</li>
        <li className={`${commonStyles}`}>Faiyum</li>
        <li className={`${commonStyles} !pb-1`}>Istanbul</li>
      </ul>
    </div>
  );
};

export default SuggestedCity;
