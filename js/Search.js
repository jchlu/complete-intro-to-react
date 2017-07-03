import React from 'react'
import { Link } from 'react-router'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {/*
         <h1>Search page!!</h1>
         <input type='text' placeholder='Search' />
         */}
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} {...show} />
          )
        })}
        <Link to='/'>Home</Link>
      </div>
    )
  }
})
export default Search
