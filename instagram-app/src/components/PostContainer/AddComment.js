import React from 'react'
import PropTypes from 'prop-types';
import './PostContainer.css'
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'

const AddComments = (props)=>{
    const handleSubmit = (postId) => (event) => props.onSubmit(event, postId);
    return (
        <div className='add-comment'>
                    <form onSubmit={(e) => handleSubmit(props.postId)(e)} style={{width: '100%', paddingTop: '.3rem'}}>
                        <InputGroup style={{display:'flex', width: '', alignItems:'center'}}>
                            <Input placeholder='add comment...' onChange={(e)=>props.onChange(e)} style={{border: 'none', width: '95%', height:'40px', outline:'none', padding:'.2rem'}}/>
                            <InputGroupAddon addonType="prepend"><Button style={{border: 'none', outline:'none', fontWeight: 'bolder', margin:'.4rem 0'}}>...</Button></InputGroupAddon>
                        </InputGroup>
                    </form>
                </div>
    )
}

AddComments.propTypes = {
    onSubmit: PropTypes.func
}
export default AddComments;