import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.corTitulo};
`

export const Logo = styled.h1`
  font-size: 1.5rem;
`

export const LinkNavegacao = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.corTexto};
  background-color: ${(props) => props.theme.corBotaoPositivo};
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.corBotaoPositivoHover};
  }
`
