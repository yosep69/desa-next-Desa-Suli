import tw, { styled } from 'twin.macro'

type Variants = 'primary' | 'secondary' | 'tertiary'
type Sizes = 'xs' | 'sm' | 'md' | 'lg'
type ExtraSizes = 'xl' | '2xl' | '3xl' | 'full'
interface DefaultButtonProps {
  text: string
  variant?: Variants
  url?: string
  size?: Sizes
  rounded?: Sizes | ExtraSizes
  external?: boolean
}

const Button = styled.button<Omit<DefaultButtonProps, 'text'>>`
  ${tw`inline-block`}
  ${(props) => props.rounded === 'sm' && tw`rounded-sm`}
  ${(props) => props.rounded === 'md' && tw`rounded-md`}
  ${(props) => props.rounded === 'lg' && tw`rounded-lg`}
  ${(props) => props.rounded === 'xl' && tw`rounded-xl`}
  ${(props) => props.rounded === '2xl' && tw`rounded-2xl`}
  ${(props) => props.rounded === '3xl' && tw`rounded-3xl`}
  ${(props) => props.rounded === 'full' && tw`rounded-full`}
  ${(props) => props.size === 'xs' && tw`px-3 text-sm py-[2px]`}
  ${(props) => props.size === 'sm' && tw`px-4 py-2 text-sm`}
  ${(props) => props.size === 'md' && tw`px-5 py-3`}
  ${(props) => props.size === 'lg' && tw`py-3 px-9`}
  ${(props) => props.variant === 'primary' && tw`text-white bg-primary`}
  ${(props) => props.variant === 'secondary' && tw`bg-white text-primary`}
  ${(props) => props.variant === 'tertiary' && tw`text-black bg-primary`}
`
export const DefaultButton: React.FC<DefaultButtonProps> = ({
  text,
  variant = 'primary',
  url,
  size = 'md',
  rounded = 'md',
  external,
  ...rest
}) => {
  if (external) {
    return (
      <a href={url} target="_blank">
        <Button variant={variant} rounded={rounded} aria-label={text} size={size} {...rest}>
          {text}
        </Button>
      </a>
    )
  }
  // if button had a link
  if (url) {
    return (
      <Button variant={variant} rounded={rounded} aria-label={text} size={size} {...rest}>
        {text}
      </Button>
    )
  }
  // if not, then render plain button
  return (
    <Button variant={variant} rounded={rounded} aria-label={text} size={size} {...rest}>
      {text}
    </Button>
  )
}
