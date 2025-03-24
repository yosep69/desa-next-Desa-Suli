import { Container } from '@components/Container'
import Markdown from '@components/Markdown'
import Image from 'next/image'
import dataHome from '@jsons/dataHome.json'
import { styled } from 'twin.macro'

const MarkdownStyled = styled(Markdown as any)`
  table {
    margin-top: 1rem;
    tr {
      td:nth-of-type(2) {
        padding: 0 1.5rem;
      }
    }
  }
`
const WrapperMaps = styled.div`
  div {
    div,
    div,
    iframe {
      @media (min-width: 768px) {
        width: 600px;
        height: 500px;
      }
      @media (max-width: 768px) {
        margin-top: 1rem;
        width: 100% !important;
        height: 300px !important;
      }
    }
  }
`

export const AboutHome = () => {
  return (
    <Container tw="py-10 md:py-10">
      <div tw="flex flex-col-reverse md:flex-row md:space-x-5" id="about">
        {dataHome.peta === 'gambar_peta' ? (
          <div tw="flex-grow mt-10 md:mt-0">
            <div tw="relative w-full h-[250px] md:h-[516px]">
              {dataHome.gambar_peta !== '' && (
                <Image src={dataHome.gambar_peta} layout="fill" objectFit="contain" priority={true} />
              )}
            </div>
          </div>
        ) : (
          <WrapperMaps>
            {dataHome.google_maps !== '' && <div dangerouslySetInnerHTML={{ __html: `${dataHome.google_maps}` }} />}
          </WrapperMaps>
        )}
        <div tw="flex-1 flex-col items-start justify-center flex text-gray-700 leading-6">
          <h1 tw="text-3xl md:text-4xl font-bold text-blue-800 text-left">Tentang Desa</h1>
          <MarkdownStyled children={dataHome.about} tw="mt-7 text-justify md:text-left" />
        </div>
      </div>
    </Container>
  )
}
