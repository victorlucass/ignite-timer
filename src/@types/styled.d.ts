import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// styled.d.ts => 'd' é uma forma de fala pro ts que esse arquivo vai ser exclusivamente para definição de tipagem;
