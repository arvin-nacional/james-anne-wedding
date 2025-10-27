'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

export const FAQBlock: React.FC<FAQBlockProps> = ({
  sectionTitle = 'Frequently Asked Questions',
  description,
  faqItems,
  backgroundColor = 'light',
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

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
  const hoverBgColor = backgroundColor === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'

  return (
    <section className={`py-24 px-4 ${bgClass}`} id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-16 h-px ${backgroundColor === 'dark' ? 'bg-white/50' : 'bg-emerald-300'}`}
            ></div>
            <HelpCircle
              className={`w-6 h-6 ${backgroundColor === 'dark' ? 'text-white' : 'text-emerald-400'}`}
            />
            <div
              className={`w-16 h-px ${backgroundColor === 'dark' ? 'bg-white/50' : 'bg-emerald-300'}`}
            ></div>
          </div>

          {sectionTitle && (
            <h2 className={`text-4xl font-serif mb-6 ${textColor}`}>{sectionTitle}</h2>
          )}

          {description && (
            <div className={`text-xl leading-relaxed max-w-3xl mx-auto ${subTextColor}`}>
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>

        {/* FAQ Items */}
        {faqItems && faqItems.length > 0 && (
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItems.has(index)

              return (
                <div
                  key={item.id || index}
                  className={`${cardBgColor} rounded-lg border ${borderColor} shadow-lg overflow-hidden transition-all duration-200 ${hoverBgColor}`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                    aria-expanded={isOpen}
                  >
                    <h3 className={`text-lg font-semibold pr-4 ${textColor}`}>{item.question}</h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp
                          className={`w-5 h-5 ${textColor} transition-transform duration-200`}
                        />
                      ) : (
                        <ChevronDown
                          className={`w-5 h-5 ${textColor} transition-transform duration-200`}
                        />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`px-6 pb-6 ${subTextColor}`}>
                      <div className="border-t border-gray-200 pt-4">
                        <RichText data={item.answer} enableGutter={false} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
