import React, { useState } from 'react'
import Search from './components/SearchBar'
import Table from './components/ListaPedidos'

import HiddenMenu from './components/NavMenu'
import Modal from './components/Modal'

import './App.css'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const lanches = [
    {
      id: 1,
      name: 'Pizza'
    },
    {
      id: 2,
      name: 'Combo Lanche'
    },
    {
      id: 3,
      name: 'Hamburguer'
    },
    {
      id: 4,
      name: 'Refrigerante'
    },
    {
      id: 5,
      name: 'Sucos'
    },    
  ]
  window.onload = function () {
    const info = document.getElementById('name')
    const info2 = document.getElementById('name2')
    const info3 = document.getElementById('name3')
    const prevBtn = document.querySelector('.prev-btn')
    const nextBtn = document.querySelector('.next-btn')

    let currentItem = 0

    function showPerson() {
      const item = lanches[currentItem]
      info.textContent = item.name
    }
    function showItem() {
      const itemsegundo = lanches[currentItem + 1]
      info2.textContent = itemsegundo.name
    }
    function showTerceiroItem() {
      const itemterceiro = lanches[currentItem + 2]
      info3.textContent = itemterceiro.name
    }

    window.addEventListener('DOMContentLoaded', function () {
      showPerson()
      showItem()
      showTerceiroItem()
    })

    nextBtn.addEventListener('click', function () {
      if (currentItem > lanches.length - 1) {
        currentItem = 0
      }
      currentItem++
      showPerson()
      showItem()
      showTerceiroItem()
    })

    prevBtn.addEventListener('click', function () {
      if (currentItem < 0) {
        currentItem = lanches.length - 1
      }
      currentItem--
      showPerson()
      showItem()
      showTerceiroItem()
    })
  }

  return (
    <div className="wrapper">
      <header>
        <Search />
        <HiddenMenu />
      </header>
      <div className="listamenu">
        <span className="selectmenu">
          <button className="prev-btn">
            <svg
              width="20"
              height="36"
              viewBox="0 0 20 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8718 1.94873L1.92312 17.8974L17.8718 33.8461"
                stroke="#E83737"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </span>
        <span id="name" className="listaitem">
          Pizzas
        </span>
        <span id="name2" className="listaitem">
          Combo Lanche
        </span>
        <span id="name3" className="listaitem">
          Hamburguer
        </span>
        <span className="selectmenu">
          <button className="next-btn">
            <svg
              width="20"
              height="36"
              viewBox="0 0 20 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.9231 33.8462L17.8718 17.8975L1.92309 1.94878"
                stroke="#E83737"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </span>
      </div>

      <div className='tabelameio' id="add-tabela">
        <div>
        <span>
          <button
            id="add-pedido"
            onClick={() => setIsModalVisible(true)}
            className="bto-pedido"
          >
            <img src="../../public/image/comboum.png" alt="Combo 1" />
            <p id="nome" name="nome" type="text">
              Pizza G + Coca 2 lt
            </p>
            <p id="valor" name="valor" type="text">
              R$ 40,00
            </p>
          </button>
          {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)} />
          ) : null}
        </span>

        <span>
          <button
            id="add-pedido"
            onClick={() => setIsModalVisible(true)}
            className="bto-pedido"
          >
            <img src="../../public/image/combodois.png" alt="Combo 2" />
            <p>Pizza G + Coca 2 lt</p>
            <p>R$ 40,00</p>
          </button>
        </span>
        <span>
          <button
            id="add-pedido"
            onClick={() => setIsModalVisible(true)}
            className="bto-pedido"
          >
            <img src="../../public/image/combotres.png" alt="Combo 3" />
            <p>Pizza G + Coca 2 lt</p>
            <p>R$ 40,00</p>
          </button>
        </span>
        <span>
          <button
            id="add-pedido"
            onClick={() => setIsModalVisible(true)}
            className="bto-pedido"
          >
            <img src="../../public/image/comboquatro.png" alt="Combo 4" />
            <p>Pizza G + Coca 2 lt</p>
            <p>R$ 40,00</p>
          </button>
        </span>
        <span>
          <button
            id="add-pedido"
            onClick={() => setIsModalVisible(true)}
            className="bto-pedido"
          >
            <img src="../../public/image/combocinco.png" alt="Combo 5" />
            <p>Pizza G + Coca 2 lt</p>
            <p>R$ 40,00</p>
          </button>
        </span>
        </div>
        <div>
        <div className='barralateral'>
          <img src="../../public/image/logo.png" alt="Private Code" />
          <Table />     
        </div>
        </div>
      </div>
      <footer>
        <img className='image-ui' src="../../public/image/usarioicon.png" alt="Usário Icone" />
        <h4>Amanda Morais</h4>
      </footer>
    </div>
  )
}

export default App
