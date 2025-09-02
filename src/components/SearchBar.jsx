import React, { useState } from 'react'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim())
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <FaMapMarkerAlt className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city name..."
            className="search-input"
          />
        </div>
        <button type="submit" className="search-button">
          <FaSearch />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
