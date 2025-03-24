import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import namaDesa from '@jsons/siteConfig.json'
import dataLinkHeader from '@jsons/dataLinkHeader.json'

export const LogoDrowpdown = () => {
  return (
    <Menu as="div" tw="md:relative flex justify-center md:inline-block w-full">
      <div>
        <Menu.Button tw="flex space-x-2 items-center text-left">
          <div tw="relative w-[30px] h-[40px] md:w-[43] md:h-[53]">
            <Image src={namaDesa.logo} layout="fill" />
          </div>
          <div tw="flex flex-col space-y-0.5">
            <h1 tw="text-primary font-bold text-lg md:text-2xl leading-5 md:leading-7">{namaDesa.title}</h1>
            <p tw="text-sm font-medium leading-5">{namaDesa.subtitle}</p>
          </div>
          <div tw="flex items-center">
            <Image src={'/static/icons/ChevronDown.svg'} layout="fixed" width={11} height={6} tw="ml-2 -mt-5" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-10 opacity-100"
        leaveTo="transform scale-25 opacity-0">
        <Menu.Items tw="flex flex-row absolute w-auto left-4 mt-14 md:w-[25.7rem] md:mt-3.5 md:-left-1 md:origin-top-right bg-white rounded-lg focus:outline-none z-50 p-2 md:p-3 space-x-2 md:space-x-4 divide-gray-200 shadow">
          {dataLinkHeader.logo.map((item, i) => (
            <div tw="cursor-pointer" key={i}>
              <Menu.Item>
                <Link href={item.link}>
                  <a>
                    <div tw="flex space-x-2 md:space-x-4 items-center justify-center rounded-lg py-1.5 px-3  md:py-3 md:px-5 bg-primary hover:bg-[#246dea]">
                      <Image src={item.logo} width={20} height={20} layout="fixed" />
                      <span tw="text-base text-white">{item.label}</span>
                    </div>
                  </a>
                </Link>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
