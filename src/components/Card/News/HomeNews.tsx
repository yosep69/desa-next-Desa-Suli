import tw, { styled } from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import { toLocaleDate } from '@utils/index'

const Content = styled.p`
  ${tw`text-lg text-blue-800 font-bold overflow-hidden overflow-ellipsis h-[3rem] md:h-[5rem]`}
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
interface NewsProps {
  urlImg: string
  date: string
  title: string
  slug: string
}
export const HomeNews = ({ urlImg, date, title, slug }: NewsProps) => {
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div tw="flex flex-col space-y-1 md:space-y-2">
          <div tw="relative w-full h-[185px] md:h-[238px]">
            <Image src={`${urlImg}`} layout="fill" objectFit="cover" tw="rounded-lg" />
          </div>
          <p>{toLocaleDate(date, 'id')}</p>
          <Content>{title}</Content>
        </div>
      </a>
    </Link>
  )
}
