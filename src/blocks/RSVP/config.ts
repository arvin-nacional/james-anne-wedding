import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const RSVP: Block = {
  slug: 'rsvp',
  interfaceName: 'RSVPBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Join Our Celebration',
      admin: {
        description: 'Main section title',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      admin: {
        description: 'Description text for the RSVP section',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional image for the RSVP section (e.g., wedding invitation)',
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      admin: {
        description: 'Alt text for the image (for accessibility)',
        condition: (data, siblingData) => Boolean(siblingData?.image),
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'RSVP Now',
      required: true,
      admin: {
        description: 'Text for the RSVP button',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      defaultValue: '/rsvp',
      required: true,
      admin: {
        description: 'Link for the RSVP button (e.g., "/rsvp" or external URL)',
      },
    },
    {
      name: 'deadlineText',
      type: 'text',
      admin: {
        description: 'Optional deadline text (e.g., "Please respond by May 1st, 2024")',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'gradient',
      options: [
        {
          label: 'Gradient (Emerald to Green)',
          value: 'gradient',
        },
        {
          label: 'Transparent',
          value: 'transparent',
        },
        {
          label: 'Light Background',
          value: 'light',
        },
        {
          label: 'Light Green Background',
          value: 'lightGreen',
        },
        {
          label: 'Dark Background',
          value: 'dark',
        },
      ],
      admin: {
        description: 'Choose the background style for this section',
      },
    },
  ],
  labels: {
    plural: 'RSVP Sections',
    singular: 'RSVP Section',
  },
}
