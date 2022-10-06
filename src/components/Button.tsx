import { ButtonContainer } from './Button.styled'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>clique aqui</ButtonContainer>
}
