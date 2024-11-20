import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((produto) => produto.id === produto.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const favoritosSemProduto = state.itens.filter((p) => p.id !== produto.id)

      if (favoritosSemProduto) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
