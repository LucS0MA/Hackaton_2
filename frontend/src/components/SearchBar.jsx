import { useState } from "react";
import PropTypes from "prop-types";
import "../style/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recherche..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
