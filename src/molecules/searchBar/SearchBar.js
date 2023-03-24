import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { debounce } from "../../util";
import Input from "../../atom/input";
import "./searchbar.css";

function SearchBar({onSearch, searchData,  ...props}) {
    // const [searchvalue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const onSearchHandler = useCallback(
        (event) => {
            // setSearchValue(event.target.value);
            onSearch(event);
        },
        [onSearch]
    );

    const onSearchShows = debounce(onSearchHandler, 500);

    const onSearchClick = useCallback((value) => {
        const link = "/show/" + value.show.id + "/" + value.show.name;
        navigate(link);
    },[navigate]);

    return (
        <div className="searchbar">
            <Input
                type="searchinput"
                placeholder="search shows and people..."
                onChange={(event) => onSearchShows(event)}
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
};

SearchBar.propTypes = {
    onSearch: PropTypes.string,
    searchData: PropTypes.array
};

SearchBar.defaultProps = {
    searchData : []
};

export default React.memo(SearchBar);
