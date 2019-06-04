import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = ({data,like, postId})=>{
    const imgStyle = {
        width: '100%'
    }
    const time = ()=>{
        const timestamp = data.timestamp.split('');
        const timestamps= timestamp.filter(date=>!(date.includes('t')||date.includes('h')));
        const date = Date.parse(timestamps.join(''))
       return(moment(date).endOf('day').fromNow())
    }

    const onLikeFunction = (postId)=>(e)=> like(e,postId)
    return (
        <div className='PostContainer'>
            <div className='posts'>
                <div className='user'>
                    <img src={data.thumbnailUrl} alt='Profile'/>
                    <h4>{data.username}</h4> 
                </div>
                <img src={data.imageUrl} alt='post' style={imgStyle}/>
            </div>
            <div style={{width:'45%', marginLeft: '.1rem', paddingLeft: '.3rem'}}>
                <i className="far fa-heart fa-2x" style={{padding: '.5rem', fontSize:'bolder'}} onClick={(e)=>{onLikeFunction(postId)(e)}}/>
                <i className="far fa-comment fa-2x" style={{padding: '.5rem', fontSize:'bolder'}}/>
            </div>
            <div style={{paddingLeft:'.5rem'}}>
                <p>{`${data.likes} likes`}</p>
                <CommentSection comments={data.comments}/>
                <p>{time()}</p>
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