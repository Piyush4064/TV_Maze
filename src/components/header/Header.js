import React from 'react';
import SearchBar from '../../organism/searchBar/SearchBar';
import './header.css';

function Header() {
    const [searchData, setSearchData] = React.useState(["Hello 1 ", "Hello 2", "Hello 3", "Hello4", "Hello5", "Hello6","Hello7"]);

    const onSearch = (event) => {
        //api will be called here
        console.log("Search Clicked");
        setSearchData(["Hello1", "Hello2"]);
    }

  return (
    <div className='header'>
        <img className='header--logo' src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo"/>
        <SearchBar 
        searchData = {searchData}
        onSearch = {onSearch}
        />
    </div>
  )
}

export default Header