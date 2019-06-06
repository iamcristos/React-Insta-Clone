import React from 'react'
import PropTypes from 'prop-types';
import './PostContainer.css';
import styled from 'styled-components';
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'

const AddComments = (props)=>{
    const AddComments = styled.div`
     display: flex;
    justify-content: center;
    width: 50%;
    text-align: center;
    margin-left: 20%;
    border: 1px solid lightgray;
    `
    const handleSubmit = (postId) => (event) => props.onSubmit(event, postId);
    return (
        <AddComments>
            <form onSubmit={(e) => handleSubmit(props.postId)(e)} style={{width: '100%', paddingTop: '.3rem'}}>
                <InputGroup style={{display:'flex', alignItems:'center'}}>
                    <Input placeholder='add comment...' onChange={(e)=>props.onChange(e)} style={{border: 'none', width: '70%', height:'40px', outline:'none', padding:'.2rem'}}/>
                    <InputGroupAddon addonType="prepend"><Button style={{border: 'none', outline:'none'}}>...</Button></InputGroupAddon>
                </InputGroup>
            </form>
        </AddComments>
    )
}

AddComments.propTypes = {
    onSubmit: PropTypes.func
}
export default AddComments;