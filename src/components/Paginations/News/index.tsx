import { PageNews } from '@components/Card'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

export const PaginationNews = ({ data }: any) => {
  const [currentItems, setCurrentItems] = useState<any>(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + 6
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / 6))
  }, [itemOffset, 6])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 6) % data.length
    setItemOffset(newOffset)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div tw="grid-cols-1 gap-y-6 grid md:grid-cols-3 md:gap-6">
        {currentItems &&
          currentItems.map((items: any, i: number) => {
            return (
              <PageNews
                thumbnail={items.props.image}
                date={items.props.date}
                title={items.props.title.length > 50 ? items.props.title.slice(0, 50) + '...' : items.props.title}
                slug={items.props.slug}
                key={i}
              />
            )
          })}
      </div>

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
