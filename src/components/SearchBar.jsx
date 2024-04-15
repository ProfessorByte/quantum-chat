import { useState } from "react";
import PropTypes from "prop-types";

export const SearchBar = ({ filterFunction }) => {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      name="search"
      id="search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        filterFunction(e.target.value);
      }}
      className="p-2 border-2 border-green-500 rounded-3xl bg-[#202123] text-lg my-3"
    />
  );
};

SearchBar.propTypes = {
  filterFunction: PropTypes.func.isRequired,
};
