'use client'

import React from 'react'
import { Heart, Calendar, Clock, MapPin } from 'lucide-react'

import type { WeddingDetailsBlock as WeddingDetailsBlockProps } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const WeddingDetailsBlock: React.FC<WeddingDetailsBlockProps> = ({
  sectionTitle = 'Wedding Details',
  subtitle = 'Everything you need to know about our special day',
  backgroundColor = 'light',
  backgroundImage,
  details,
}) => {
  const bgClass =
    backgroundColor === 'transparent'
      ? 'bg-transparent'
      : backgroundColor === 'dark'
        ? 'bg-gray-900'
        : backgroundColor === 'image'
          ? 'relative'
          : backgroundColor === 'lightGreen'
            ? 'bg-emerald-50'
            : 'bg-white/50'

  return (
    <section className={`py-32 px-4 ${bgClass}`}>
      {/* Background Image with Green Overlay */}
      {backgroundColor === 'image' && backgroundImage && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <Media
              resource={backgroundImage}
              alt="Wedding details background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-green-900/80"></div>
        </>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-16 h-px ${backgroundColor === 'image' ? 'bg-white/50' : 'bg-emerald-300'}`}
            ></div>
            <Heart
              className={`w-6 h-6 ${backgroundColor === 'image' ? 'text-white fill-white' : 'text-emerald-400 fill-emerald-400'}`}
            />
            <div
              className={`w-16 h-px ${backgroundColor === 'image' ? 'bg-white/50' : 'bg-emerald-300'}`}
            ></div>
          </div>

          {sectionTitle && (
            <h2
              className={`text-4xl font-serif mb-4 ${backgroundColor === 'image' ? 'text-white drop-shadow-lg' : 'text-gray-800'}`}
            >
              {sectionTitle}
            </h2>
          )}

          {subtitle && (
            <p
              className={`text-lg ${backgroundColor === 'image' ? 'text-white/90 drop-shadow-md' : 'text-gray-600'}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {details?.map((detail, index) => {
            const IconComponent =
              detail.icon === 'calendar' ? Calendar : detail.icon === 'clock' ? Clock : MapPin

            // Glass effect styling based on background
            const cardClass =
              backgroundColor === 'image'
                ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl'
                : 'bg-white/80 backdrop-blur-sm shadow-xl border-0'

            return (
              <Card
                key={index}
                className={`${cardClass} overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${backgroundColor === 'image' ? 'hover:bg-white/20' : ''}`}
              >
                {detail.image && (
                  <div className="h-48 overflow-hidden">
                    <Media
                      resource={detail.image}
                      alt={detail.imageAlt || detail.title || 'Wedding detail'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <CardContent className="p-6 text-center">
                  <IconComponent
                    className={`w-8 h-8 mx-auto mb-3 ${backgroundColor === 'image' ? 'text-white' : 'text-emerald-400'}`}
                  />

                  {detail.title && (
                    <h3
                      className={`text-xl font-semibold mb-2 ${backgroundColor === 'image' ? 'text-white' : 'text-gray-800'}`}
                    >
                      {detail.title}
                    </h3>
                  )}

                  {detail.subtitle && (
                    <p
                      className={`mb-1 ${backgroundColor === 'image' ? 'text-white/80' : 'text-gray-600'}`}
                    >
                      {detail.subtitle}
                    </p>
                  )}

                  {detail.mainText && (
                    <p
                      className={`text-2xl font-serif mb-2 ${backgroundColor === 'image' ? 'text-white font-medium' : 'text-emerald-600'}`}
                    >
                      {detail.mainText}
                    </p>
                  )}

                  {detail.description && (
                    <div
                      className={`text-sm ${backgroundColor === 'image' ? 'text-white/70' : 'text-gray-600'}`}
                    >
                      <RichText data={detail.description} enableGutter={false} />
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
