import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-columns: 250px auto;
  height: 100vh;
`

export const HeaderContainer = styled.header`
  grid-column: 1/-1;
`

export const AsideContainer = styled.aside`
  grid-column: 1/2;
`

export const MainContainer = styled.main`
  grid-column: 2/3;
`

export default EstiloGlobal
