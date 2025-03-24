import { ButtonHeroHorizontal } from '@components/Buttons'
import { Container } from '@components/Container'
import { SecondarySLider } from '@components/Slider'
import dataLinkHero from '@jsons/dataLinkHero.json'
import Link from 'next/link'

export const SecondaryHero = ({ data }: any) => {
  return (
    <div tw="pt-24 pb-8 md:pt-28 md:pb-12">
      <Container>
        <div tw="flex flex-col space-y-2">
          <SecondarySLider data={data} />
          <div tw="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            {dataLinkHero.dataLinkHero.slice(0, 2).map((item, i) => (
              <Link href={item.url} key={i}>
                <a tw="flex w-full">
                  <ButtonHeroHorizontal title={item.title} icon={item.icon} key={i} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
