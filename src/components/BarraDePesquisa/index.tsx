import * as S from './style'

const BarraDePesquisa = () => {
  return (
    <S.BarraDePesquisa
      type="text"
      placeholder="&#128269; Pesquisa"
      onChange={(e) => console.log(e.target.value)}
    />
  )
}

export default BarraDePesquisa
