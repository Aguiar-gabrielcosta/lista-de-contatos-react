import { useDispatch } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as S from './style'

const BarraDePesquisa = () => {
  const dispatch = useDispatch()

  return (
    <S.BarraDePesquisa
      type="text"
      placeholder="&#128269; Pesquisa"
      onChange={(e) =>
        dispatch(alteraFiltro({ termoPesquisa: e.target.value }))
      }
    />
  )
}

export default BarraDePesquisa
