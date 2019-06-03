import React, {useState} from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.css'
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = ({data})=>{
    const imgStyle = {
        width: '100%'
    }
    const time = ()=>{
        console.log(data.timestamp)
        const timestamp = data.timestamp.split('');
        const timestamps= timestamp.filter(date=>!(date.includes('t')||date.includes('h')));
        console.log(timestamps.join(''))
        const date = Date.parse(timestamps.join(''))
       return(moment(date).endOf('day').fromNow())
    }

    const [comment, addComment] = useState(data.comments)
    const [message, sendMessage] = useState('')
    return (
        <div className='PostContainer'>
            <div className='posts'>
                <div className='user'>
                    <img src={data.thumbnailUrl} alt='Profile'/>
                    <h4>{data.username}</h4> 
                </div>
                <img src={data.imageUrl} alt='post' style={imgStyle}/>
            </div>
            <div style={{width:'45%', marginLeft: '.1rem', paddingLeft: '.3rem'}}>
                <i className="far fa-heart fa-2x" style={{padding: '.5rem', fontSize:'bolder'}}/>
                <i className="far fa-comment fa-2x" style={{padding: '.5rem', fontSize:'bolder'}}/>
            </div>
            <div style={{paddingLeft:'.5rem'}}>
                <p>{`${data.likes} likes`}</p>
                <CommentSection comments={comment}/>
                <p>{time()}</p>
                <div className='add-comment'>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        const text = {message}
                        if(text.message.trim() !== '') {
                            const post = {username:'Cristos', text: text.message}
                            const addPost = comment.concat(post)
                            addComment(addPost)
                        }
                    }}>
                        <InputGroup style={{display:'flex', width:'500px'}}>
                            <Input onChange={(e)=>(
                            (e.target.value.trim() !== '') ?
                                sendMessage(e.target.value) : null
                            )} />
                            <InputGroupAddon addonType="prepend"><Button>Post</Button></InputGroupAddon>
                        </InputGroup>
                    </form>
                </div>
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
    }).isRequired
  }

export default PostContainer