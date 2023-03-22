import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../atom";
import { debounce } from "../../util";
import "./searchbar.css";

function SearchBar(props) {

    const [searchvalue, setSearchValue] = useState("");
    const navigate =  useNavigate();
    
    const onSearchHandler = (event) => {
        const { onSearch } = props;
        setSearchValue(event.target.value);
        onSearch(event);
    };
    
    const onSearch  = debounce(onSearchHandler, 1000);
    

    const onSearchClick = (value) => {
        const link = '/show/' + value.show.id + '/' + value.show.name;
        navigate(link);
    }

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
                        <div key={data.show.id} className="searchbar__dropdowncontent" onClick={() => onSearchClick(data)}>
                            {data.show.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};




export default SearchBar;