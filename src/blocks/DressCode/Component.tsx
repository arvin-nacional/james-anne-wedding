'use client'

import React from 'react'
import { Shirt, Crown, Palette, Info, X } from 'lucide-react'

import type { DressCodeBlock as DressCodeBlockProps } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const DressCodeBlock: React.FC<DressCodeBlockProps> = ({
  sectionTitle = 'Dress Code',
  description,
  dressCodeType = 'cocktail',
  parentAttire,
  principalAttire,
  entourageAttire,
  guestAttire,
  additionalNotes,
  colorPalette,
  avoidColors,
  showcaseImages,
  backgroundColor = 'light',
}) => {
  const bgClass =
    backgroundColor === 'transparent'
      ? 'bg-transparent'
      : backgroundColor === 'dark'
        ? 'bg-gray-900'
        : backgroundColor === 'gradient'
          ? 'bg-gradient-to-br from-emerald-50 to-teal-100'
          : backgroundColor === 'lightGreen'
            ? 'bg-emerald-50'
            : 'bg-white/50'

  const textColor = backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'
  const subTextColor = backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const glassEffect = 'backdrop-blur-xl border border-white/10 bg-white/10 shadow-2xl rounded-xl'

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
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${glassEffect} mb-6`}
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
          {/* Parent Attire */}
          {parentAttire?.referenceImage && (
            <Card
              className={`${glassEffect} overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
            >
              <div className="h-[300px] overflow-hidden">
                <Media
                  resource={parentAttire.referenceImage}
                  alt="Parent attire reference"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Parent</h3>
                {parentAttire.guidelines && (
                  <div className={`text-sm ${subTextColor}`}>
                    <RichText data={parentAttire.guidelines} enableGutter={false} />
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Principal Attire */}
          {principalAttire?.referenceImage && (
            <Card
              className={`${glassEffect} overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
            >
              <div className="h-[300px] overflow-hidden">
                <Media
                  resource={principalAttire.referenceImage}
                  alt="Principal attire reference"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Principal</h3>
                {principalAttire.guidelines && (
                  <div className={`text-sm ${subTextColor}`}>
                    <RichText data={principalAttire.guidelines} enableGutter={false} />
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Entourage Attire */}
          {entourageAttire?.referenceImage && (
            <Card
              className={`${glassEffect} overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
            >
              <div className="h-[300px] overflow-hidden">
                <Media
                  resource={entourageAttire.referenceImage}
                  alt="Entourage attire reference"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Entourage</h3>
                {entourageAttire.guidelines && (
                  <div className={`text-sm ${subTextColor}`}>
                    <RichText data={entourageAttire.guidelines} enableGutter={false} />
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Guest Attire */}
          {guestAttire?.referenceImage && (
            <Card
              className={`${glassEffect} overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
            >
              <div className="h-[300px] overflow-hidden">
                <Media
                  resource={guestAttire.referenceImage}
                  alt="Guest attire reference"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Guests</h3>
                {guestAttire.guidelines && (
                  <div className={`text-sm ${subTextColor}`}>
                    <RichText data={guestAttire.guidelines} enableGutter={false} />
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Color Palette & Guidelines */}
        {(colorPalette || avoidColors) && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recommended Colors */}
              {colorPalette && (
                <Card
                  className={`${glassEffect} hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Palette className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className={`text-2xl font-semibold ${textColor}`}>Recommended Colors</h3>
                    </div>
                    <div className={`${subTextColor}`}>
                      <RichText data={colorPalette} enableGutter={false} />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Colors to Avoid */}
              {avoidColors && (
                <Card
                  className={`${glassEffect} hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <X className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className={`text-2xl font-semibold ${textColor}`}>Please Avoid</h3>
                    </div>
                    <div className={`${subTextColor}`}>
                      <RichText data={avoidColors} enableGutter={false} />
                    </div>
                  </CardContent>
                </Card>
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
                <Card
                  key={item.id || index}
                  className={`${glassEffect} overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/30`}
                >
                  <div className="overflow-hidden">
                    <Media
                      resource={item.image}
                      alt={`Style inspiration ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {item.caption && (
                    <CardContent className="p-4 text-center">
                      <p className={`text-sm ${subTextColor}`}>{item.caption}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Additional Notes */}
        {additionalNotes && (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className={`text-2xl font-semibold ${textColor}`}>Additional Notes</h3>
              </div>
              <div className={`${subTextColor} text-lg leading-relaxed`}>
                <RichText data={additionalNotes} enableGutter={false} />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
