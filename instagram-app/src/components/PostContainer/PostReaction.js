import React from 'react'
import PropTypes from 'prop-types';
const PostReaction = ({like,postId})=>{
    const onLikeFunction = (postId)=>(e)=> like(e,postId)
    return (
        <div style={{width:'45%', marginLeft: '.1rem', paddingLeft: '.3rem'}}>
                <i className="far fa-heart fa-2x" style={{padding: '.5rem', fontSize:'bolder'}} onClick={(e)=>{onLikeFunction(postId)(e)}}/>
                <i className="far fa-comment fa-2x" style={{padding: '.5rem', fontSize:'bolder'}}/>
            </div>
    )
}

PostReaction.propTypes = {
    like: PropTypes.func,
    postId: PropTypes.number
}
export default PostReaction;