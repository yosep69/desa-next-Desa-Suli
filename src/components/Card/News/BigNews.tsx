import Image from 'next/image'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import Markdown, { useComponent } from '@components/Markdown'
import { toLocaleDate } from '@utils/lib/toLocaleDate'

const MarkdownStyled = styled(Markdown as any)`
  ${tw`font-medium overflow-hidden overflow-ellipsis h-[4.5rem]`}
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  p {
    color: #fff !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  img,
  ol,
  blockquote,
  ul,
  li,
  table,
  tr,
  td,
  th,
  pre,
  code,
  em,
  strong,
  hr,
  a {
    display: none !important;
  }
`

const Title = styled.p`
  ${tw`text-xl md:text-4xl font-semibold md:leading-10 overflow-hidden overflow-ellipsis h-[2rem] md:h-[5rem]`}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
interface Props {
  urlImg: string
  date: string
  title: string
  slug: string
  content: any
}

export const BigNews = ({ urlImg, date, title, slug, content }: Props) => {
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div tw="w-full h-[21rem] md:h-full relative z-10">
          <Image
            unoptimized={true}
            src={`${urlImg}`}
            layout="fill"
            tw="object-cover w-full h-full rounded-lg"
            priority={true}
          />
          <div tw="absolute w-full h-full bg-black bg-opacity-40 z-20 rounded-lg">
            <div tw="flex flex-col space-y-2 md:space-y-5 p-5 md:p-10 text-white z-30">
              <p>{toLocaleDate(date, 'id')}</p>
              <Title>{title}</Title>
              <MarkdownStyled children={content} components={useComponent.default} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
