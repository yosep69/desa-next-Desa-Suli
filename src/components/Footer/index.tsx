import { Container } from '@components/Container'
import dataHome from '@jsons/siteConfig.json'
import dataLinkFooter from '@jsons/dataLinkFooter.json'
import Link from 'next/link'

export const Footer = () => {
  const menuFooter = dataLinkFooter.menu
  return (
    <>
      <div tw="flex justify-center items-center bg-gray-50 p-3">
        <div tw="grid grid-cols-5 gap-3">
          {dataHome.logoFooter.map((item: any, index: number) => {
            return (
              <div className={index > 0 ? 'col-span-1' : 'col-span-2 border-r-2 border-gray-300'} key={index}>
                <div tw="flex justify-center items-center w-full h-full">
                  <img src={item.image} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div tw="bg-tertiary text-white font-normal">
        <div className="border-b-2 border-[#404444] py-5"></div>
        <Container>
          <div tw="flex flex-col py-10">
            <div tw="flex flex-col space-y-5 md:space-y-0 md:grid grid-cols-5 md:gap-x-8">
              <div tw="md:col-span-2 md:pr-10">
                <div tw="flex flex-col space-y-3 md:space-y-7">
                  <h1 tw="font-bold text-xl">{dataHome.title}</h1>
                  <p tw="text-sm opacity-40">{dataHome.aboutFooter}</p>
                </div>
              </div>
              {menuFooter.map((item: any, i: number) => (
                <div tw="md:col-span-1" key={i}>
                  <div tw="flex flex-col space-y-3 md:space-y-6">
                    <h1 tw="font-bold text-lg">{item.title}</h1>
                    <ul tw="flex flex-col space-y-1.5 md:space-y-5 cursor-pointer">
                      {item.links.map((link: any, j: number) => (
                        <Link href={link.url} key={j}>
                          <a>
                            <li>{link.label}</li>
                          </a>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="border-t-2 border-[#404444]"></div>
        <Container>
          <div tw="flex flex-col space-y-7 md:space-y-0 md:flex-row justify-between py-10">
            <p>
              {new Date().getFullYear()} {dataHome.title}. All rights reserved. -- Privacy Policy - Terms of Services
            </p>
            <p>
              Supported by <span tw="font-semibold">Sawala</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}
