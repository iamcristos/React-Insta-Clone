import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './PostContainer.css';
 const Posts = ({data})=>{
    const Posts = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width:570px) {
        width: 350px;
    }
    `

    const User = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem 2rem;
        img{
            height: 40px;
            border-radius: 50%;
            padding: 0 1rem;
        }

        @media (max-width:570px) {
            padding: .5rem;

            img{
                width: 40px;
                padding: 0 .3rem
            }
        }
    `
    return (
        <Posts>
        <User>
            <img src={data.thumbnailUrl} alt='Profile'/>
            <h4>{data.username}</h4> 
        </User>
        <img src={data.imageUrl} alt='post' className='img'/>
    </Posts>
    )
}
Posts.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string
    }).isRequired
} 

export default Posts