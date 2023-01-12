import React from "react";

const SearchForm = ({ children }) => {
  return (
    <div className="search_wrapper">
      {" "}
      <h2>Быстрый поиск</h2>
      <div className="search_list">{children}</div>
    </div>
  );
};

export default SearchForm;
