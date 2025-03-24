import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import Markdown, { useComponent } from '@components/Markdown'
import { SocialShare } from '@components/SocialShare'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fs from 'fs'
import Image from 'next/image'
import matter from 'gray-matter'
import tw, { styled } from 'twin.macro'
import { toLocaleDate } from '@utils/index'

const MarkdownStyled = styled(Markdown as any)`
  table {
    margin-top: 1rem;
    tr {
      td:nth-of-type(2) {
        padding: 0 1.5rem;
      }
    }
  }
`
const TitleWrapper = styled.p`
  ${tw`overflow-hidden overflow-ellipsis h-[3.5rem] text-sm md:text-lg font-medium text-gray-900`}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export async function getStaticPaths() {
  const files = fs.readdirSync('content/news')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  // get all data
  const newsFile = fs.readdirSync('content/news')
  const news = newsFile.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`content/news/${fileName}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFile)
    return {
      slug,
      frontmatter,
      content
    }
  })
  // get slug
  const fileName = fs.readFileSync(`content/news/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      news,
      slug,
      frontmatter,
      content
    }
  }
}

const detailNews = ({ frontmatter, content, news, slug }: any) => {
  const splitdate = news.map((item: any) => {
    // get and split date
    const splitDate = item.frontmatter.publishAt.split('-')
    const date = splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0]
    // return any array
    const title = item.frontmatter.title
    const slug = item.slug
    const image = item.frontmatter.thumbnailImage
    const content = item.content
    const metaTitle = item.frontmatter.metaTitle
    const metaDescription = item.frontmatter.metaDesc
    return {
      date,
      title,
      slug,
      image,
      content,
      metaTitle,
      metaDescription
    }
  })
  // result the split and sort the news
  const resultNews = splitdate.sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))

  // get current index
  const data = resultNews
  const val = slug
  const currentIndex = data.findIndex(function (item: any) {
    return item.slug === val
  })

  const prevIndex = resultNews[currentIndex - 1]
  const nextIndex = resultNews[currentIndex + 1]

  const { asPath } = useRouter()

  const splitDateSlug = frontmatter.publishAt.split('-')
  const dateSlug = splitDateSlug[2] + '-' + splitDateSlug[1] + '-' + splitDateSlug[0]
  return (
    <Layout>
      <Container tw="pt-20 pb-10 md:pt-24 md:pb-20">
        <article tw="md:mx-44">
          <p tw="text-gray-500">
            <Link href={'/news'}>
              <a>
                <span tw="font-semibold">Berita </span>
              </a>
            </Link>
            / {frontmatter.title}
          </p>
          <h1 tw="py-3 md:py-8 text-2xl md:text-5xl font-bold">{frontmatter.title}</h1>
          <p tw="text-gray-500">{toLocaleDate(dateSlug, 'id')}</p>
          <div tw="relative pb-5 md:pb-16 pt-5">
            <div tw="relative">
              <div tw="hidden md:flex md:sticky md:top-28">
                <SocialShare url={process.env.BASE_URL + asPath} />
              </div>
              <div tw="w-full h-[249px] md:h-[428px] relative mb-4 md:mb-10">
                <Image src={frontmatter.thumbnailImage} layout="fill" objectFit="cover" />
              </div>
              <MarkdownStyled children={content} components={useComponent.default} />
            </div>
            <div tw="md:hidden flex">
              <SocialShare url={asPath} />
            </div>
          </div>
          <div
            className={`grid md:grid-rows-none gap-y-4 md:grid-cols-2 md:gap-x-8 ${
              prevIndex == undefined ? 'grid-rows-1' : nextIndex == undefined ? 'grid-rows-1' : 'grid-rows-2'
            }`}>
            {prevIndex != undefined && (
              <Link href={`/news/${prevIndex.slug}`}>
                <a>
                  <div tw="border border-gray-300 p-5 flex flex-col space-y-5 cursor-pointer">
                    <TitleWrapper>{prevIndex.title}</TitleWrapper>
                    <span tw="text-gray-600 text-base">{toLocaleDate(prevIndex.date, 'id')}</span>
                  </div>
                </a>
              </Link>
            )}
            {nextIndex != undefined && (
              <Link href={`/news/${nextIndex.slug}`}>
                <a>
                  <div tw="border border-gray-300 p-5 flex flex-col space-y-5 cursor-pointer">
                    <TitleWrapper>{nextIndex.title}</TitleWrapper>
                    <span tw="text-gray-600 text-base">{toLocaleDate(nextIndex.date, 'id')}</span>
                  </div>
                </a>
              </Link>
            )}
          </div>
        </article>
      </Container>
    </Layout>
  )
}

export default detailNews
