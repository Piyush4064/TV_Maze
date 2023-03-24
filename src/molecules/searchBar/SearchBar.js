import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { debounce } from "../../util";

import Input from "../../atom/input";

import "./searchbar.css";

function SearchBar({onSearch, searchData, ...props}) {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const onSearchHandler = useCallback(
        (event) => {
            onSearch(event);
        },
        [props]
    );

    const onSearchShow = (event) => {
        setSearchValue(event.target.value);
        debounce(onSearchHandler(event), 500);
    } 

    const onSearchClick = useCallback((value) => {
        const link = "/show/" + value.show.id + "/" + value.show.name;
        navigate(link);
    },[navigate]);

    return (
        <div className="searchbar">
            <Input
                type="searchinput"
                placeholder="search shows and people..."
                value={searchValue}
                onChange={(event) =>  onSearchShow(event)}
            />

            {/* <Button type="searchbtn">Search</Button> */}

            {searchData.length !== 0 && (
                <div className="searchbar__dropdown">
                    {searchData.map((data) => (
                        <div
                            key={data.show.id}
                            className="searchbar__dropdowncontent"
                            onClick={() => onSearchClick(data)}
                        >
                            {data.show.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

SearchBar.propTypes = {
    onSearch : PropTypes.func, 
    searchData: PropTypes.string
};
  
SearchBar.defaultProps = {
    onSearch : () => null,
    searchData: ""
};

export default React.memo(SearchBar);
