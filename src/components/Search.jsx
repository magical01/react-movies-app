import React, {useState} from 'react';

function Search(props) {
  const {
    searchMovies = Function.prototype
  } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleClick = () => {
    searchMovies(search, type);
  }

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }

  }

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="flex items-center form-search">   
        <label for="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKey}id="simple-search" className="bg-gray-50 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-sky-600  dark:placeholder-white dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Search" />
        </div>
        <button onClick={handleClick} className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-600 rounded-lg  hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
        </button>
        <div className="radio-buttons">
          <div className="flex items-center">
            <input onChange={handleFilter} data-type="all" checked={type === 'all'} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
          </div>
          <div className="flex items-center">
              <input onChange={handleFilter} data-type="series" checked={type === 'series'} id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
              <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Only Series</label>
          </div>
          <div className="flex items-center">
              <input onChange={handleFilter} data-type="movie" checked={type === 'movie'} id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
              <label for="default-radio-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Only Movies</label>
          </div>
        </div>
      </div>
  )
}

export {Search}