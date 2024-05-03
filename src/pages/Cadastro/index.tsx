import Formulario from '../../components/Formulario'
import Header from '../../containers/Header'
import { AsideContainer, HeaderContainer, MainContainer } from '../../styles'

const Cadastro = () => {
  return (
    <>
      <HeaderContainer>
        <Header paginaConsulta={false} />
      </HeaderContainer>
      <AsideContainer></AsideContainer>
      <MainContainer>
        <Formulario />
      </MainContainer>
    </>
  )
}

export default Cadastro
