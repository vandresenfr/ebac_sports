import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Provider } from 'react-redux'

import { GlobalStyle } from './styles'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [carrinho, setCarrinho] = useState<Produto[]>([])

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} />
        <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </Provider>
  )
}

export default App
