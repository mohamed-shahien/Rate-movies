import React, { useState } from "react";
import Search from "./search";

const Hearo = () => {
        const [searchTerm , setsearchTerm]= useState('I m a hero');
  return (
    <div>
      <div className="pattern" />
      <div className="wrapper">
        <img src="./hero-img.png" alt="hearo Banner" />
        <h1>Find <span className="text-gradient">Movies</span> You’ll Love Without the Hassle</h1>
        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
        <h1>{searchTerm}</h1>
      </div>
    </div>
  );
};

export default Hearo;
