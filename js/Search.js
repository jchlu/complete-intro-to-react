import React from 'react'
import { Link } from 'react-router'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is the default string'
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input onChange={this.handleSearchTermChange} type='text' value={this.state.searchTerm} placeholder='Search' />
        </header>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
        <Link to='/'>Home</Link>
      </div>
    )
  }
})
export default Search
