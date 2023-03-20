import React from "react";
import { useState } from "react";


const SearchAPI = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const submit = () => {
    onSubmit(searchInput);
    setSearchInput('');
  }

  return (
    <>
    Add a perennial plant
    <input name='searchInput' value={searchInput} onChange={handleSearch}>
    </input>
    <button onClick={submit}>Search</button>
    </>
  )
}
export default SearchAPI