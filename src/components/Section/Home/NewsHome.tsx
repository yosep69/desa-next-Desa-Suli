import { BigNews, HomeNews } from '@components/Card'
import { Container } from '@components/Container'
import Link from 'next/link'

export const NewsHome = ({ data }: any) => {
  return (
    <Container tw="py-10 md:py-20">
      <div tw="flex justify-between mb-10 items-end" id="news">
        <h1 tw="text-3xl md:text-4xl font-bold text-blue-800">Berita Desa</h1>
        <Link href={'/news'}>
          <a>
            <h3 tw="text-secondary font-semibold cursor-pointer">Selengkapnya</h3>
          </a>
        </Link>
      </div>
      <div tw="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <div tw="flex-grow relative">
          {data.slice(0, 1).map((item: any, i: number) => {
            return (
              <BigNews
                key={i}
                urlImg={item.props.image}
                date={item.props.date}
                title={item.props.title}
                slug={item.props.slug}
                content={item.props.content}
              />
            )
          })}
        </div>
        <div tw="flex flex-col md:w-[30rem]">
          <div tw="grid grid-cols-2 gap-x-3 gap-y-5 md:gap-4">
            {data.slice(1, 5).map((item: any, i: number) => (
              <HomeNews
                urlImg={`${item.props.image}`}
                date={item.props.date}
                title={item.props.title}
                slug={item.props.slug}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
