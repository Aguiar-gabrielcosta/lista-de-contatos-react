import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { temaDark, temaLight } from './theme/theme'
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
  const [prefernciaTemaEscuro, setPreferencia] = useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const prefersLight = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches

    if (prefersDark) setPreferencia(true)
    else if (prefersLight) setPreferencia(false)
    else setPreferencia(true)
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={prefernciaTemaEscuro ? temaDark : temaLight}>
        <EstiloGlobal />
        <LayoutContainer>
          <RouterProvider router={rotas} />
        </LayoutContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
