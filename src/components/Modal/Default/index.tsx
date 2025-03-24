import { XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface DefaultModal {
  open: boolean
  closeButton?: boolean
  onClose?: any
  withButton?: boolean
}
export const DefaultModal: React.FunctionComponent<DefaultModal & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  open,
  closeButton,
  onClose,
  children,
  withButton = false
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)
  useEffect(() => {
    const getOpen = () => {
      setIsOpen(open)
    }
    getOpen()
    return () => {
      getOpen()
    }
  }, [open])
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" tw="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
          <div tw="min-h-screen sm:py-4 md:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay tw="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <span tw="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div
                className={`inline-block w-auto px-6 ${
                  withButton ? 'pt-10 pb-5' : 'py-10'
                } md:py-10 space-y-3 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-lg`}>
                <div tw="text-left">{children}</div>
                {closeButton && (
                  <button
                    type="button"
                    tw="absolute top-3 right-5"
                    onClick={() => {
                      setIsOpen(false)
                      onClose && onClose()
                    }}>
                    <XIcon tw="block w-6 h-6" aria-hidden="true" />
                  </button>
                )}
              </div>
            </Transition.Child>
            <div tw="hidden justify-between items-center absolute transform px-3 md:px-0 w-full md:-translate-x-1/2 md:right-0 top-1/2 md:w-1/2 z-50">
              <Image src={'/static/icons/ChevrownLeftWhite.svg'} height={23} width={19} layout="fixed" />
              <Image src={'/static/icons/ChevrownRightWhite.svg'} height={23} width={19} layout="fixed" />
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
