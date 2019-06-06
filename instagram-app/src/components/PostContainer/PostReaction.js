import React from 'react'
import PropTypes from 'prop-types';
const PostReaction = ({like,postId,showLike})=>{
    const onLikeFunction = (postId)=>(e)=> like(e,postId)
    let likeButton;
    if (showLike) {
        likeButton = <i className="far fa-heart fa-2x" 
        style={{padding: '.5rem', fontSize:'bolder',color:'red'}} 
        onClick={(e)=>{onLikeFunction(postId)(e)}}/>
    } else {
        likeButton = <i className="far fa-heart fa-2x" 
        style={{padding: '.5rem', fontSize:'bolder'}} 
        onClick={(e)=>{onLikeFunction(postId)(e)}}/>
    }
    return (
        <div style={{width:'45%', marginLeft: '.1rem', paddingLeft: '.3rem'}}>
                {likeButton}
                <i className="far fa-comment fa-2x" style={{padding: '.5rem', fontSize:'bolder'}}/>
            </div>
    )
}

PostReaction.propTypes = {
    like: PropTypes.func,
    postId: PropTypes.number,
    showLike: PropTypes.bool
}
export default PostReaction;