import { Container } from '@components/Container'
import { Simfokono } from '@components/Dropdown'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import dataLinkHeader from '@jsons/dataLinkHeader.json'
import namaDesa from '@jsons/siteConfig.json'
import { Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const TertiaryHeader = () => {
  const router = useRouter()
  const headerMenu = dataLinkHeader.menu

  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY

    if (offset > 1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as="div"
      className={`bg-white fixed w-full top-0 z-50 py-2.5 transition-all duration-700 ${
        scrolled ? 'shadow' : 'shadow-none'
      }`}>
      {({ open }) => {
        return (
          <Container tag="nav">
            <nav tw="flex justify-between">
              <Link href="/">
                <a tw="flex space-x-2 justify-start items-center cursor-pointer">
                  <div tw="relative w-[30px] h-[40px] md:w-[43px] md:h-[53px]">
                    <Image src={namaDesa.logo} objectFit="contain" layout="fill" unoptimized={true} />
                  </div>
                  <div tw="flex flex-col space-y-0.5">
                    <h1 tw="text-primary font-bold text-lg md:text-2xl leading-5 md:leading-7">{namaDesa.title}</h1>
                    <p tw="text-sm font-medium leading-5">{namaDesa.subtitle}</p>
                  </div>
                </a>
              </Link>
              <ul tw="hidden md:flex space-x-5 text-base font-medium items-center">
                {headerMenu.map((item, index) => (
                  <li tw="text-gray-800 hover:text-primary cursor-pointer" key={index}>
                    <Link href={item.url}>
                      <a>
                        <p>{item.label}</p>
                      </a>
                    </Link>
                  </li>
                ))}
                <li>
                  <Simfokono />
                </li>
              </ul>
              <div tw="flex items-center space-x-2 md:contents">
                <Disclosure.Button as={Fragment}>
                  <button tw="relative z-10 inline-flex items-center justify-center p-2 text-gray-400 rounded-md md:hidden">
                    <span tw="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon tw="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon tw="block w-6 h-6" aria-hidden="true" />
                    )}
                  </button>
                </Disclosure.Button>
              </div>
              <Transition
                show={open}
                enter="transition duration-400 ease-out"
                enterFrom="transform -translate-y-full opacity-0"
                enterTo="transform -translate-y-0 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform -translate-y-0 opacity-100"
                leaveTo="transform -translate-y-full opacity-0"
                tw="fixed top-0 right-0 flex justify-center items-center w-full h-screen py-20 shadow-md bg-white sm:hidden">
                <Disclosure.Panel static>
                  <ul tw="flex flex-col items-center space-y-8">
                    {headerMenu.map((item) => (
                      <Fragment key={Math.random()}>
                        <Disclosure.Button key={item.label} as="li">
                          <Link href={item.url}>
                            <p
                              className={`text-xl font-medium hover:text-blue-800 ${
                                router.asPath === item.url
                                  ? router.route === '/news/[slug]'
                                    ? 'text-blue-800'
                                    : 'text-blue-800'
                                  : 'text-gray-700'
                              }`}>
                              {item.label}
                            </p>
                          </Link>
                        </Disclosure.Button>
                      </Fragment>
                    ))}
                    <li>
                      <Simfokono />
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </nav>
          </Container>
        )
      }}
    </Disclosure>
  )
}
