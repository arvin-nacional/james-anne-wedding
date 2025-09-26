import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const WeddingDetails: Block = {
  slug: 'weddingDetails',
  interfaceName: 'WeddingDetailsBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Wedding Details',
      admin: {
        description: 'Main section title',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Everything you need to know about our special day',
      admin: {
        description: 'Subtitle below the main title',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'light',
      options: [
        {
          label: 'Light Background',
          value: 'light',
        },
        {
          label: 'Light Green Background',
          value: 'lightGreen',
        },
        {
          label: 'Transparent',
          value: 'transparent',
        },
        {
          label: 'Dark Background',
          value: 'dark',
        },
        {
          label: 'Background Image with Green Overlay',
          value: 'image',
        },
      ],
      admin: {
        description: 'Choose the background style for this section',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          'Background image for the section (only used when "Background Image with Green Overlay" is selected)',
        condition: (data, siblingData) => siblingData?.backgroundColor === 'image',
      },
    },
    {
      name: 'details',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'calendar',
          options: [
            {
              label: 'Calendar (Date)',
              value: 'calendar',
            },
            {
              label: 'Clock (Time)',
              value: 'clock',
            },
            {
              label: 'Map Pin (Location)',
              value: 'mapPin',
            },
          ],
          admin: {
            description: 'Choose an icon for this detail card',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Card title (e.g., "Save the Date", "Ceremony Time")',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            description: 'Small text above main text (e.g., "Saturday", "Begins at")',
          },
        },
        {
          name: 'mainText',
          type: 'text',
          required: true,
          admin: {
            description: 'Main prominent text (e.g., "June 15th, 2024", "4:00 PM")',
          },
        },
        {
          name: 'description',
          type: 'richText',
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
            description: 'Optional additional description or details',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Optional image for the card header',
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
          name: 'venueLink',
          type: 'text',
          admin: {
            description: 'Optional venue link (e.g., Google Maps link for location cards)',
            condition: (data, siblingData) => siblingData?.icon === 'mapPin',
          },
        },
      ],
      admin: {
        description: 'Add wedding detail cards (date, time, location, etc.)',
      },
    },
  ],
  labels: {
    plural: 'Wedding Details Sections',
    singular: 'Wedding Details Section',
  },
}
