import React from 'react'
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'

const AddComments = (props)=>{
    const handleSubmit = (postId) => (event) => props.onSubmit(event, postId);
    return (
        <div className='add-comment'>
                    <form onSubmit={(e) => handleSubmit(props.postId)(e)} style={{width: '100%', paddingTop: '.3rem'}}>
                        <InputGroup style={{display:'flex', width: '670px', alignItems:'center'}}>
                            <Input placeholder='add comment...' onChange={(e)=>props.onChange(e)} style={{border: 'none', width: '520px', height:'40px', outline:'none'}}/>
                            <InputGroupAddon addonType="prepend"><Button style={{border: 'none', outline:'none'}}>Post</Button></InputGroupAddon>
                        </InputGroup>
                    </form>
                </div>
    )
}

export default AddComments;