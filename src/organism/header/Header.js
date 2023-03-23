import React, { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { fetchGetRequest } from "../../api/api";
import SearchBar from "../../molecules/searchBar";

import styles from "./header.module.css";

function Header() {
    const [searchData, setSearchData] = React.useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSearchData([]);
    }, [location.pathname]);

    const onSearch = useCallback(async(event) => {
        //api will be called here
        const searchInput  = event.target.value;
        const data = await fetchGetRequest(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
        setSearchData(data);
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.header__logo__search}>
                <img
                    className={styles["header--logo"]}
                    src="https://static.tvmaze.com/images/tvm-header-logo.png"
                    alt="logo"
                    onClick = {() => navigate('/')}
                />
                <SearchBar searchData={searchData} onSearch={onSearch} />
            </div>
        </div>
    );
}

export default React.memo(Header);
