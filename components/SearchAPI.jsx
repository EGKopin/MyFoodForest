import React from "react";
import { useState } from "react";


const SearchAPI = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  // const submitSearch = async () => {
  //   const res = await fetch(`${server}/api/GetFlora/?string=${searchInput}`);
  //   const articles = await res.json()
  //   console.log(articles)
  // }

  return (
    <>
    Add a perennial plant
    <input name='searchInput' value={searchInput} onChange={handleSearch}>
    </input>
    <button onClick={() => onSubmit(searchInput)}>Search</button>
    </>
  )
}
export default SearchAPI