import styled from 'styled-components'

export const Filtro = styled.button<{ $ativo?: boolean }>`
  background-color: ${(props) =>
    props.$ativo ? props.theme.corTexto : props.theme.corTerciaria};
  padding: 8px;
  margin-bottom: 8px;
  border: 2px solid
    ${(props) =>
      props.$ativo ? props.theme.corTerciaria : props.theme.corTexto};
  color: ${(props) =>
    props.$ativo ? props.theme.corTerciaria : props.theme.corTexto};
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`
