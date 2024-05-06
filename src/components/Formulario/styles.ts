import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.corTerciaria};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.corPrincipal};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`

export const Titulo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Campo = styled.div`
  font-size: 1.2rem;
  margin-bottom: 16px;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.corTexto};
    font-size: 1rem;
    width: 100%;
    padding: 8px;

    &::placeholder {
      color: ${(props) => props.theme.corTexto};
      opacity: 0.8;
    }
  }
`

export const FiltrosTitulo = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Filtro = styled.div`
  margin-bottom: 8px;

  input {
    margin-right: 8px;
  }
`
