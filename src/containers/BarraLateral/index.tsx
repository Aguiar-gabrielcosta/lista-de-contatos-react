import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.BarraLateral>
      <S.Filtro ativo={true}>Todos (10)</S.Filtro>
      <S.Filtro>Favoritos (2)</S.Filtro>
      <S.Filtro>Trabalho (3)</S.Filtro>
      <S.Filtro>Família (2)</S.Filtro>
    </S.BarraLateral>
  )
}

export default BarraLateral
