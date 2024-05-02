import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${(props) => props.theme.corTexto}
  }

  body {
    background-color: ${(props) => props.theme.corDeFundo};
  }
`

export default EstiloGlobal

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 250px 1fr;
  height: 100vh;
`

export const HeaderContainer = styled.header`
  grid-column: 1/-1;
  background-color: ${(props) => props.theme.corTerciaria};
  padding: 8px 16px;
`

export const AsideContainer = styled.aside`
  grid-column: 1/2;
  padding: 8px 16px;
`

export const MainContainer = styled.main`
  grid-column: 2/3;
  padding: 8px 16px;
`
