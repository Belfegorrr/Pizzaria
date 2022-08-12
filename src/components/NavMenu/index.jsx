import React, {useState} from "react";
import styled from 'styled-components';
import MenuPedidos from "../ToggleMenu";
import '../../App.css'

const Menu = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #000;
    border-radius: 999.9rem;
    transform-origin: 1px;

    &:nth-child(1){
      transform: ${({open})=> open ? 'rotate(45deg)' : 'rotate(0)'}
    }
    &:nth-child(2){
      opacity: ${({open})=> open ? '0' : '1'}
    }
    &:nth-child(3){
      transform: ${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`

export default function HiddenMenu () {
const [open,setOpen] = useState(false)

  return (
    <>
      <Menu className="menu" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />      
      </Menu >
      <MenuPedidos open={open}/>    
    </>
  )
}