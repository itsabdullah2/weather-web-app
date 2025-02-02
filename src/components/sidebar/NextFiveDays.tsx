const NextFiveDays = () => {
  const commonStyles =
    'flex items-center justify-between text-[18px] text-grayishBlue !pb-2';

  return (
    <div className="!py-5">
      <h3 className="text-white text-[18px] font-medium !pb-5">Next 5 days</h3>
      <ul className="">
        {/* Map over the array of data in here... */}
        <li className={`${commonStyles}`}>
          <span>__</span>
          <span>__</span>
        </li>
        <li className={`${commonStyles}`}>
          <span>__</span>
          <span>__</span>
        </li>
        <li className={`${commonStyles}`}>
          <span>__</span>
          <span>__</span>
        </li>
        <li className={`${commonStyles} !pb-1`}>
          <span>__</span>
          <span>__</span>
        </li>
      </ul>
    </div>
  );
};

export default NextFiveDays;
