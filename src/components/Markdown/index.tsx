import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { CSSInterpolation } from '@emotion/serialize'
import { omit } from '@utils/index'

import type { Components } from 'react-markdown'

interface MarkdownProps {
  children?: string
  components?: Components
  css?: CSSInterpolation
}

const MarkdownComponents: Components = {
  a: ({ ...props }) => <a tw="underline text-primary" {...omit(props, 'node')} />,
  strong: ({ ...props }) => <strong tw="font-medium" {...omit(props, 'node')} />,
  u: ({ ...props }) => <span tw="underline" {...omit(props, 'node')} />,
  p: ({ ...props }) => <p tw="mb-3 text-justify text-gray-700" {...omit(props, 'node')} />,
  ol: ({ ordered, ...props }) => (
    <ol tw="mb-3 ml-4 list-decimal" data-ordered={ordered?.toString() || ''} {...omit(props, 'node')} />
  ),
  ul: ({ ordered, ...props }) => (
    <ol tw="mb-3 ml-4 list-disc" data-ordered={ordered?.toString() || ''} {...omit(props, 'node')} />
  ),
  pre: ({ ...props }) => <pre tw="px-5 mb-3 whitespace-pre-wrap rounded-md" {...omit(props, 'node')} />,
  table: ({ ...props }) => (
    <div tw="max-w-full overflow-x-auto lg:overflow-visible">
      <table tw="max-w-full mb-3 table-auto text-gray-700" {...omit(props, 'node')} />
    </div>
  ),
  thead: ({ ...props }) => <thead tw="bg-none" {...omit(props, 'node')} />,
  th: ({ ...props }) => <th tw="text-left" {...omit(props, 'node')} />,
  td: ({ ...props }) => <td tw="text-left" {...omit(props, 'node')} />,
  code: ({ ...props }) => {
    const childs = (props.children?.[0] as any)?.split('\n')
    return (
      <code tw="font-Montserrat">
        {childs?.map((child: any, i: number) => (
          <Markdown
            key={i}
            components={useComponent.default}
            children={child?.toString() || ''}
            tw="ml-3 list-decimal list-item"
          />
        ))}
      </code>
    )
  },
  h1: ({ ...props }) => <h1 tw="mb-3 text-xl md:text-4xl font-semibold text-gray-900" {...omit(props, 'node')} />,
  h2: ({ ...props }) => <h2 tw="mb-3 text-xl md:text-3xl font-semibold text-gray-900" {...omit(props, 'node')} />,
  h3: ({ ...props }) => <h3 tw="mb-2 text-lg md:text-2xl font-semibold text-gray-900" {...omit(props, 'node')} />,
  h4: ({ ...props }) => <h4 tw="mb-1 text-lg md:text-xl font-semibold text-gray-900" {...omit(props, 'node')} />,
  h5: ({ ...props }) => <h5 tw="mb-0 text-lg font-semibold text-gray-900" {...omit(props, 'node')} />,
  h6: ({ ...props }) => <h6 tw="mb-0 text-base font-semibold text-gray-900" {...omit(props, 'node')} />,
  img: ({ ...props }) => <img tw="w-full" {...omit(props, 'node')} />
} as const

export const useComponent = {
  default: MarkdownComponents
} as const

/**
 * TODO: add custom component, styles etc if necessary
 * @returns Element
 */
export const Markdown: React.FC<MarkdownProps> = ({ children, components, ...rest }) => {
  if (!children) return <></>
  return (
    <ReactMarkdown
      children={children}
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      transformImageUri={(uri) => (uri.startsWith('http') ? uri : uri)}
      {...rest}
    />
  )
}

export default Markdown
