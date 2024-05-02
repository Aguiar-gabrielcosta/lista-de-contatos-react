import Botao from '../Botao'
import * as S from './styles'
import * as enums from '../../utils/enums/botao'

const ContatoCard = () => {
  return (
    <S.ContatoCard>
      <S.ContatoTitulo>nome completo</S.ContatoTitulo>
      <S.ContatoEmail>email@email.com</S.ContatoEmail>
      <S.ContatoTelefone>(DD)00000-0000</S.ContatoTelefone>
      <Botao tipo={enums.TipoBotao.NEUTRO}>Editar</Botao>
      <Botao tipo={enums.TipoBotao.NEGATIVO}>Remover</Botao>
    </S.ContatoCard>
  )
}

export default ContatoCard
