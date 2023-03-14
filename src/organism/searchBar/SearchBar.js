import React from "react";
import { Button, Input } from "../../atom";
import "./searchbar.css";

function SearchBar(props) {
    const onSearch = (event) => {
        const { onSearch } = props;
        onSearch(event);
    };

    return (
        <div className="searchbar">
            <Input
                type="searchinput"
                placeholder="search shows and people..."
                onChange={(event) => onSearch(event)}
            />

            <Button type="searchbtn">Search</Button>

            {/* {props.searchData.length !== 0 && (
                <div className="searchbar__dropdown">
                    {props.searchData.map((data) => (
                        <div key={data} className="searchbar__dropdowncontent">
                            {data}
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
}

export default SearchBar;
