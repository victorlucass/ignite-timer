import styled, { css } from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  margin: 8px;
  border-radius: 8px;

  ${(props) => {
    return css`
      background-color: ${props.theme['green-500']};
    `
  }}
`
