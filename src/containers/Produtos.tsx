import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootState } from '../store'
import { useGetJogosQuery } from '../services/api'

type Props = {
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ adicionarAoCarrinho }: Props) => {
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }
  const { data: produtos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando ...</h2>
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
