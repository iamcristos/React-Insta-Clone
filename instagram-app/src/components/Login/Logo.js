import React from 'react'
import images from '../../assets/googlestore.png'
import appstore from '../../assets/appstore.png'
import './Login.css'

export const Logo = ()=>{
    return (
        <div className='Logo'>
            <img src={appstore} alt='plastore'/>  
            <img src={images} alt='plastore'/>
        </div>
    )
}