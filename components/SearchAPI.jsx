import React from "react";
import { useState } from "react";
import { server } from '../config'
import SearchPlantCard from '../components/SearchPlantCard'

const SearchAPI = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const submitSearch = async () => {
    const res = await fetch(`${server}/api/GetFlora/?string=${searchInput}`);
    const articles = await res.json()
    console.log(articles)
  }

  return (
    <>
    Add a plant
    <input name='searchInput' value={searchInput} onChange={handleSearch}>
    </input>
    <button onClick={submitSearch}>Search</button>
    </>
  )
}
export default SearchAPI