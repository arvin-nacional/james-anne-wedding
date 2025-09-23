'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

// Section mapping for hero links
const sectionMapping: Record<string, string> = {
  'our-story': '#love-story',
  'love-story': '#love-story',
  details: '#wedding-details',
  'wedding-details': '#wedding-details',
  ceremony: '#ceremony-reception',
  'ceremony-reception': '#ceremony-reception',
  'dress-code': '#dress-code',
  rsvp: '#rsvp',
  contact: '#contact',
}

const smoothScrollToSection = (href: string) => {
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)

  if (element) {
    const headerHeight = 80 // Approximate header height
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}

const HeroSectionLink: React.FC<{ link: any }> = ({ link }) => {
  const { label, url, type } = link || {}

  // Check if this is a section link
  const cleanUrl = typeof url === 'string' ? url.replace('/', '').replace('#', '') : ''
  const sectionHref = cleanUrl && sectionMapping[cleanUrl]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (sectionHref) {
      e.preventDefault()
      smoothScrollToSection(sectionHref)
    }
  }

  // If it's a section link, render custom link
  if (sectionHref) {
    return (
      <a
        href={sectionHref}
        onClick={handleClick}
        className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
      >
        {label}
      </a>
    )
  }

  // Otherwise, use regular CMSLink
  return <></>
}

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[10.4rem] flex items-center justify-center text-white"
      data-theme="dark"
    >
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <HeroSectionLink link={link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
