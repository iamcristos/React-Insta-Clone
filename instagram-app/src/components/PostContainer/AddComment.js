import React from 'react'
import PropTypes from 'prop-types';
import './PostContainer.css';
import styled from 'styled-components';

const AddComments = (props)=>{
    const AddComments = styled.div`
     display: flex;
    justify-content: center;
    width: 50%;
    text-align: center;
    margin-left: 20%;
    border: 1px solid lightgray;

    input {
        border: 'none';
        width: '300px';
        height:'40px';
        outline:'none';
        padding:'.2rem';
    }
    @media (max-width: 570px) {
        width: 350px;
        margin-left: .3rem;
    }
    `
    const handleSubmit = (postId) => (event) => props.onSubmit(event, postId);
    return (
        <AddComments>
            <form onSubmit={(e) => handleSubmit(props.postId)(e)} style={{width: '100%', paddingTop: '.3rem', display:'flex'}}>
                    <input placeholder='add comment...' onChange={(e)=>props.onChange(e)} style={{width: '88%'}}/>
                    <button style={{border: 'none', outline:'none', backgroundColor:'white', width:'12%'}}>...</button>
            </form>
        </AddComments>
    )
}

AddComments.propTypes = {
    onSubmit: PropTypes.func
}
export default AddComments;