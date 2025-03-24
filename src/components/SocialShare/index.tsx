import { Whatsapp } from '@components/Icon'
import Image from 'next/image'
interface Props {
  url: string
}

export const SocialShare = ({ url }: Props) => {
  return (
    <div tw="md:absolute pt-10 md:pt-0 md:-left-28 flex flex-col md:items-center space-y-3 md:space-y-5">
      <p tw="text-base text-gray-500">Bagikan</p>
      <div tw="flex flex-row space-x-2 md:space-x-0 md:space-y-5 md:flex-col">
        <div tw="flex border border-gray-300 rounded-full justify-center p-2 content-center cursor-pointer">
          <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} tw="flex">
            <Image src={`/static/icons/blue-facebook.svg`} width={27} height={27} objectFit="contain" />
          </a>
        </div>
        <div tw="flex border border-gray-300 rounded-full justify-center p-2 content-center cursor-pointer">
          <a target="_blank" href={`http://twitter.com/share?text=${url}`} tw="flex">
            <Image src={`/static/icons/blue-twitter.svg`} width={27} height={27} objectFit="contain" />
          </a>
        </div>
        <div tw="flex border border-gray-300 rounded-full justify-center p-2 content-center cursor-pointer">
          <a target="_blank" href={`https://wa.me/?text=${url}`} tw="flex">
            <Whatsapp />
          </a>
        </div>
      </div>
    </div>
  )
}
