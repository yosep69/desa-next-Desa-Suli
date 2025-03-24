import { TeamSlider } from '@components/Slider'
import Link from 'next/link'

export const TeamHome = ({ data }: any) => {
  return (
    <div tw="py-10 md:py-20 text-center">
      <h1 tw="text-3xl md:text-4xl font-bold text-blue-800">Sinergitas Kami</h1>
      <div tw="py-10 md:py-20">
        <TeamSlider data={data} />
      </div>
      <Link href={'/aparatur'}>
        <p tw="text-secondary text-xl font-bold cursor-pointer">Selengkapnya</p>
      </Link>
    </div>
  )
}
