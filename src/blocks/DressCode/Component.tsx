'use client'

import React from 'react'
import { Shirt, Crown, Palette, Info, X } from 'lucide-react'

import type { DressCodeBlock as DressCodeBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const DressCodeBlock: React.FC<DressCodeBlockProps> = ({
  sectionTitle = 'Dress Code',
  description,
  dressCodeType = 'cocktail',
  groomsmenAttire,
  bridesmaidsAttire,
  menAttire,
  womenAttire,
  sponsorsAttire,
  additionalNotes,
  colorPalette,
  avoidColors,
  showcaseImages,
  backgroundColor = 'light',
}) => {
  const bgClass =
    backgroundColor === 'light'
      ? 'bg-white/50'
      : backgroundColor === 'lightGreen'
        ? 'bg-emerald-50'
        : backgroundColor === 'dark'
          ? 'bg-gray-900'
          : backgroundColor === 'transparent'
            ? 'bg-transparent'
            : 'bg-gradient-to-r from-emerald-50 to-green-50'

  const textColor = backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'
  const subTextColor = backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const cardBgColor = backgroundColor === 'dark' ? 'bg-gray-800' : 'bg-white'
  const borderColor = backgroundColor === 'dark' ? 'border-gray-700' : 'border-gray-200'

  const dressCodeLabels = {
    casual: 'Casual',
    cocktail: 'Cocktail Attire',
    semiformal: 'Semi-Formal',
    formal: 'Formal',
    blacktie: 'Black Tie',
    whitetie: 'White Tie',
    beachformal: 'Beach Formal',
    gardenparty: 'Garden Party',
  }

  return (
    <section className={`py-24 px-4 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-16 h-px ${backgroundColor === 'dark' ? 'bg-white/50' : 'bg-emerald-300'}`}
            ></div>
            <Shirt
              className={`w-6 h-6 ${backgroundColor === 'dark' ? 'text-white' : 'text-emerald-400'}`}
            />
            <div
              className={`w-16 h-px ${backgroundColor === 'dark' ? 'bg-white/50' : 'bg-emerald-300'}`}
            ></div>
          </div>

          {sectionTitle && (
            <h2 className={`text-4xl font-serif mb-6 ${textColor}`}>{sectionTitle}</h2>
          )}

          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${cardBgColor} border ${borderColor} mb-6`}
          >
            <Crown className="w-5 h-5 text-emerald-500" />
            <span className={`text-xl font-semibold ${textColor}`}>
              {dressCodeType ? dressCodeLabels[dressCodeType] : 'Dress Code'}
            </span>
          </div>

          {description && (
            <div className={`text-xl leading-relaxed max-w-3xl mx-auto ${subTextColor}`}>
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Attire Guidelines */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Groomsmen Attire */}
          {groomsmenAttire?.referenceImage && (
            <div
              className={`${cardBgColor} rounded-lg p-6 border ${borderColor} shadow-lg text-center`}
            >
              <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Groomsmen</h3>
              <div className="overflow-hidden rounded-lg">
                <Media
                  resource={groomsmenAttire.referenceImage}
                  alt="Groomsmen attire reference"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}

          {/* Bridesmaids Attire */}
          {bridesmaidsAttire?.referenceImage && (
            <div
              className={`${cardBgColor} rounded-lg p-6 border ${borderColor} shadow-lg text-center`}
            >
              <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Bridesmaids</h3>
              <div className="overflow-hidden rounded-lg">
                <Media
                  resource={bridesmaidsAttire.referenceImage}
                  alt="Bridesmaids attire reference"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}

          {/* Men's Attire (Guests) */}
          {menAttire?.referenceImage && (
            <div
              className={`${cardBgColor} rounded-lg p-6 border ${borderColor} shadow-lg text-center`}
            >
              <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Men's Attire</h3>
              <div className="overflow-hidden rounded-lg">
                <Media
                  resource={menAttire.referenceImage}
                  alt="Men's attire reference"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}

          {/* Women's Attire (Guests) */}
          {womenAttire?.referenceImage && (
            <div
              className={`${cardBgColor} rounded-lg p-6 border ${borderColor} shadow-lg text-center`}
            >
              <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Women's Attire</h3>
              <div className="overflow-hidden rounded-lg">
                <Media
                  resource={womenAttire.referenceImage}
                  alt="Women's attire reference"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}

          {/* Sponsors Attire */}
          {sponsorsAttire?.referenceImage && (
            <div
              className={`${cardBgColor} rounded-lg p-6 border ${borderColor} shadow-lg text-center`}
            >
              <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Sponsors</h3>
              <div className="overflow-hidden rounded-lg">
                <Media
                  resource={sponsorsAttire.referenceImage}
                  alt="Sponsors attire reference"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Color Palette & Guidelines */}
        {(colorPalette || avoidColors) && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recommended Colors */}
              {colorPalette && (
                <div className={`${cardBgColor} rounded-lg p-8 border ${borderColor} shadow-lg`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className={`text-2xl font-semibold ${textColor}`}>Recommended Colors</h3>
                  </div>
                  <div className={`${subTextColor}`}>
                    <RichText data={colorPalette} enableGutter={false} />
                  </div>
                </div>
              )}

              {/* Colors to Avoid */}
              {avoidColors && (
                <div className={`${cardBgColor} rounded-lg p-8 border ${borderColor} shadow-lg`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className={`text-2xl font-semibold ${textColor}`}>Please Avoid</h3>
                  </div>
                  <div className={`${subTextColor}`}>
                    <RichText data={avoidColors} enableGutter={false} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Showcase Images */}
        {showcaseImages && showcaseImages.length > 0 && (
          <div className="mb-16">
            <h3 className={`text-3xl font-serif text-center mb-12 ${textColor}`}>
              Style Inspiration
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {showcaseImages.map((item, index) => (
                <div key={item.id || index} className="overflow-hidden rounded-lg shadow-lg">
                  <Media
                    resource={item.image}
                    alt={`Style inspiration ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Notes */}
        {additionalNotes && (
          <div className={`${cardBgColor} rounded-lg p-8 border ${borderColor} shadow-lg`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Info className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className={`text-2xl font-semibold ${textColor}`}>Additional Notes</h3>
            </div>
            <div className={`${subTextColor} text-lg leading-relaxed`}>
              <RichText data={additionalNotes} enableGutter={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
