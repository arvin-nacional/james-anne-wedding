import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
}

export const Logo = (props: Props) => {
  const { className } = props

  return <div className={clsx('text-2xl font-serif text-gray-800', className)}>James & Anne</div>
}
