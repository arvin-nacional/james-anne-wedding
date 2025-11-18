import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  size?: 'default' | 'small'
}

export const Logo = (props: Props) => {
  const { className, size = 'default' } = props

  const sizeClass = size === 'small' ? 'h-10' : 'h-16'

  return (
    <div className={clsx('text-2xl font-serif text-gray-800', className)}>
      <img
        src="/final-emblem.png"
        alt="James & Anne Wedding"
        className={`${sizeClass} w-auto transition-all duration-300`}
      />
    </div>
  )
}
