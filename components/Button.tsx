import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.a<{ color?: string; dark?: boolean }>`
  ${tw`inline-block py-2 px-6 rounded-full cursor-pointer transition-all ease-in-out`}
  background: ${({ color }) => color || '#7187D4'};
  user-select: none;
  color: ${({ dark }) => (dark || true ? '#fff' : '#000')};
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`

export default Button
