import * as Icons from '@components/Icon'
import { useState, useMemo } from 'react'
interface IProps {
  title: string
  icon: string
}
export const ButtonHeroHorizontal = ({ title, icon }: IProps) => {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  const Icon = useMemo(() => {
    return (Icons as any)?.[icon]
  }, [])
  return (
    <div
      tw="p-3 rounded-xl border border-transparent shadow cursor-pointer flex justify-start md:justify-center w-full space-x-2 items-center bg-white hover:bg-primary hover:shadow-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className={`flex items-center p-2 rounded-full ${isHovering ? 'bg-white' : 'bg-none'}`}>
        <Icon hovered={isHovering ? true : undefined} />
      </div>
      <h1 className={`text-base font-semibold ${isHovering ? 'text-white' : 'text-gray-700'}`}>{title}</h1>
    </div>
  )
}
