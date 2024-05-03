import Botao from '../Botao'
import * as S from './styles'
import * as enums from '../../utils/enums/botao'

const Formulario = () => {
  return (
    <S.Form>
      <S.Titulo>Novo contato</S.Titulo>
      <S.Campo>
        <label htmlFor="nome">Nome completo: </label>
        <input type="text" id="nome" required />
      </S.Campo>
      <S.Campo>
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" required />
      </S.Campo>
      <S.Campo>
        <label htmlFor="tel">Telefone(Celular): </label>
        <input type="tel" id="tel" required />
      </S.Campo>
      <div>
        <S.FiltrosTitulo>Adicionar aos filtros:</S.FiltrosTitulo>
        <S.Filtro>
          <input type="checkbox" id="favorito" />
          <label htmlFor="favorito">Favorito</label>
        </S.Filtro>
        <S.Filtro>
          <input type="checkbox" id="trabalho" />
          <label htmlFor="trabalho">Trabalho</label>
        </S.Filtro>
        <S.Filtro>
          <input type="checkbox" id="familia" />
          <label htmlFor="familia">Família</label>
        </S.Filtro>
      </div>
      <Botao tipo={enums.TipoBotao.POSITIVO}>Cadastrar</Botao>
      <Botao tipo={enums.TipoBotao.NEGATIVO}>Cancelar</Botao>
    </S.Form>
  )
}

export default Formulario
