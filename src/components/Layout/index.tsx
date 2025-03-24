import { ThemeContainer } from '@components/Container'
import { Footer } from '@components/Footer'
import { DefaultHeader, PrimaryHeader, SecondaryHeader, TertiaryHeader } from '@components/Header'
import { DefaultHero, PrimaryHero, SecondaryHero, TertiaryHero } from '@components/Hero'
import Data from '@jsons/siteConfig.json'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  children: any
  data?: any
  color?: string
}

export const Layout = ({ children, data }: Props) => {
  const [showComponent, setshowComponent] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    switch (Data.heroActive) {
      case 1:
        if (router.asPath == '/') {
          return setshowComponent(
            <ThemeContainer color={Data.themeColor}>
              <PrimaryHeader />
              <PrimaryHero data={data} />
            </ThemeContainer>
          )
        } else {
          return setshowComponent(
            <>
              <PrimaryHeader />
            </>
          )
        }
      case 2:
        if (router.asPath == '/') {
          return setshowComponent(
            <ThemeContainer color={Data.themeColor}>
              <SecondaryHeader />
              <SecondaryHero data={data} />
            </ThemeContainer>
          )
        } else {
          return setshowComponent(
            <>
              <SecondaryHeader />
            </>
          )
        }
      case 3:
        if (router.asPath == '/') {
          return setshowComponent(
            <ThemeContainer color={Data.themeColor}>
              <TertiaryHeader />
              <TertiaryHero data={data} />
            </ThemeContainer>
          )
        } else {
          return setshowComponent(
            <>
              <TertiaryHeader />
            </>
          )
        }
      default:
        if (router.asPath == '/') {
          return setshowComponent(
            <ThemeContainer color={Data.themeColor}>
              <DefaultHeader />
              <DefaultHero data={data} />
            </ThemeContainer>
          )
        } else {
          return setshowComponent(
            <>
              <DefaultHeader />
            </>
          )
        }
    }
  }, [])

  return (
    <Fragment>
      {showComponent}
      {children}
      <Footer />
    </Fragment>
  )
}
