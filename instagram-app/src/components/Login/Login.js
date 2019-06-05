import React, {useState} from 'react'
import './Login.css'
import {Logo} from './Logo'
import { Button, Form, FormGroup, Input } from 'reactstrap';
const Login = ()=>{
    const [username, setUsername] = useState('')
    const loginFunction = (e)=>{
        e.preventDefault();
        localStorage.setItem('username', username)
        window.location.reload()
    }

    const onChangeHandler = (e)=>{
       setUsername(e.target.value)
    }
    
    return (
        <div className='Login'>
            <h2>Instagram</h2>
            <Form  onSubmit={(e)=>loginFunction(e)}>
                <FormGroup>
                    <Input type="text"  placeholder="username"  onChange={(e)=> onChangeHandler(e)}/>
                </FormGroup>
                <FormGroup >
                    <Input type="password"  placeholder="don't tell!" />
                </FormGroup>
                    <Button style={{width:'100%'}}>Submit</Button>
            </Form>
            <p>Forgot password</p>
            <div className= 'SignUp'>
                <p>Don't have an account? Sign Up</p>
            </div>
            <Logo/>
        </div>
    )
}

export default Login;