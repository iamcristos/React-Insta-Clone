import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './SearchBar.css'
const SearchBar = ({search})=>{
    const Header = styled.div`
        width: 100%;
        display: flex;
        border-bottom: 1px solid lightgray;

        @media (max-width: 500px) {
            width: 100%;
        }
    `
    const LogoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 1rem;
    padding: 0 1rem;
    
    @media (max-width: 500px) {
            width:100%;
            margin: 1rem .5rem;
        }`
    return (
        <Header>
                <LogoHeader>
                    <div className="search-left">
                        <i className="fab fa-instagram fa-3x"/>
                        <span/>
                        <li>Instagram</li>
                    </div>
                    <div>
                        <input type='text' placeholder='search' onChange={search} style={{paddingLeft:'.3rem'}}/>
                    </div>
                    <div className='search-right'>
                        <i className="far fa-compass"/>
                        <i className="far fa-heart"/>
                        <i className="far fa-user"/>
                    </div>
                </LogoHeader>
        </Header>
    )
}

SearchBar.propTypes = {
    search: PropTypes.func
}

export default SearchBar;