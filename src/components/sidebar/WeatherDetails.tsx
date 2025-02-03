import { FC } from 'react';

type Props = {
  humidity: number;
  wind: number;
  sunrise: string;
  sunset: string;
};

const WeatherDetails: FC<Props> = ({ humidity, wind, sunrise, sunset }) => {
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
          <span>{humidity}%</span>
        </li>
        <li className={`${commonStyles}`}>
          <span>Wind</span>
          <span>{wind}km/h</span>
        </li>
        <li className={`${commonStyles}`}>
          <span>Sunrise</span>
          <span>{sunrise}</span>
        </li>
        <li className={`${commonStyles} !pb-1`}>
          <span>Sunset</span>
          <span>{sunset}</span>
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
