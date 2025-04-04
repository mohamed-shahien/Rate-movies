import React from "react";

const Search = ({searchTerm , setsearchTerm}) => {
  return <div className="search">
<div className="">
        <img src="./search.svg" alt="search icon" />
        <input type="text" placeholder="Search for movies..." value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
</div>

  </div>;
};

export default Search;
