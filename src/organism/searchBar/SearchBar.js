import React, { useCallback, useState } from "react";
import { Button, Input } from "../../atom";
import { debounce } from "../../util";
import "./searchbar.css";

function SearchBar(props) {

    const [searchvalue, setSearchValue] = useState("");
    
    const onSearchHandler = (event) => {
        const { onSearch } = props;
        setSearchValue(event.target.value);
        onSearch(event.target.value);
    };
    
    const onSearch  = useCallback(debounce(onSearchHandler, 1000), []);

    const onSearchClick = (value) => {
        const {onSearchClick} = props;
        onSearchClick(value);
    }

    return (
        <div className="searchbar">
            <Input
                type="searchinput"
                placeholder="search shows and people..."
                onChange={(event) => onSearch(event)}
            />

            <Button type="searchbtn" onClick={() => onSearchClick(searchvalue)}>Search</Button>

            {props.searchData.length !== 0 && (
                <div className="searchbar__dropdown">
                    {props.searchData.map((data) => (
                        <div key={data} className="searchbar__dropdowncontent" onClick={() => onSearchClick(data)}>
                            {data}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
