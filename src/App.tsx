import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { temaDark } from './theme/theme'
import EstiloGlobal from './styles'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

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
        <RouterProvider router={rotas} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
