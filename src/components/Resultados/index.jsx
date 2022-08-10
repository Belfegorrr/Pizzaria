import React from 'react'

export default function Result ({ data }) {
  if (!data || !data.length) return null

  const resultList = data.map(item => {
    return <li key={item.nome}>{item.nome}</li>
  })

  return (
    <div className="search-results">
      <ul>{resultList}</ul>
    </div>
  )
}
