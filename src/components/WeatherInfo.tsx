import weatherIcon from '../assets/clouds.png';

const WeatherInfo = () => {
  return (
    <div className="absolute bottom-40 left-[30px] md:left-24 flex items-start md:items-end gap-2.5 text-white">
      <h3 className="text-[7.5rem] mb-[-29px]">
        <span className="">0</span>&deg;
      </h3>
      <div className="flex gap-2">
        <div className="text-[14px] text-grayishBlue">
          <p className="text-5xl font-medium">Egypt</p>
          <span className="">__</span>,<span className="">__ __ __</span>
        </div>

        <div className="flex flex-col gap-1.5 items-center text-[14px] text-grayishBlue">
          <img src={weatherIcon} alt="icon" width={50} />
          <span className="">__</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
