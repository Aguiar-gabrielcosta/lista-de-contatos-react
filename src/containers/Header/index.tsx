import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>Lista de contatos</S.Logo>
      <S.BarraDePesquisa type="text" placeholder="&#128269; Pesquisa" />
      <S.LinkNavegacao to={'/cadastro'}>Novo contato</S.LinkNavegacao>
    </S.Header>
  )
}

export default Header
