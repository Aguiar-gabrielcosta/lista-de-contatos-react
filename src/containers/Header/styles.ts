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

export const BarraDePesquisa = styled.input`
  font-size: 1rem;
  font-weight: semi-bold;
  max-width: 400px;
  width: 100%;
  height: 32px;
  padding: 8px;
  background-color: ${(props) => props.theme.corDeFundo};
  border: 2px solid ${(props) => props.theme.corTexto};
  border-radius: 8px;
`

export const LinkNavegacao = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.corTexto};
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.corSecundaria};
  }
`
