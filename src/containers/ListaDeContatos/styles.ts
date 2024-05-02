import styled from 'styled-components'

export const ListaDeContatos = styled.main`
  display: flex;
  flex-direction: column;
`

export const ContatoCard = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.corTerciaria};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.corPrincipal};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`

export const ContatoTitulo = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: capitalize;
`

export const ContatoEmail = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;

  &::before {
    content: 'E-mail: ';
    font-style: italic;
  }
`

export const ContatoTelefone = styled(ContatoEmail)`
  &::before {
    content: 'Celular: ';
  }
`
