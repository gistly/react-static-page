import React from "react";

import './search-box.style.css';

export const SearchBox = ({ searchString, handler }) => (
    <input
        className='search'
        type='search'
        placeholder={searchString}
        onChange={handler}
    />
)
