import React from "react";
import "./SearchBar.css"; // Add specific CSS for SearchBar section

const SearchBar = () => {
  return (
    <section className="search-bar">
      <h3>Search Tours here..!!</h3>
      <div className="search-form">
        <input type="text" placeholder="Search Tour here..." className="input-field" />
        <button className="search-btn">Search</button>
        <input type="text" placeholder="From Tour Location" className="input-field" />
        <input type="text" placeholder="To Tour Location" className="input-field" />
        <button className="search-btn">Search</button>
      </div>
    </section>
  );
};

export default SearchBar;
