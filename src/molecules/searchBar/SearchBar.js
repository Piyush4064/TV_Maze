import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { debounce } from "../../util";

import Input from "../../atom/input";

import "./searchbar.css";
import { replaceSpaceWithDash } from "../../helper";

function SearchBar({onSearch, searchData, ...props}) {
    const navigate = useNavigate();

    const onSearchHandler = useCallback(
        (event) => {
        
            debounce(onSearch(event), 500);
        },
        [onSearch]
    );

    const onSearchShow =  debounce(onSearchHandler, 500);

    const onSearchClick = useCallback((value) => {
        const name = replaceSpaceWithDash(value.show.name)
        const link = "/show/" + value.show.id + "/" + name;
        navigate(link);
    },[navigate]);

    return (
        <div className="searchbar">
            <Input
                type="searchinput"
                placeholder="search shows and people..."
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
