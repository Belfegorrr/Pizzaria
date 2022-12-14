import React from 'react'
import '../../App.css'

export default function Modal({
  id = 'bgmodal',
  onClose = () => {},
  children
}) {
  const handleOutSideClick = e => {
    if (e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="containermodal">
        <img
          className="logoselecionado"
          src="../../public/image/pedido1.png"
          alt="Logo pedido"
        />
        <div>
          <div className='modaldiv'>
            <h1>Pizza G + Coca 2 lt</h1>
            <h4>2 Sabores</h4>
            <h4>Escolha 1 opção</h4>
            <h2>R$ 40,00</h2>
            <div className='modalclass'><h4>Obrigatório</h4></div>
          </div>
          <table>
            <thead>
              <th>Produto</th>
              <th>Valor</th>
              <th>Quantidade</th>
            </thead>
            <tbody>
              <tr className='linha-pedido'>
                <td>Frango/catupity</td>
                <td>R$ 40,00</td>
                <td>
                  <button className="btn-outline-primary">
                    <svg
                      width="6"
                      height="3"
                      viewBox="0 0 6 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02401 2.512C0.714679 2.512 0.480012 2.44267 0.320012 2.304C0.170679 2.16533 0.0960122 1.97333 0.0960122 1.728C0.0960122 1.48267 0.170679 1.29067 0.320012 1.152C0.480012 1.00267 0.714679 0.928 1.02401 0.928H4.32001C4.62935 0.928 4.85868 1.00267 5.00801 1.152C5.16801 1.29067 5.24801 1.48267 5.24801 1.728C5.24801 1.97333 5.16801 2.16533 5.00801 2.304C4.85868 2.44267 4.62935 2.512 4.32001 2.512H1.02401Z"
                        fill="#696969"
                      />
                    </svg>
                  </button>
                  0
                  <button className="btn-outline">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.19962 2.97601C6.36176 2.97601 6.49402 3.03148 6.59642 3.14241C6.70736 3.24481 6.76282 3.37708 6.76282 3.53921C6.76282 3.70135 6.70736 3.83788 6.59642 3.94881C6.49402 4.05121 6.36176 4.10241 6.19962 4.10241H4.20282V6.08641C4.20282 6.24855 4.14736 6.38508 4.03642 6.49601C3.93402 6.60695 3.80176 6.66241 3.63962 6.66241C3.47749 6.66241 3.34096 6.60695 3.23002 6.49601C3.12762 6.38508 3.07642 6.24855 3.07642 6.08641V4.10241H1.07962C0.917488 4.10241 0.780955 4.05121 0.670022 3.94881C0.567622 3.83788 0.516422 3.70135 0.516422 3.53921C0.516422 3.37708 0.567622 3.24481 0.670022 3.14241C0.780955 3.03148 0.917488 2.97601 1.07962 2.97601H3.07642V0.979212C3.07642 0.817079 3.12762 0.684812 3.23002 0.582412C3.34096 0.471478 3.47749 0.416012 3.63962 0.416012C3.80176 0.416012 3.93402 0.471478 4.03642 0.582412C4.14736 0.684812 4.20282 0.817079 4.20282 0.979212V2.97601H6.19962Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Sensação</td>
                <td>R$ 40,00</td>
                <td>
                  <button className="btn-outline-primary">
                    <svg
                      width="6"
                      height="3"
                      viewBox="0 0 6 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02401 2.512C0.714679 2.512 0.480012 2.44267 0.320012 2.304C0.170679 2.16533 0.0960122 1.97333 0.0960122 1.728C0.0960122 1.48267 0.170679 1.29067 0.320012 1.152C0.480012 1.00267 0.714679 0.928 1.02401 0.928H4.32001C4.62935 0.928 4.85868 1.00267 5.00801 1.152C5.16801 1.29067 5.24801 1.48267 5.24801 1.728C5.24801 1.97333 5.16801 2.16533 5.00801 2.304C4.85868 2.44267 4.62935 2.512 4.32001 2.512H1.02401Z"
                        fill="#696969"
                      />
                    </svg>
                  </button>
                  0
                  <button className="btn-outline">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.19962 2.97601C6.36176 2.97601 6.49402 3.03148 6.59642 3.14241C6.70736 3.24481 6.76282 3.37708 6.76282 3.53921C6.76282 3.70135 6.70736 3.83788 6.59642 3.94881C6.49402 4.05121 6.36176 4.10241 6.19962 4.10241H4.20282V6.08641C4.20282 6.24855 4.14736 6.38508 4.03642 6.49601C3.93402 6.60695 3.80176 6.66241 3.63962 6.66241C3.47749 6.66241 3.34096 6.60695 3.23002 6.49601C3.12762 6.38508 3.07642 6.24855 3.07642 6.08641V4.10241H1.07962C0.917488 4.10241 0.780955 4.05121 0.670022 3.94881C0.567622 3.83788 0.516422 3.70135 0.516422 3.53921C0.516422 3.37708 0.567622 3.24481 0.670022 3.14241C0.780955 3.03148 0.917488 2.97601 1.07962 2.97601H3.07642V0.979212C3.07642 0.817079 3.12762 0.684812 3.23002 0.582412C3.34096 0.471478 3.47749 0.416012 3.63962 0.416012C3.80176 0.416012 3.93402 0.471478 4.03642 0.582412C4.14736 0.684812 4.20282 0.817079 4.20282 0.979212V2.97601H6.19962Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Calabresa c/ bacon</td>
                <td>R$ 40,00</td>
                <td>
                  <button className="btn-outline-primary">
                    <svg
                      width="6"
                      height="3"
                      viewBox="0 0 6 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02401 2.512C0.714679 2.512 0.480012 2.44267 0.320012 2.304C0.170679 2.16533 0.0960122 1.97333 0.0960122 1.728C0.0960122 1.48267 0.170679 1.29067 0.320012 1.152C0.480012 1.00267 0.714679 0.928 1.02401 0.928H4.32001C4.62935 0.928 4.85868 1.00267 5.00801 1.152C5.16801 1.29067 5.24801 1.48267 5.24801 1.728C5.24801 1.97333 5.16801 2.16533 5.00801 2.304C4.85868 2.44267 4.62935 2.512 4.32001 2.512H1.02401Z"
                        fill="#696969"
                      />
                    </svg>
                  </button>
                  0
                  <button className="btn-outline">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.19962 2.97601C6.36176 2.97601 6.49402 3.03148 6.59642 3.14241C6.70736 3.24481 6.76282 3.37708 6.76282 3.53921C6.76282 3.70135 6.70736 3.83788 6.59642 3.94881C6.49402 4.05121 6.36176 4.10241 6.19962 4.10241H4.20282V6.08641C4.20282 6.24855 4.14736 6.38508 4.03642 6.49601C3.93402 6.60695 3.80176 6.66241 3.63962 6.66241C3.47749 6.66241 3.34096 6.60695 3.23002 6.49601C3.12762 6.38508 3.07642 6.24855 3.07642 6.08641V4.10241H1.07962C0.917488 4.10241 0.780955 4.05121 0.670022 3.94881C0.567622 3.83788 0.516422 3.70135 0.516422 3.53921C0.516422 3.37708 0.567622 3.24481 0.670022 3.14241C0.780955 3.03148 0.917488 2.97601 1.07962 2.97601H3.07642V0.979212C3.07642 0.817079 3.12762 0.684812 3.23002 0.582412C3.34096 0.471478 3.47749 0.416012 3.63962 0.416012C3.80176 0.416012 3.93402 0.471478 4.03642 0.582412C4.14736 0.684812 4.20282 0.817079 4.20282 0.979212V2.97601H6.19962Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Sensação</td>
                <td>R$ 40,00</td>
                <td>
                  <button className="btn-outline-primary">
                    <svg
                      width="6"
                      height="3"
                      viewBox="0 0 6 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02401 2.512C0.714679 2.512 0.480012 2.44267 0.320012 2.304C0.170679 2.16533 0.0960122 1.97333 0.0960122 1.728C0.0960122 1.48267 0.170679 1.29067 0.320012 1.152C0.480012 1.00267 0.714679 0.928 1.02401 0.928H4.32001C4.62935 0.928 4.85868 1.00267 5.00801 1.152C5.16801 1.29067 5.24801 1.48267 5.24801 1.728C5.24801 1.97333 5.16801 2.16533 5.00801 2.304C4.85868 2.44267 4.62935 2.512 4.32001 2.512H1.02401Z"
                        fill="#696969"
                      />
                    </svg>
                  </button>
                  0
                  <button className="btn-outline">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.19962 2.97601C6.36176 2.97601 6.49402 3.03148 6.59642 3.14241C6.70736 3.24481 6.76282 3.37708 6.76282 3.53921C6.76282 3.70135 6.70736 3.83788 6.59642 3.94881C6.49402 4.05121 6.36176 4.10241 6.19962 4.10241H4.20282V6.08641C4.20282 6.24855 4.14736 6.38508 4.03642 6.49601C3.93402 6.60695 3.80176 6.66241 3.63962 6.66241C3.47749 6.66241 3.34096 6.60695 3.23002 6.49601C3.12762 6.38508 3.07642 6.24855 3.07642 6.08641V4.10241H1.07962C0.917488 4.10241 0.780955 4.05121 0.670022 3.94881C0.567622 3.83788 0.516422 3.70135 0.516422 3.53921C0.516422 3.37708 0.567622 3.24481 0.670022 3.14241C0.780955 3.03148 0.917488 2.97601 1.07962 2.97601H3.07642V0.979212C3.07642 0.817079 3.12762 0.684812 3.23002 0.582412C3.34096 0.471478 3.47749 0.416012 3.63962 0.416012C3.80176 0.416012 3.93402 0.471478 4.03642 0.582412C4.14736 0.684812 4.20282 0.817079 4.20282 0.979212V2.97601H6.19962Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td>R$ 40,00</td>
              </tr>
            </tbody>
          </table>         
          <button className='btn-adicionar-pedido'>Adicionar</button>
        </div>
        <div className="contentmodal">{children}</div>
      </div>
    </div>
  )
}
