import * as S from './styles'
import * as enums from '../../utils/enums/botao'

export type Props = {
  tipo: enums.TipoBotao
  onClick?: React.MouseEventHandler<Element>
  children: string
}

const Botao = ({ tipo, children, onClick }: Props) => {
  return (
    <>
      <S.Botao tipo={tipo} onClick={onClick}>
        {children}
      </S.Botao>
    </>
  )
}

export default Botao
