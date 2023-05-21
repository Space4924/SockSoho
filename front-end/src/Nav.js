import React from 'react'
import './App.css'
import { AppBar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import Search from './Search';

const Header = styled(AppBar)`
background:#111111;
display:flex;
flex-direction:row;
  align-items: center;
  justify-content: center;
`

const Line = styled(NavLink)`
color:inherit;
${'' /* margin:10px; */}
text-decoration:none;
font-size:20px;
border-bottom:2px solid blue ;
border-radius:15px;
width:200px;
color:black;
background-color:white;
padding:10px;
margin:20px;
font-family: 'Poppins', sans-serif;
`


const Navbar = () => {
  return (
    <Header position='static'  >
          {/* <Line to='/'>Home</Line> */}
          <Line to='/'>TO DO LIST</Line>
          <Line to='/feature'>ADD TO-DO</Line>
         {/* <Search/> */}
          
    </Header>
  )
}

export default Navbar;