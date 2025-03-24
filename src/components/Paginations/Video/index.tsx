import { VideoCard } from '@components/Card'
import { DefaultModal } from '@components/Modal/Default'
import dataVideo from '@jsons/dataVideo.json'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

export const Items = ({ children }: any) => {
  const [open, setOpen] = useState(false)
  const [setIdOption, setId] = useState<any>(null)
  const [setVideoOption, setVideo] = useState<any>(null)

  const fetchDataId = (resultId: any) => {
    const loopData = dataVideo.posts.filter(({ id }: any) => {
      return id == resultId
    })
    function getId(url: string) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return match && match[2].length === 11 ? match[2] : null
    }
    const videoId = getId(loopData[0].youtube)
    setVideo(videoId)
    setId(loopData[0])
  }
  return (
    <>
      <div tw="grid-cols-2 gap-6 grid md:grid-cols-3 md:gap-6">
        {children &&
          children.map((items: any) => (
            <VideoCard
              {...items}
              onclick={() => {
                setOpen(true)
                fetchDataId(items.id)
              }}
              key={items.id}
            />
          ))}
      </div>

      {open && (
        <DefaultModal withButton={true} open={open} closeButton={true} onClose={() => setOpen(false)}>
          <form tw="my-5 w-[19rem] md:w-[34rem] lg:w-[30rem] md:px-4 md:mt-6 flex flex-col space-y-3">
            <h1 tw="text-xl w-full md:w-[30rem] font-semibold leading-6 text-left text-secondary -mt-8">
              {setIdOption.title}
            </h1>
            <div>
              <iframe
                tw="w-full h-44 md:h-72"
                src={`//www.youtube.com/embed/${setVideoOption}`}
                frameBorder="0"
                allowFullScreen></iframe>
            </div>
            <p tw="text-gray-600">{setIdOption.description}</p>
          </form>
        </DefaultModal>
      )}
    </>
  )
}

export const PaginationVideo = ({ itemsPerPage = 6 }: any) => {
  const posts = dataVideo.posts
  const [currentItems, setCurrentItems] = useState<any>(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(posts.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(posts.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length
    setItemOffset(newOffset)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Items children={currentItems} />
      <div tw="flex justify-center w-full text-gray-700">
        <ReactPaginate
          previousClassName={pageCount > 5 ? 'flex pr-4' : 'hidden'}
          previousLinkClassName={pageCount > 5 ? 'flex' : 'hidden'}
          nextClassName={pageCount > 5 ? 'flex  pl-4' : 'hidden'}
          nextLinkClassName={pageCount > 5 ? 'flex' : 'hidden'}
          breakLabel="..."
          nextLabel={<Image src={'/static/icons/ChevrownRight.svg'} height={10} width={6} layout="fixed" />}
          previousLabel={<Image src={'/static/icons/ChevrownLeft.svg'} height={10} width={6} layout="fixed" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          containerClassName={'flex space-x-1 mt-10 items-center'}
          pageLinkClassName={'w-8 lg:w-9 h-8 lg:h-9 flex justify-center items-center hover:underline lg:text-base text-sm'}
          activeClassName={'!bg-primary !text-white rounded'}
        />
      </div>
    </>
  )
}
