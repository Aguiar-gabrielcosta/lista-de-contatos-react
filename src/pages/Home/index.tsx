import BarraLateral from '../../containers/BarraLateral'
import Header from '../../containers/Header'
import { AsideContainer, HeaderContainer, MainContainer } from '../../styles'

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <AsideContainer>
        <BarraLateral />
      </AsideContainer>
      <MainContainer>Lista de contatos</MainContainer>
    </>
  )
}

export default Home
