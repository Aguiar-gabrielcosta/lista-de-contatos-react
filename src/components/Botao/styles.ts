import styled from 'styled-components'
import { Props } from './index'
import * as enums from '../../utils/enums/botao'

export const Botao = styled.button<Props>`
  color: ${(props) => props.theme.corTexto};
  background-color: ${(props) => {
    switch (props.tipo) {
      case enums.TipoBotao.NEUTRO:
        return props.theme.corBotaoNeutro
      case enums.TipoBotao.POSITIVO:
        return props.theme.corBotaoPositivo
      case enums.TipoBotao.NEGATIVO:
        return props.theme.corBotaoNegativo
    }
  }};
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  margin: 16px 8px 0 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => {
      switch (props.tipo) {
        case enums.TipoBotao.NEUTRO:
          return props.theme.corBotaoNeutroHover
        case enums.TipoBotao.POSITIVO:
          return props.theme.corBotaoPositivoHover
        case enums.TipoBotao.NEGATIVO:
          return props.theme.corBotaoNegativoHover
      }
    }};
  }
`
