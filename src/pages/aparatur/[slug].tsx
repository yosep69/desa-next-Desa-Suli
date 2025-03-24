import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import Markdown, { useComponent } from '@components/Markdown'
import fs from 'fs'
import matter from 'gray-matter'
import tw, { styled } from 'twin.macro'
const Images = styled.img`
  ${tw`w-full md:w-[395px] md:h-[524px] object-cover object-center z-20`}
  @media (min-width: 768px) {
    clip-path: polygon(75% 0, 100% 45%, 100% 100%, 0 100%, 0 0);
  }
`
const Path = styled.div`
  ${tw`w-full flex items-center h-[235px] absolute bg-gray-200 z-10 top-0`}
`

const Wrapper = styled.div`
  ${tw`z-20 flex flex-col space-y-3 md:p-10 md:transform md:-translate-x-5 md:translate-y-10`}
  @media (max-width: 768px) {
    padding-top: 28px;
  }
`
export async function getStaticPaths() {
  const files = fs.readdirSync('content/aparatur')
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
  const fileName = fs.readFileSync(`content/aparatur/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content
    }
  }
}

const detailAparatur = ({ frontmatter, content }: any) => {
  return (
    <Layout>
      <Container tw="pt-20 pb-10 md:pt-24 md:pb-20">
        <div tw="flex flex-col md:flex-row relative w-full">
          <Path></Path>
          <Images src={`${frontmatter.thumbnail}`} />
          <Wrapper>
            <h1 tw="text-blue-800 text-2xl md:text-4xl font-bold">{frontmatter.name}</h1>
            <p tw="text-lg text-gray-700 md:pl-10">{frontmatter.position}</p>
            <Markdown children={content} tw="md:pt-28 md:pl-8" components={useComponent.default} />
          </Wrapper>
        </div>
      </Container>
    </Layout>
  )
}

export default detailAparatur
