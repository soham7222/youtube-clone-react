import React, { useState } from 'react'
import { YoutubeIcon } from "../../assets/images"
import "./SearchBar.css"


export const Searchbar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
    }

    return (
        <div className='search_bar_content'>
            <img className='search_bar_icon' src={YoutubeIcon} />
            <div className='search_bar_component'>
                <form data-testid="search-input-form" action="" onSubmit={callSearchFunction}>
                    <div className="search-box">
                        <input data-testid="search-input-textbox" type="text" placeholder="Search..." value={searchValue}
                            onChange={handleSearchInputChanges} />
                    </div>
                </form>
            </div>
        </div>
    )
}
