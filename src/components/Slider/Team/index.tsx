import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import tw, { styled } from 'twin.macro'

const Content = styled.p`
  ${tw`text-gray-700 text-base text-justify overflow-hidden overflow-ellipsis h-[6rem]`}
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const WrapperSlider = styled.div`
  ${tw`relative flex justify-center w-full`}
  div {
    .slick-list {
      .slick-track {
        display: flex !important;
        justify-content: center !important;
        ${tw`py-5`}
        .slick-slide {
          display: flex !important;
          > div {
            display: flex !important;
            width: 100% !important;
          }
          &.slick-current {
            display: flex !important;
          }
          .slide-text {
            padding-top: 1.3rem !important;
            opacity: 0;
          }
        }
        .leftclip {
          clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
        }
        .rightclip {
          clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
        }
        .slick-center img {
          ${tw`mb-2 rounded-lg`}
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        .slick-center,
        .slick-center .slide-text {
          ${tw`transition-all duration-300 delay-300 bg-gray-200 rounded-md`}
          opacity: 1;
        }
      }
    }
  }
`
// leftClip clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
// noneClip clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
// rightClip clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);

export const TeamSlider = ({ data }: any) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sliderRef = useRef<any>(null)
  const gotoNext = () => {
    sliderRef.current.slickNext()
  }
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }
  const settings: Settings = {
    infinite: data.length > 3 ? true : false,
    autoplay: data.length > 1 ? false : false,
    easing: 'ease-in-out',
    autoplaySpeed: 2500,
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    lazyLoad: 'ondemand'
    // beforeChange: (index) => {
    //   const sample = document.getElementById(`image${index}`) as HTMLImageElement
    //   console.log(sample)
    //   console.log('b', index)
    // },
    // afterChange: (index) => {
    //   const sample = document.getElementById(`image${index}`) as HTMLImageElement
    //   console.log(sample)
    //   console.log('a', index)
    // }
  }

  return (
    <WrapperSlider>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item: any, i: number) => (
          <Link href={`/aparatur/${item.slug}`} key={i}>
            <a tw="flex w-full">
              <div tw="w-full">
                <div tw="flex flex-col p-4">
                  <div tw="relative w-full h-[260px] md:h-[380px]">
                    <Image
                      src={`${item.frontmatter.thumbnail}`}
                      id={`image${i}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start space-y-1 slide-text">
                    <p tw="text-gray-700 text-base">{item.frontmatter.position}</p>
                    <h3 tw="text-primary font-bold">{item.frontmatter.name}</h3>
                    <Content>{item.content}</Content>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Slider>
      <div
        tw="justify-between w-full px-1.5 md:px-0 md:w-[42%] absolute bottom-32"
        css={{ display: data.length > 3 ? 'flex' : 'hidden' }}>
        <button tw="rounded-full border border-primary w-10 h-10 md:w-16 md:h-16" onClick={() => gotoPrev()}>
          <div tw="transform transition-all duration-200 hover:-translate-x-0.5 bg-none flex justify-center items-center">
            <Image
              src={'/static/icons/ArrowLeft.svg'}
              width={isDesktop ? 25 : 20}
              height={isDesktop ? 39 : 20}
              layout="fixed"
              tw="object-contain"
            />
          </div>
        </button>
        <button tw="rounded-full border border-primary w-10 h-10 md:w-16 md:h-16" onClick={() => gotoNext()}>
          <div tw="transform transition-all duration-200 hover:translate-x-0.5 bg-none flex justify-center items-center">
            <Image
              src={'/static/icons/ArrowRight.svg'}
              width={isDesktop ? 25 : 20}
              height={isDesktop ? 39 : 20}
              layout="fixed"
              tw="object-contain"
            />
          </div>
        </button>
      </div>
    </WrapperSlider>
  )
}
