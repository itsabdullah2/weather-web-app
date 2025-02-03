import { FC } from 'react';

type Props = {
  temp: number;
  country: string;
  day: string;
  date: string;
  description: string;
  icon: string;
};

const WeatherInfo: FC<Props> = ({
  temp,
  country,
  day,
  date,
  description,
  icon,
}) => {
  return (
    <div className="absolute bottom-40 left-[30px] md:left-24 flex items-start md:items-end gap-2.5 text-white">
      <h3 className="text-[7.5rem] mb-[-29px]">
        <span className="">{temp}</span>&deg;
      </h3>
      <div className="flex gap-2">
        <div className="text-[14px] text-grayishBlue">
          <p className="text-5xl font-medium">{country}</p>
          <span className="">{day}</span>, <span className="">{date}</span>
        </div>

        <div className="flex flex-col gap-1.5 items-center text-[14px] text-grayishBlue">
          <img src={icon} alt="icon" width={50} />
          <span className="">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
