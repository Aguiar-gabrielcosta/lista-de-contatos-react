import BarraDePesquisa from '../../components/BarraDePesquisa'
import * as S from './styles'

export type Props = {
  paginaConsulta: boolean
}

const Header = ({ paginaConsulta }: Props) => {
  return (
    <S.Header>
      <S.Logo>Lista de contatos</S.Logo>
      {paginaConsulta ? (
        <>
          <BarraDePesquisa />
          <S.LinkNavegacao to={'/cadastro'}>Novo contato</S.LinkNavegacao>
        </>
      ) : (
        <>
          <S.LinkNavegacaoRetorno to={'/'}>
            Voltar à lista
          </S.LinkNavegacaoRetorno>
        </>
      )}
    </S.Header>
  )
}

export default Header
