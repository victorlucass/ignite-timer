import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './AppRoutes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes></AppRoutes>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
