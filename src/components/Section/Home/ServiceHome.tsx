import { Container } from '@components/Container'
import dataHome from '@jsons/dataHome.json'
import Image from 'next/image'

export const ServiceHome = () => {
  return (
    <Container tw="py-10 md:py-20">
      <h1 tw="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8 md:mb-16">Layanan Publik</h1>
      <div tw="grid grid-cols-2 md:grid-cols-4 gap-2">
        {dataHome.services.map((item: any, i: number) => {
          return (
            <div
              className={`p-4 rounded-lg hover:shadow-md cursor-pointer ${item.show === true ? 'flex space-x-5' : 'hidden'}`}
              key={i}>
              <div tw="flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row justify-center md:items-center items-start">
                <div
                  className={`flex justify-center items-center rounded-full h-[60px] w-[60px] ${
                    i < 4 ? 'bg-primary' : 'bg-secondary'
                  }`}>
                  <Image src={`${item.icon}`} width={30} height={30} layout="fixed" />
                </div>
                <div tw="flex-1 flex-col space-y-2">
                  <h1 tw="text-xl font-bold">{item.title}</h1>
                  <p tw="text-gray-700 text-left">{item.subtitle}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
