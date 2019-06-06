import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import './CommentSection.css'
const CommentSection = ({comments, deleteComment, postId})=>{
    const CommentSection = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        h4 {
            padding: 0 .3rem;
            margin: 0
        }
        p{
            margin: 0.4rem
        }

        Button {
            margin: '0 1rem';
            background-color: red;
            height:'1.5rem'; 
            padding-top:'0';
            color: white
        }
        @media (max-width: 570px){
            
        }
    `
    const deleteCommentFunction = (postId)=>(commentId)=>(e)=> deleteComment(e,commentId,postId)
    return (
        <div>
        {comments.map(comment=>(
            <CommentSection key={comment.id}>
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
                <button  onClick={(e)=>deleteCommentFunction(postId)(comment.id)(e)}>Delete</button>
            </CommentSection>
        ))}
    </div>
    )
}

CommentSection.propTypes ={
    comments: PropTypes.array,
    deleteComment: PropTypes.func,
}
export default CommentSection