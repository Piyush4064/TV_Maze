import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { debounce } from "../../util";

import Input from "../../atom/input";

import "./searchbar.css";

function SearchBar(props) {
    const [searchvalue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const onSearchHandler = useCallback(
        (event) => {
            const { onSearch } = props;
            setSearchValue(event.target.value);
            onSearch(event);
        },
        [props]
    );

    const onSearch = debounce(onSearchHandler, 500);

    const onSearchClick = useCallback((value) => {
        const link = "/show/" + value.show.id + "/" + value.show.name;
        navigate(link);
    },[navigate]);

    return (
        <div className="searchbar">
            <Input
                type="searchinput"
                placeholder="search shows and people..."
                onChange={(event) => onSearch(event)}
            />

            {/* <Button type="searchbtn">Search</Button> */}

            {props.searchData.length !== 0 && (
                <div className="searchbar__dropdown">
                    {props.searchData.map((data) => (
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

export default React.memo(SearchBar);
