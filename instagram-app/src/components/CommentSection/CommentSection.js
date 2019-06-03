import React from 'react'
import './CommentSection.css'
const CommentSection = ({comments})=>{
    console.log(comments)
    // const comment = []
    
    return (
        <div>
        {comments.map(comment=>(
            <div className='CommentSection'>
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
    )
}
export default CommentSection