import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types';
import './CommentSection.css'
const CommentSection = ({comments, deleteComment})=>{
    return (
        <div>
        {comments.map(comment=>(
            <div className='CommentSection' key={comment.id}>
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
                <Button style={{margin: '0 1rem'}} onClick={deleteComment}>Delete</Button>
            </div>
        ))}
    </div>
    )
}

CommentSection.propTypes ={
    comments: PropTypes.array,
    deleteComment: PropTypes.func
}
export default CommentSection