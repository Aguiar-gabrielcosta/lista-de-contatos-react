import BarraLateral from '../../containers/BarraLateral'
import Header from '../../containers/Header'
import ListaDeContatos from '../../containers/ListaDeContatos'
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
      <MainContainer>
        <ListaDeContatos />
      </MainContainer>
    </>
  )
}

export default Home
