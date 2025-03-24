import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import { PaginationNews } from '@components/Paginations/News'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
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
  return {
    props: {
      news
    }
  }
}

const News = ({ news }: any) => {
  // looping news array and return result
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
      props: {
        date,
        title,
        slug,
        image,
        content,
        metaTitle,
        metaDescription
      }
    }
  })
  // result the split and sort the news
  const resultNews = splitdate.sort((a: any, b: any) => Date.parse(b.props.date) - Date.parse(a.props.date))

  return (
    <Layout data={resultNews}>
      <Container tw="pt-20 pb-10 md:pt-24 md:pb-16">
        <p tw="text-3xl md:text-4xl pb-8 md:pb-14 font-bold text-blue-800">Berita Desa</p>
        <PaginationNews data={resultNews} />
      </Container>
    </Layout>
  )
}
export default News
