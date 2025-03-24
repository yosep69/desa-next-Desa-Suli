import { Layout } from '@components/Layout'
import * as Home from '@components/Section/'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  // render the page and pass data news and aparatur to the page via props
  const newsFile = fs.readdirSync('content/news')
  const aparaturFile = fs.readdirSync('content/aparatur')

  const aparatur = aparaturFile.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFileAparatur = fs.readFileSync(`content/aparatur/${fileName}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFileAparatur)
    return {
      slug,
      frontmatter,
      content
    }
  })
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
      news,
      aparatur
    }
  }
}

const LandingPage = ({ news, aparatur }: any) => {
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
      <Home.About />
      <Home.News data={resultNews} />
      <Home.Service />
      <Home.Team data={aparatur} />
    </Layout>
  )
}
export default LandingPage
