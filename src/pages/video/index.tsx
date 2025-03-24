import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import { PaginationVideo } from '@components/Paginations'

const video = () => {
  return (
    <Layout>
      <Container tw="pt-20 pb-10 md:pt-24 md:pb-16">
        <p tw="text-3xl md:text-4xl pb-8 md:pb-14 font-bold text-blue-800">Video Desa</p>
        <PaginationVideo />
      </Container>
    </Layout>
  )
}

export default video
