const WeatherDetails = () => {
  const commonStyles =
    'flex items-center justify-between text-[18px] text-grayishBlue !pb-2';

  return (
    <div className="!py-5 border-b border-borderColor">
      <h3 className="text-white text-[18px] font-medium !pb-5">
        Weather Details
      </h3>
      <ul className="">
        {/* Map over the array of data in here... */}
        <li className={`${commonStyles}`}>
          <span>Humidity</span>
          <span>0%</span>
        </li>
        <li className={`${commonStyles}`}>
          <span>Wind</span>
          <span>0km/h</span>
        </li>
        <li className={`${commonStyles}`}>
          <span>Sunrise</span>
          <span>00:00 AM</span>
        </li>
        <li className={`${commonStyles} !pb-1`}>
          <span>Sunset</span>
          <span>00:00 PM</span>
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
