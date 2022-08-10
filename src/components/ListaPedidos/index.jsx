import React,{useState} from 'react'
import ModalFinal from '../ModalFinal'

export default function Table() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  let listaproduto = [
    {
      name: 'Pizza G + Coca 2L',
      preco: 40.0
    },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // },
    // {
    //   name: 'Pizza G + Coca 2L',
    //   preco: 40.0
    // }
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
          <div className="form-group">
            <div className="col">
              <h4>
                {this.props.name}:{this.props.preco}
              </h4>
            </div>
            <div className="col-sm">
              Quantidade: {this.state.qty}
            </div>
            <div className="btn-toolbar">
              <div className="col-6">
                <button className="btn">Informações</button>
              </div>

              <div className="text-right">
                <button className="btn-outline-primary" onClick={this.add}>
                  +1
                </button>
                <button
                  className="btn-outline"
                  onClick={this.remove}
                >
                  -1
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )
    }
  }

  class ProductList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        listaproduto: ""
      };
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({listaproduto : listaproduto})
      }, 1000);
    }

    render(){
      if(!this.state.listaproduto) return <p>Carregando . . .</p>

      var component = this;
      var products = this.state.listaproduto.map(function(product){
          return (
            <Product name={product.name} preco={product.preco}/>
          )
        });
        return (
          <div>
            {products}
          </div>
        )
    }
  }

  return (    

    <div>
      <ProductList />

      <button onClick={() => setIsModalVisible(true)}>Finalizar</button>
      {isModalVisible ? <ModalFinal onClose={() => setIsModalVisible(false)} /> : null}
      <button>Cancelar</button>
    </div>
  )
}
