import Image from 'next/image'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'
import tw, { styled } from 'twin.macro'

const settings: Settings = {
  autoplay: true,
  dots: false,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  lazyLoad: 'ondemand'
}

const Wrapper = styled.div`
  ${tw`relative w-full`}
`
const SliderItem = styled.div`
  ${tw`w-full bg-primary h-52 md:h-[585px] relative`}
`
const LayerGradient = styled.div`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 585px;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('/static/images/slider-bg.png');
    background-position: bottom right;
    background-size: 415px;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
      background-size: 115px;
      height: 100%;
    }
  }
`
const TextWrapper = styled.div`
  ${tw`absolute flex justify-center flex-col space-y-2 md:space-y-7 md:w-[718px] md:h-[418px] items-start text-white -ml-24 pl-32 pr-8 py-10 md:py-0 md:pr-0 md:ml-20 md:pl-32`}
  background-image: url('/static/images/rounded-shape.png');
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
`

const Title = styled.p`
  ${tw`overflow-hidden overflow-ellipsis md:h-auto h-[3.5rem] md:h-[5.7rem] text-xl md:text-5xl font-bold`}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const TertiarySlider = ({ data }: any) => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {data.slice(0, 10).map((items: any) => (
          <SliderItem key={Math.random()}>
            <div tw="w-full h-full relative flex items-center">
              <Image src={`${items.props.image}`} layout="fill" tw="w-full h-full object-cover object-center absolute" />
              <LayerGradient />
              <TextWrapper>
                <Title>{items.props.title}</Title>
                <Link href={`/news/${items.props.slug}`}>
                  <a>
                    <p tw="text-white text-lg cursor-pointer">Selengkapnya</p>
                  </a>
                </Link>
              </TextWrapper>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  )
}
