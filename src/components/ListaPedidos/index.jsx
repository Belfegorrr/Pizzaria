import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ModalFinal from '../ModalFinal'
import '../../App.css'

export default function Table() {
  const { register, handleSubmit, setValue, setFocus } = useForm()
  const onSubmit = data => console.log(data)
  const [isModalVisible, setIsModalVisible] = useState(false)

  let listaproduto = [
    {
      name: 'Pizza G + Coca 2L',
      preco: 40.0
    }
  ]

  class Product extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        qty: 0
      }

      this.add = this.add.bind(this)
      this.remove = this.remove.bind(this)
    }

    add() {
      this.setState({
        qty: this.state.qty + 1
      })
    }
    remove() {
      this.setState({
        qty: this.state.qty - 1
      })
    }

    render() {
      return (
        <div>
          <table>
            <thead>
              <th>Produto</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.name}</td>
                <td>{this.props.preco}</td>
                <td>
                  <button className="btn-outline-primary" onClick={this.remove}>
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
                  {this.state.qty}
                  <button className="btn-outline" onClick={this.add}>
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
                <td></td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      )
    }
  }

  class ProductList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        listaproduto: ''
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ listaproduto: listaproduto })
      }, 1000)
    }

    render() {
      if (!this.state.listaproduto) return <p>Carregando . . .</p>

      var component = this
      var products = this.state.listaproduto.map(function (product) {
        return <Product name={product.name} preco={product.preco} />
      })
      return <div>{products}</div>
    }
  }

  const checkCEP = e => {
    const cep = e.target.value.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setValue('adress', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)
        setFocus('adressNumber')
      })
  }

  return (
    <div>
      <ProductList />

      <button
        className="finalizar-pedido"
        onClick={() => setIsModalVisible(true)}
      >
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1L6 12L1 7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Finalizar
      </button>
      {isModalVisible ? (
        <ModalFinal onClose={() => setIsModalVisible(false)}>
          <form className="form-cep" onSubmit={handleSubmit(onSubmit)}>
            <label>Forma de Entrega </label>
            <input className="entrega-list" list="type" placeholder='Delivery'></input>
            <datalist id="type">
              <option value="Delivery" />
              <option value="Retirada no Local" />
            </datalist>
            <div className="conteiner-form">
              <label>CEP</label>
              <input
                className="cep-form"
                type="text"
                placeholder='00000-000'
                {...register('cep')}
                onBlur={checkCEP}
              />
              <label>Bairro</label>
              <input
                className="bairro-form"
                type="text"
                placeholder='Bairro'
                {...register('bairro')}
              />
            </div>
            <div>
              <label>Nº</label>
              <input
                className="numero-form"
                type="text"
                placeholder='000'
                {...register('adressNumber')}
              />
              <label>Rua</label>
              <input className="rua-form" type="text" placeholder='Logradouro' {...register('adress')} />
            </div>

            <label>Cidade</label>
            <input
              className="cidade-form"
              type="text"
              placeholder='Cidade'
              {...register('cidade')}
            />
            <label>Estado</label>
            <input
              className="cidade-form"
              type="text"
              placeholder='Estado'
              {...register('estado')}
            />
            <label>Complemento</label>
            <input
              className="cidade-form"
              type="text"
              placeholder='Complemento'
              {...register('complemento')}
            />
            <label>Referência</label>
            <input
              className="cidade-form"
              type="text"
              placeholder='Referência'
              {...register('referencia')}
            />
            <button className="btn-form">Continuar</button>
          </form>
        </ModalFinal>
      ) : null}
      <button className="cancelar-pedido">Cancelar</button>
    </div>
  )
}
