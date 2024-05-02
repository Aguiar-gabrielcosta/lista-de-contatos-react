import styled from 'styled-components'

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
