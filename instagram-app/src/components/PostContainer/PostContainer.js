import React from 'react'
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = ({data})=>{
    const imgStyle = {
        width: '100%',
        padding: '0 1rem'
    }
    return (
        <div className='PostContainer'>
            <div className='posts'>
                <div className='user'>
                    <img src={data.thumbnailUrl} alt='Profile'/>
                    <h4>{data.username}</h4> 
                </div>
                <img src={data.imageUrl} alt='post' style={imgStyle}/>
            </div>
            <div style={{width:'45%', marginLeft: '2rem', paddingLeft: '3rem'}}>
                <i className="far fa-heart" style={{padding: '.5rem', fontSize:'bolder'}}/>
                <i className="far fa-comment" style={{padding: '.5rem', fontSize:'bolder'}}/>
            </div>
            <CommentSection comments={data.comments}/>
            <div className='add-comment'>
                <input type='text' style={{width:'500px'}}/>
            </div>
        </div>
    )
}
PostContainer.propTypes = {
    data: PropTypes.shape({
      username:PropTypes.string,
      thumbnailUrl:PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.array
    }).isRequired
  }

export default PostContainer