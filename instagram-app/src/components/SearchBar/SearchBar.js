import React from 'react'
import PropTypes from 'prop-types';
import './SearchBar.css'
const SearchBar = ({search})=>{
    return (
        <div className='SearchBar'>
                <nav>
                    <div className="search-left">
                        <i className="fab fa-instagram fa-3x"/>
                        <span/>
                        <li>Instagram</li>
                    </div>
                    <div>
                        <input type='text' placeholder='search' onChange={search}/>
                    </div>
                    <div className='search-right'>
                        <i className="far fa-compass"/>
                        <i className="far fa-heart"/>
                        <i className="far fa-user"/>
                    </div>
                </nav>
        </div>
    )
}

SearchBar.propTypes = {
    search: PropTypes.func
}

export default SearchBar;