import React from 'react'
import './App.css'

function App() {
  // const navMenu = document.querySelector('#navMenu')
  // navMenu.addEventListener('click', () => {
  //   navMenu.classList.toggle('active')
  // })

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
        <div id="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div className="listamenu">
        <span className="selectmenu">
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
        </span>
        <span className="listaitem">Pizzas</span>
        <span className="listaitem">Combo Lanche</span>
        <span className="listaitem">Hamburguer</span>
        {/* <span className="listaitem">Refrigerantes</span>
        <span className="listaitem">Sucos</span>
        <span className="listaitem">Açais</span> */}
        <span className="selectmenu">
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
        </span>
      </div>

      <div>
        <span>
          <img src="../../public/image/comboum.png" alt="Combo 1" />
          <p>Pizza G + Coca 2 lt</p>
          <p>R$ 40,00</p>
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
      </div>
      <footer>
        <img src="../../public/image/usarioicon.png" alt="Usário Icone" />
        <h4>Amanda Morais</h4>
      </footer>
    </div>
  )
}

export default App
