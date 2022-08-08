import React from 'react'
import styled from 'styled-components'
import Table from '../ListaPedidos'

export default function MenuPedidos({ open }) {
  const Pedidos = styled.div`
    width: 375px;
    height: 70%;
    position: fixed;
    top: 0;
    hidden: ${({ open }) => (open ? 'visible' : 'hidden')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    background: #ccc;

    th {
      // border: 1px solid green;
      border-left-width: 0;
      min-width: 80px;
      padding: 14px;
    }
  `

  return (
    <Pedidos open={open}>
      <div>
        <img src="../../public/image/logo.png" alt="Private Code" />
        <Table />        
      </div>
    </Pedidos>
  )
}
