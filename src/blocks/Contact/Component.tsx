'use client'

import React from 'react'
import { Mail, Phone } from 'lucide-react'

import type { ContactBlock as ContactBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

export const ContactBlock: React.FC<ContactBlockProps> = ({
  sectionTitle = 'Questions?',
  description,
  email,
  phone,
  backgroundColor = 'light',
}) => {
  const bgClass =
    backgroundColor === 'transparent'
      ? 'bg-transparent'
      : backgroundColor === 'lightGreen'
        ? 'bg-emerald-50'
        : backgroundColor === 'dark'
          ? 'bg-gray-900'
          : 'bg-white'

  return (
    <section className={`py-32 px-4 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        {sectionTitle && (
          <h3
            className={`text-2xl font-serif mb-6 ${backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            {sectionTitle}
          </h3>
        )}

        {description && (
          <div className={`mb-6 ${backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <RichText data={description} enableGutter={false} />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {email && (
            <a
              href={`mailto:${email}`}
              className={`hover:text-emerald-700 transition-colors flex items-center gap-2 ${
                backgroundColor === 'dark'
                  ? 'text-emerald-400 hover:text-emerald-300'
                  : 'text-emerald-600'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>
          )}

          {email && phone && (
            <span
              className={`hidden sm:block ${backgroundColor === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}
            >
              |
            </span>
          )}

          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className={`hover:text-emerald-700 transition-colors flex items-center gap-2 ${
                backgroundColor === 'dark'
                  ? 'text-emerald-400 hover:text-emerald-300'
                  : 'text-emerald-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
