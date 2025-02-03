import { FC } from 'react';
import searchIcon from '../../assets/search.png';

interface Props {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput: FC<Props> = ({ searchValue, onChange, handleSubmit }) => {
  return (
    <form className="!mb-5 flex" onSubmit={handleSubmit}>
      <input
        type="search"
        id="search"
        className="w-[350px] !pt-5 !pb-[5px] text-grayishBlue border-b border-borderColor text-[18px] font-medium focus:outline-none focus:placeholder:opacity-0 placeholder:duration-300 caret-orange hover:placeholder:text-white"
        placeholder="Search"
        value={searchValue}
        onChange={onChange}
      />
      <button
        type="submit"
        className="flex items-center justify-center w-[87px] h-[87px] bg-orange border-none absolute top-0 right-0 cursor-pointer"
      >
        <img src={searchIcon} alt="search icon" width={30} />
      </button>
    </form>
  );
};

export default SearchInput;
