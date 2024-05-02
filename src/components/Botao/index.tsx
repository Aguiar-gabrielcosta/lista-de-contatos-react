import * as S from './styles'
import * as enums from '../../utils/enums/botao'

export type Props = {
  tipo: enums.TipoBotao
  children: string
}

const Botao = ({ tipo, children }: Props) => {
  return (
    <>
      <S.Botao tipo={tipo}>{children}</S.Botao>
    </>
  )
}

export default Botao
