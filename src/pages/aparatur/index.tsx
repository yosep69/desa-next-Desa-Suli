import { AparaturCard } from '@components/Card/Aparatur'
import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import fs from 'fs'
import matter from 'gray-matter'

export const getStaticProps = async () => {
  const files = fs.readdirSync('content/aparatur')

  if (files) {
    const aparatur = files.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const readFile = fs.readFileSync(`content/aparatur/${fileName}`, 'utf-8')
      const { data: frontmatter, content } = matter(readFile)
      return {
        slug,
        frontmatter,
        content
      }
    })
    return {
      props: {
        aparatur
      }
    }
  }
}
const aparatur = ({ aparatur }: any) => {
  return (
    <Layout>
      <Container tw="pt-20 pb-10 md:pt-24 md:pb-16">
        <h1 tw="text-3xl md:text-4xl font-bold text-blue-800">Sinergitas Kami</h1>
        <div tw="grid grid-cols-2 gap-5 py-10 md:grid-cols-3 md:gap-7 md:py-14">
          {aparatur.map((items: any, i: number) => (
            <AparaturCard
              key={i}
              thumbnail={items.frontmatter.thumbnail}
              name={items.frontmatter.name}
              position={items.frontmatter.position}
              slug={items.slug}
              {...items}
            />
          ))}
        </div>
      </Container>
    </Layout>
  )
}
export default aparatur
