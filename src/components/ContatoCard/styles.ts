import styled from 'styled-components'

export const ContatoCard = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.corTerciaria};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.corPrincipal};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`

export const ContatoNome = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: capitalize;
`

export const ContatoDados = styled.div`
  margin-bottom: 8px;
  max-width: 400px;
`

export const ContatoLabel = styled.label`
  font-size: 1rem;
  font-style: italic;
  font-weight: bold;
  margin-right: 8px;
`

export const ContatoEmail = styled.input`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  width: 70%;
`

export const ContatoTelefone = styled(ContatoEmail)`
  &::before {
    content: 'Celular: ';
  }
`
