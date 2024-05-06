import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/filtro'
import * as S from './styles'

const Filtro = () => {
  const dispatch = useDispatch()
  const { categoria } = useSelector((store: RootReducer) => store.filtros)
  const { itens } = useSelector((store: RootReducer) => store.contatos)

  const contadorCategoria = (categoria: 'todos' | enums.Categoria): number => {
    if (categoria === 'todos') return itens.length
    else {
      return itens.filter((contato) => contato.categoria.includes(categoria))
        .length
    }
  }

  return (
    <>
      <S.Filtro
        onClick={() => dispatch(alteraFiltro({ categoria: 'todos' }))}
        $ativo={categoria === 'todos'}
      >
        Todos ({contadorCategoria('todos')})
      </S.Filtro>
      <S.Filtro
        onClick={() =>
          dispatch(alteraFiltro({ categoria: enums.Categoria.FAVORITO }))
        }
        $ativo={categoria === enums.Categoria.FAVORITO}
      >
        Favoritos ({contadorCategoria(enums.Categoria.FAVORITO)})
      </S.Filtro>
      <S.Filtro
        onClick={() =>
          dispatch(alteraFiltro({ categoria: enums.Categoria.TRABALHO }))
        }
        $ativo={categoria === enums.Categoria.TRABALHO}
      >
        Trabalho ({contadorCategoria(enums.Categoria.TRABALHO)})
      </S.Filtro>
      <S.Filtro
        onClick={() =>
          dispatch(alteraFiltro({ categoria: enums.Categoria.FAMILIA }))
        }
        $ativo={categoria === enums.Categoria.FAMILIA}
      >
        Família ({contadorCategoria(enums.Categoria.FAMILIA)})
      </S.Filtro>
    </>
  )
}

export default Filtro
