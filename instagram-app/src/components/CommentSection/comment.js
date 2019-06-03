import React from 'react'

const Comment = ({comments})=>{
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

export default Comment