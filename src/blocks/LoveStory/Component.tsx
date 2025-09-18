'use client'

import React from 'react'
import { Heart } from 'lucide-react'

import type { LoveStoryBlock as LoveStoryBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const LoveStoryBlock: React.FC<LoveStoryBlockProps> = ({
  sectionTitle = 'Our Love Story',
  title,
  backgroundColor = 'transparent',
  backgroundImage,
  content,
  image,
  imageAlt,
  layout = 'imageRight',
}) => {
  const bgClass =
    backgroundColor === 'light'
      ? 'bg-white/50'
      : backgroundColor === 'dark'
        ? 'bg-gray-900'
        : backgroundColor === 'image'
          ? 'relative'
          : 'bg-transparent'

  return (
    <section className={`py-32 px-4 ${bgClass}`}>
      {/* Background Image with Green Overlay */}
      {backgroundColor === 'image' && backgroundImage && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <Media
              resource={backgroundImage}
              alt="Love story background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-green-900/80"></div>
        </>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center min-h-[600px] ${
            layout === 'imageLeft' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Content */}
          <div
            className={`flex flex-col justify-center ${layout === 'imageLeft' ? 'lg:col-start-2' : ''}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-px ${backgroundColor === 'image' ? 'bg-white/50' : 'bg-emerald-300'}`}
              ></div>
              <Heart
                className={`w-6 h-6 ${backgroundColor === 'image' ? 'text-white fill-white' : 'text-emerald-400 fill-emerald-400'}`}
              />
              <div
                className={`w-12 h-px ${backgroundColor === 'image' ? 'bg-white/50' : 'bg-emerald-300'}`}
              ></div>
            </div>

            {sectionTitle && (
              <h2
                className={`text-4xl font-serif mb-6 ${backgroundColor === 'image' ? 'text-white drop-shadow-lg' : backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'}`}
              >
                {sectionTitle}
              </h2>
            )}

            {title && (
              <h3
                className={`text-2xl font-serif mb-4 ${backgroundColor === 'image' ? 'text-white/90 drop-shadow-md' : backgroundColor === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                {title}
              </h3>
            )}

            {content && (
              <div
                className={`leading-relaxed space-y-4 ${backgroundColor === 'image' ? 'text-white/80 drop-shadow-sm' : backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <RichText data={content} enableGutter={false} />
              </div>
            )}
          </div>

          {/* Image */}
          <div
            className={`relative flex items-center justify-center ${layout === 'imageLeft' ? 'lg:col-start-1' : ''}`}
          >
            {image ? (
              <div className="relative group cursor-pointer">
                <Media
                  resource={image}
                  alt={imageAlt || 'Love story image'}
                  className="rounded-lg shadow-2xl w-full object-cover transition-all duration-500 ease-out group-hover:scale-102 group-hover:shadow-3xl group-hover:shadow-emerald-200/50"
                />
                {/* Decorative elements with hover animations */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full opacity-50 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-70 group-hover:bg-emerald-200"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-100 rounded-full opacity-50 transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-70 group-hover:bg-green-200"></div>

                {/* Additional floating heart on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-2 group-hover:translate-y-0">
                  <Heart
                    className={`w-6 h-6 animate-pulse ${backgroundColor === 'image' ? 'text-white fill-white' : 'text-emerald-400 fill-emerald-400'}`}
                  />
                </div>
              </div>
            ) : (
              <div className="relative group cursor-pointer">
                <div
                  className={`rounded-lg shadow-2xl w-full h-[500px] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-3xl ${
                    backgroundColor === 'image'
                      ? 'bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20'
                      : backgroundColor === 'dark'
                        ? 'bg-gray-800 group-hover:bg-gray-700'
                        : 'bg-gradient-to-br from-emerald-50 to-green-50 group-hover:from-emerald-100 group-hover:to-green-100'
                  }`}
                >
                  <div className="text-center">
                    <Heart
                      className={`w-16 h-16 mx-auto mb-4 opacity-50 group-hover:opacity-70 transition-all duration-300 group-hover:scale-110 ${
                        backgroundColor === 'image'
                          ? 'text-white'
                          : backgroundColor === 'dark'
                            ? 'text-gray-400'
                            : 'text-gray-400'
                      }`}
                    />
                    <p
                      className={
                        backgroundColor === 'image'
                          ? 'text-white/80'
                          : backgroundColor === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-400'
                      }
                    >
                      Add your love story image
                    </p>
                  </div>
                </div>
                {/* Decorative elements with hover animations */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full opacity-50 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-70 group-hover:bg-emerald-200"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-100 rounded-full opacity-50 transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-70 group-hover:bg-green-200"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
