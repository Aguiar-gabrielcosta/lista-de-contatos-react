import BarraDePesquisa from '../../components/BarraDePesquisa'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>Lista de contatos</S.Logo>
      <BarraDePesquisa />
      <S.LinkNavegacao to={'/cadastro'}>Novo contato</S.LinkNavegacao>
    </S.Header>
  )
}

export default Header
