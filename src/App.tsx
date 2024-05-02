import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { temaDark } from './theme/theme'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import EstiloGlobal, { LayoutContainer } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={temaDark}>
        <EstiloGlobal />
        <LayoutContainer>
          <RouterProvider router={rotas} />
        </LayoutContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
