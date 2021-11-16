import React from 'react'
import {GoPrimitiveDot} from "react-icons/go";
import pantherLogo from '../assets/Images/pantherLogo.png'

const Header = () => {
    return (

        <div className="App-header">
        <div><img  className="logo_img" src={pantherLogo} alt="" /></div>
        <div className="headerRight" style={{display:'flex'}}>
        <div className="icons"> <GoPrimitiveDot /> </div>
       <div className="headLink">Please install an <a style={{textDecoration: 'none'}} href="https://ethereum.org/use/#_3-what-is-a-wallet-and-which-one-should-i-use" target="_blank">  Ethereum wallet. </a></div>
       </div>
        </div>
    )
}

export default Header
