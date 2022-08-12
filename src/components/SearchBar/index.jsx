import React, { useState } from 'react'
// import Result from '../components/Resultados'

export default function Search() {
  const [data, setData] = useState([])

  const handleInputChange = e => {
    e.preventDefault()

    const { value } = e.target
    if (!value) return
    console.log('handleInputChange', e.target.value)

    // if (!data || !data.length) return null    
  }
  const url = [
    {
      id: 1,
      nome: 'Hambúrguer',
      descricao: 'Pão, bife de hambúrguer 90g, salada e batata.',
      preco: 8.5,
      categoria_id: 1
    },
    {
      id: 2,
      nome: 'X-Búrguer',
      descricao:
        'Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.',
      preco: 10.5,
      categoria_id: 1
    },
    {
      id: 3,
      nome: 'X-Bacon',
      descricao:
        'Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.',
      preco: 12.5,
      categoria_id: 1
    },
    {
      id: 4,
      nome: 'X-Tudo',
      descricao:
        'Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.',
      preco: 14.5,
      categoria_id: 1
    },
    {
      id: 5,
      nome: 'Coca cola 350ml',
      descricao: '',
      preco: 5.5,
      categoria_id: 2
    },
    {
      id: 6,
      nome: 'Coca cola 600ml',
      descricao: '',
      preco: 7.5,
      categoria_id: 2
    }
  ]

  var resultList = url.map(item => {
    return <li key={item.id}>{item.nome.value}</li>
  })

  return (
    <div className="container">
      <div className="searchmenu">
        <div className='searchbar'>

      <form>        
        <input className='pesquisar-op' placeholder='Pesquisar' name="search" id="search" onChange={handleInputChange} />
      </form>
                
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
          <div className="search-results">
            <ul>{resultList}</ul>
          </div>
        </div>      
    </div>
  )
}
