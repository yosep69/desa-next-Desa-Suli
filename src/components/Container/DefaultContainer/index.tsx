import tw, { styled } from 'twin.macro'

const StyledContainer = styled.div`
  ${tw`px-5 mx-auto lg:w-11/12 lg:px-14`}
`
interface ContainerProps {
  tag?: React.ElementType
}
export const Container: React.FC<ContainerProps> = ({ tag = 'div', children, ...rest }) => {
  return (
    <StyledContainer as={tag} {...rest}>
      {children}
    </StyledContainer>
  )
}
