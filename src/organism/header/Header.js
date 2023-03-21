import React from "react";
import SearchBar from "../../molecules/searchBar";
import styles from "./header.module.css";

function Header() {
    const [searchData, setSearchData] = React.useState([]);

    const onSearch = (event) => {
        //api will be called here
        console.log("Search Clicked");
        setSearchData(["Hello1", "Hello2"]);
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__logo__search}>
                <img
                    className={styles["header--logo"]}
                    src="https://static.tvmaze.com/images/tvm-header-logo.png"
                    alt="logo"
                />
                <SearchBar searchData={searchData} onSearch={onSearch} />
            </div>
        </div>
    );
}

export default Header;
