import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="danger" />
      <Button variant="success" />
      <Button variant="secundary" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
