import React from 'react'
import './CommentSection.css'
const CommentSection = ({comments})=>{
    return (
        <div>
        {comments.map(comment=>(
            <div className='CommentSection' key={comment.id}>
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
    )
}
export default CommentSection