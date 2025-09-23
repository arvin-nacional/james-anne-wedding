'use client'

import React from 'react'
import { Clock } from 'lucide-react'

import type { CeremonyReceptionBlock as CeremonyReceptionBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { ParallaxWrapper } from '@/components/ParallaxWrapper'

export const CeremonyReceptionBlock: React.FC<CeremonyReceptionBlockProps> = ({
  backgroundColor = 'transparent',
  ceremony,
  reception,
}) => {
  const bgClass =
    backgroundColor === 'light'
      ? 'bg-white/50'
      : backgroundColor === 'lightGreen'
        ? 'bg-emerald-50'
        : backgroundColor === 'dark'
          ? 'bg-gray-900'
          : 'bg-transparent'

  return (
    <section className={`py-32 px-4 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Ceremony */}
          {ceremony && (
            <div className="text-center lg:text-left group">
              {ceremony.image && (
                <div className="mb-8 overflow-hidden rounded-lg">
                  <Media
                    resource={ceremony.image}
                    alt={ceremony.imageAlt || 'Wedding ceremony'}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {ceremony.title && (
                <h3 className="text-3xl font-serif text-gray-800 mb-4">{ceremony.title}</h3>
              )}

              {ceremony.description && (
                <div className="text-gray-600 leading-relaxed mb-4">
                  <RichText data={ceremony.description} enableGutter={false} />
                </div>
              )}

              {ceremony.timeRange && (
                <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{ceremony.timeRange}</span>
                </div>
              )}
            </div>
          )}

          {/* Reception */}
          {reception && (
            <div className="text-center lg:text-right group">
              {reception.image && (
                <div className="mb-8 overflow-hidden rounded-lg">
                  <Media
                    resource={reception.image}
                    alt={reception.imageAlt || 'Wedding reception'}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {reception.title && (
                <h3 className="text-3xl font-serif text-gray-800 mb-4">{reception.title}</h3>
              )}

              {reception.description && (
                <div className="text-gray-600 leading-relaxed mb-4">
                  <RichText data={reception.description} enableGutter={false} />
                </div>
              )}

              {reception.timeRange && (
                <div className="flex items-center justify-center lg:justify-end gap-2 text-emerald-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{reception.timeRange}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
