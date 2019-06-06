import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.css';
import Posts from './Posts';
import styled from 'styled-components'
import PostReaction from './PostReaction';
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = ({data,like, postId, deleteComment})=>{

    const PostContainer = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid lightgray;
        width: 50%;
        margin-left: 20%;
        margin-top: 2rem;

        @media(max-width: 700px) {
            width: 100%;
            margin-left: 15%
        }

        @media (max-width: 500px) {
            margin-left: .3rem;
            width: 350px;
        }
    `
    const time = ()=>{
        const timestamp = data.timestamp.split('');
        const timestamps= timestamp.filter(date=>!(date.includes('t')||date.includes('h')));
        const date = Date.parse(timestamps.join(''))
       return(moment(date).endOf('day').fromNow())
    }
    return (
        <PostContainer>
           <Posts data={data}/>
            <PostReaction like={like} postId={postId} showLike={data.userLike}/>
            <div style={{paddingLeft:'.5rem'}}>
                <p>{`${data.likes} likes`}</p>
                <CommentSection comments={data.comments} deleteComment={deleteComment} postId={postId}/>
                <p>{time()}</p>
            </div>
        </PostContainer>
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