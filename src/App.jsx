import React, { useState } from 'react'
import Search from './components/SearchBar'

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
    {
      id: 6,
      name: 'Açais'
    },
    {
      id: 7,
      name: 'Marmita'
    },
    {
      id: 8,
      name: 'Saúdavel'
    },
    {
      id: 9,
      name: 'Japonesa'
    }
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
      currentItem++
      if (currentItem > lanches.length - 1) {
        currentItem = 0
      }
      showPerson()
      showItem()
      showTerceiroItem()
    })

    prevBtn.addEventListener('click', function () {
      currentItem--
      if (currentItem < 0) {
        currentItem = lanches.length - 1
      }
      showPerson()
      showItem()
      showTerceiroItem()
    })
  }

  return (
    <div className="wrapper">
      <header>
        <div className="searchmenu">
          <input className="busca" type="text" placeholder="Pesquisar . . ." />
          <button className="buttonheader">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9566 18.0302H18.7299L18.2951 17.6109C19.8169 15.8407 20.733 13.5426 20.733 11.0426C20.733 5.46808 16.2144 0.949463 10.6399 0.949463C5.06537 0.949463 0.546753 5.46808 0.546753 11.0426C0.546753 16.6171 5.06537 21.1357 10.6399 21.1357C13.1399 21.1357 15.438 20.2196 17.2082 18.6979L17.6274 19.1326V20.3593L25.3914 28.1078L27.705 25.7941L19.9566 18.0302ZM10.6399 18.0302C6.77344 18.0302 3.65233 14.909 3.65233 11.0426C3.65233 7.17615 6.77344 4.05504 10.6399 4.05504C14.5063 4.05504 17.6274 7.17615 17.6274 11.0426C17.6274 14.909 14.5063 18.0302 10.6399 18.0302Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
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

      <div id="add-tabela">
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
          {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
        </span>
        <span>
          <img src="../../public/image/combodois.png" alt="Combo 2" />
          <p>Pizza G + Coca 2 lt</p>
          <p>R$ 40,00</p>
        </span>
        <span>
          <img src="../../public/image/combotres.png" alt="Combo 3" />
          <p>Pizza G + Coca 2 lt</p>
          <p>R$ 40,00</p>
        </span>
        <span>
          <img src="../../public/image/comboquatro.png" alt="Combo 4" />
          <p>Pizza G + Coca 2 lt</p>
          <p>R$ 40,00</p>
        </span>
        <span>
          <img src="../../public/image/combocinco.png" alt="Combo 5" />
          <p>Pizza G + Coca 2 lt</p>
          <p>R$ 40,00</p>
        </span>
        <Search />
      </div>
      <footer>
        <img src="../../public/image/usarioicon.png" alt="Usário Icone" />
        <h4>Amanda Morais</h4>
      </footer>
    </div>
  )
}

export default App
