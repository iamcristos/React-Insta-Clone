import React from 'react'
import PropTypes from 'prop-types'
import './PostContainer.css';
 const Posts = ({data})=>{
    const imgStyle = {
        width: '100%'
    }
    return (
        <div className='posts'>
        <div className='user'>
            <img src={data.thumbnailUrl} alt='Profile'/>
            <h4>{data.username}</h4> 
        </div>
        <img src={data.imageUrl} alt='post' style={imgStyle}/>
    </div>
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