import React from 'react';
import SearchBar from '../../organism/searchBar/SearchBar';
import './header.css';

function Header() {
    const [searchData, setSearchData] = React.useState([]);

    const onSearch = (value) => {
        console.log(value);
        setSearchData(["Hello1", "Hello2"]);
    }

    const onSearchClick  = (value) => {
        console.log(value);
    }

  return (
    <div className='header'>
        <img className='header--logo' src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo"/>
        <SearchBar 
        searchData = {searchData}
        onSearch = {onSearch}
        onSearchClick = {onSearchClick }
        />
    </div>
  )
}

export default Header