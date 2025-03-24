import { TertiarySlider } from '@components/Slider'

export const TertiaryHero = ({ data }: any) => {
  return (
    <div tw="pt-14 md:pt-10">
      <TertiarySlider data={data} />
    </div>
  )
}
