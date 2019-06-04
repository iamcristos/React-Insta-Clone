import React from 'react'
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

export default Posts