import Image from 'next/image'
import tw, { styled } from 'twin.macro'
const Content = styled.p`
  ${tw`text-base text-[#4D535B] overflow-hidden overflow-ellipsis h-[3rem]`}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
interface Galeryrops {
  thumbnail: string
  title: string
  slug: string
  onclick: any
}

export const PhotoCard = ({ thumbnail, title, onclick }: Galeryrops) => {
  return (
    <div tw="flex flex-col space-y-2 cursor-pointer" onClick={onclick}>
      <div tw="relative w-full h-[120px] md:h-[249px]">
        <Image src={`${thumbnail}`} layout="fill" objectFit="cover" objectPosition="center" />
      </div>
      <Content>{title}</Content>
    </div>
  )
}
