import { ButtonHeroVertical } from '@components/Buttons'
import { Container } from '@components/Container'
import { DefaultSLider } from '@components/Slider'
import dataLinkHero from '@jsons/dataLinkHero.json'
import Link from 'next/link'

export const DefaultHero = ({ data }: any) => {
  return (
    <div tw="pt-24 pb-8 md:pt-28 md:pb-12">
      <Container>
        <div tw="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-5">
          <DefaultSLider data={data} />
          <div tw="flex flex-grow flex-col space-y-2">
            {dataLinkHero.dataLinkHero.map((item, i) => (
              <Link href={item.url} key={i}>
                <a>
                  <ButtonHeroVertical title={item.title} icon={item.icon} key={i} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
