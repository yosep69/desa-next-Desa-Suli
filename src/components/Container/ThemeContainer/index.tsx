import { css, styled } from 'twin.macro'

const BackgroundWrapper = styled.div<{ valueColor: any }>`
  ${(props) =>
    props.valueColor === 'primary' &&
    css`
      background: #dbeafe;
    `};
  ${(props) =>
    props.valueColor === 'secondary' &&
    css`
      background: linear-gradient(90deg, #cfd9df 0%, #e2ebf0 100%);
    `};
  ${(props) =>
    props.valueColor === 'tertiary' &&
    css`
      background: linear-gradient(90deg, #f5f7fa 0%, #c3cfe2 100%);
    `};
  ${(props) =>
    props.valueColor === 'default' &&
    css`
      background: #ffffff;
    `};
`

interface ThemeContainerProps {
  children: React.ReactNode
  color: string
}

export const ThemeContainer = ({ children, color = 'default' }: ThemeContainerProps) => {
  return <BackgroundWrapper valueColor={color}>{children}</BackgroundWrapper>
}
