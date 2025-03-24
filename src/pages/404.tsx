import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import Link from 'next/link'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div tw="h-screen w-full relative flex justify-center items-center">
          <div tw="absolute flex flex-col space-y-3 md:flex-row md:space-x-5 justify-center items-center md:divide-x-2 md:divide-gray-200">
            <h1 tw="font-bold text-4xl md:text-5xl text-primary">404</h1>
            <div tw="flex flex-col md:items-start items-center text-center md:text-left space-y-3 md:pl-5">
              <div>
                <h1 tw="font-bold text-lg md:text-3xl">Halaman Tidak Ditemukan</h1>
                <p>Kami tidak dapat menemukan halaman yang Anda cari</p>
              </div>
              <Link href="/">
                <button tw="py-3.5 px-6 text-sm border rounded bg-primary text-white">Kembali ke Beranda</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
