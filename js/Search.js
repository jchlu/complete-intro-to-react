import React from 'react'
import { Link } from 'react-router'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <h1>Search page!!</h1>
        <input type='text' placeholder='Search' />
        <Link to='/'>Home</Link>
      </div>
    )
  }
})
export default Search
