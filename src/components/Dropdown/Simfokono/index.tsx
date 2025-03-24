import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import dropdownMenu from '@jsons/dataLinkHeader.json'
export const Simfokono = () => {
  return (
    <Menu as="div" tw="relative flex justify-center md:inline-block text-left">
      <div>
        <Menu.Button tw="flex space-x-5 justify-center items-center px-[3px]">
          <Image src={'/static/images/image1.png'} layout="fixed" width={141} height={44} />
          <Image src={'/static/icons/ChevronDown.svg'} layout="fixed" width={11} height={6} />
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
        <Menu.Items tw="absolute w-44 -left-1 top-10 md:top-12 md:origin-top-right bg-white rounded-md focus:outline-none z-50">
          <div tw="p-3 divide-y-2 divide-gray-200 rounded-md shadow">
            {dropdownMenu.dropdown.map((item, index) => (
              <div tw="hover:text-primary cursor-pointer" key={index}>
                <Menu.Item>
                  <Link href={item.link}>
                    <a>
                      <div tw="flex items-center justify-start w-full py-1">
                        <span tw="text-base">{item.label}</span>
                      </div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
