import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  };
  return (
    <header className={style.searchHeader}>
      <form className={style.form} onSubmit={onHandleSubmit}>
        <button className={style.searchButton} type="submit">
          <FiSearch size="16px" />
        </button>
        <input
          className={style.input}
          type="text"
          placeholder="Search images and photos"
          name="search"
          autoComplete="off"
          autoFocus
          onChange={onChangeSearchValue}
          value={searchValue}
        />
      </form>
    </header>
  );
};
