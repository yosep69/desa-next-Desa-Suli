import { toLocaleDate } from '@utils/index'
import Image from 'next/image'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
const Content = styled.p`
  ${tw`text-lg text-blue-800 font-bold overflow-hidden overflow-ellipsis md:h-[5rem]`}
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
interface NewsProps {
  thumbnail: string
  date: string
  title: string
  slug: string
}

export const PageNews = ({ thumbnail, date, title, slug }: NewsProps) => {
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div tw="flex flex-col space-y-2 cursor-pointer">
          <div tw="relative w-full h-[249px]">
            <Image src={`${thumbnail}`} layout="fill" objectFit="cover" objectPosition="center" />
          </div>
          <p tw="text-base text-gray-600">{toLocaleDate(date, 'id')}</p>
          <Content>{title}</Content>
        </div>
      </a>
    </Link>
  )
}
