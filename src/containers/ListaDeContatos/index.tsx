import { Botao, BotaoNegativo } from '../../styles'
import * as S from './styles'

const ListaDeContatos = () => {
  return (
    <S.ListaDeContatos>
      <S.ContatoCard>
        <S.ContatoTitulo>nome completo</S.ContatoTitulo>
        <S.ContatoEmail>email@email.com</S.ContatoEmail>
        <S.ContatoTelefone>(DD)00000-0000</S.ContatoTelefone>
        <Botao>Editar</Botao>
        <BotaoNegativo>Remover</BotaoNegativo>
      </S.ContatoCard>
    </S.ListaDeContatos>
  )
}

export default ListaDeContatos
