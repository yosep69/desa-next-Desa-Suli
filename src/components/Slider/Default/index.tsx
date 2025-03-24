import Image from 'next/image'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'
import tw, { styled } from 'twin.macro'

const settings: Settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnDotsHover: true,
  fade: true,
  autoplay: true,
  arrows: false,
  lazyLoad: 'ondemand'
}

const Wrapper = styled.div`
  ${tw`w-full md:w-[75%]`}
  .slick-dots {
    position: absolute;
    right: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    ${tw`flex w-11/12 lg:px-[5.5rem] space-x-5`}
  }
  @media (max-width: 768px) {
    .slick-dots {
      top: 11.5rem;
    }
  }
  .slick-dots li {
    margin-left: 0px;
    margin-right: 0px;
  }
  .slick-dots li button:before {
    content: '';
    ${tw`w-6 h-1 bg-white rounded`}
  }
  .slick-dots li.slick-active button:before {
    ${tw`bg-white`}
  }
  .slick-dots li button:hover::before {
    ${tw`bg-white`}
  }
  .slick-dots li button:focus:before {
    opacity: 0.25;
  }
  .slick-dots li.slick-active button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
  }
  @media (min-width: 1024px) {
    .slick-dots {
      position: absolute;
      right: 50%;
      bottom: 1rem;
      transform: translate(50%, -50%);
      text-align: center;
      ${tw`flex w-11/12 lg:px-[5.5rem] space-x-5`}
    }
  }
`
const SliderItem = styled.div`
  ${tw`w-full h-52 md:h-[23.2rem] relative`}
`

const LayerGradient = styled.div`
  ${tw`absolute w-4/5 h-full rounded-xl`}
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.81%, rgba(0, 0, 0, 0.4) 44.45%, rgba(0, 0, 0, 0) 98.17%);
`
export const DefaultSLider = ({ data }: any) => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {data.slice(0, 10).map((items: any) => (
          <SliderItem key={Math.random()}>
            <div tw="w-full h-full relative">
              <Image
                src={items.props.image}
                layout="fill"
                tw="w-full h-full object-cover object-center absolute rounded-xl"
                priority={true}
              />
              <LayerGradient />
            </div>
            <div tw="absolute w-full h-full top-0 left-0">
              <div tw="w-full h-full flex items-center">
                <div tw="px-5 md:m-auto lg:w-11/12 lg:px-14">
                  <div tw="w-full md:w-2/3 flex flex-col space-y-2 md:space-y-4">
                    <h3 tw="text-white font-bold text-xl md:text-2xl">
                      {items.props.title.length > 40 ? items.props.title.slice(0, 20) + '...' : items.props.title}
                    </h3>
                    <Link href={`/news/${items.slug}`}>
                      <a>
                        <p tw="text-white text-lg cursor-pointer">Selengkapnya</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  )
}
