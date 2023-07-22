import { FiSearch } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <FiSearch />
      <input
        className="w-3/5 text-sm placeholder:text-xs outline-none"
        placeholder="Search for places ..."
      />
      <div className="ms-auto bg-lightGrey rounded-full p-0.5 hover:cursor-pointer hover:scale-125 transition-all duration-500">
        <BiTargetLock />
      </div>
    </div>
  );
};

export default SearchBar;
