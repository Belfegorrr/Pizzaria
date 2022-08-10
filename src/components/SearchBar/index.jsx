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
      <form>
        <label htmlFor="search"> Pesquisar </label>
        <input name="search" id="search" onChange={handleInputChange} />
      </form>
      <div className="search-results">
        <ul>{resultList}</ul>
      </div>
    </div>
  )
}
