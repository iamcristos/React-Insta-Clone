import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.css';
import Posts from './Posts';
import PostReaction from './PostReaction';
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = ({data,like, postId, deleteComment})=>{
    const time = ()=>{
        const timestamp = data.timestamp.split('');
        const timestamps= timestamp.filter(date=>!(date.includes('t')||date.includes('h')));
        const date = Date.parse(timestamps.join(''))
       return(moment(date).endOf('day').fromNow())
    }
    return (
        <div className='PostContainer'>
           <Posts data={data}/>
            <PostReaction like={like} postId={postId} showLike={data.userLike}/>
            <div style={{paddingLeft:'.5rem'}}>
                <p>{`${data.likes} likes`}</p>
                <CommentSection comments={data.comments} deleteComment={deleteComment} postId={postId}/>
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
    }).isRequired,
    deleteComment: PropTypes.func
  }

export default PostContainer