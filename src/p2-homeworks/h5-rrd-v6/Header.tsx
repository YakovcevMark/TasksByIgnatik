import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styled from "styled-components";

function Header() {
    return (
        <Navs>
                <div><NavLink to={PATH.PRE_JUNIOR}>Pre Junior</NavLink></div>
                <div><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
                <div><NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink></div>
                <div>kek</div>
        </Navs>
    )
}
const Navs = styled.div`
  & > div > a {

    color: green;
  }

  & > div > a.active {
    background: #535b64;
    color: blueviolet;
  }
  transition-duration: 500ms;
  transform: translate(-300px);
  display: grid;
  width:400px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &:hover{
    transition-duration: 500ms;
    transform: translate(0);
  }

`

export default Header
