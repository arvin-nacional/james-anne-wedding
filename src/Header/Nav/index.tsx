'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

// Home page sections for smooth scrolling
const homeSections = [
  { label: 'Our Story', href: '#love-story' },
  { label: 'Details', href: '#wedding-details' },
  { label: 'Ceremony', href: '#ceremony-reception' },
  { label: 'Dress Code', href: '#dress-code' },
  { label: 'RSVP Now', href: '#rsvp' },
]

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

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollToSection(href)
  }

  return (
    <nav className="flex gap-6 items-center">
      {/* Show section navigation only on home page */}
      {isHomePage && (
        <>
          {homeSections.map((section, i) => (
            <a
              key={i}
              href={section.href}
              onClick={(e) => handleSectionClick(e, section.href)}
              className="text-white hover:text-white/80 transition-colors font-medium cursor-pointer"
            >
              {section.label}
            </a>
          ))}
        </>
      )}

      {/* Always show CMS navigation items */}
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="inline"
            className="text-white hover:text-white/80 transition-colors font-medium"
          />
        )
      })}

      {/* Search icon (commented out) */}
      {/* <Link href="/search" className="text-white hover:text-white/80 transition-colors">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 h-5" />
      </Link> */}
    </nav>
  )
}
