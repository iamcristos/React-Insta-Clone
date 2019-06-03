import React from 'react'

const CommentSection = ({comments})=>{
    return (
        <div>
        {comments.map(comment=>(
            <div>
                <h2>{comment.username}</h2>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
    )
}
export default CommentSection