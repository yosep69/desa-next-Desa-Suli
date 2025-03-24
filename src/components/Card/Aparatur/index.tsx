import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import tw, { styled } from 'twin.macro'
const Wrapper = styled.div`
  ${tw`relative w-full h-[202px] md:h-[404px] cursor-pointer`}
  clip-path: polygon(75% 0, 100% 40%, 100% 100%, 0 100%, 0 0);
  > div {
    background: rgba(55, 125, 224, 0.6);
    backdrop-filter: blur(8px);
  }
`
interface Props {
  thumbnail: string
  name: string
  position: string
  slug: string
}

export const AparaturCard = ({ thumbnail, name, position, slug }: Props) => {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  return (
    <Link href={`/aparatur/${slug}`}>
      <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Image src={`${thumbnail}`} layout="fill" objectFit="cover" objectPosition="top" />
        <div className={`${isHovering ? 'w-full h-full' : 'bg-none hidden'}`}>
          <div tw="absolute px-5 bottom-5 flex flex-col space-y-0">
            <h1 tw="text-white text-base md:text-3xl font-bold">{name}</h1>
            <p tw="text-white text-base md:text-lg">{position}</p>
          </div>
        </div>
      </Wrapper>
    </Link>
  )
}
