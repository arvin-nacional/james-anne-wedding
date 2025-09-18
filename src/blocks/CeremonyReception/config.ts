import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CeremonyReception: Block = {
  slug: 'ceremonyReception',
  interfaceName: 'CeremonyReceptionBlock',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'transparent',
      options: [
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
    {
      name: 'ceremony',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'The Ceremony',
          admin: {
            description: 'Title for the ceremony section',
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
            description: 'Description of the ceremony',
          },
        },
        {
          name: 'timeRange',
          type: 'text',
          admin: {
            description: 'Time range for the ceremony (e.g., "4:00 PM - 4:30 PM")',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Image for the ceremony section',
          },
        },
        {
          name: 'imageAlt',
          type: 'text',
          admin: {
            description: 'Alt text for the ceremony image (for accessibility)',
          },
        },
      ],
      admin: {
        description: 'Ceremony details and content',
      },
    },
    {
      name: 'reception',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'The Reception',
          admin: {
            description: 'Title for the reception section',
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
            description: 'Description of the reception',
          },
        },
        {
          name: 'timeRange',
          type: 'text',
          admin: {
            description: 'Time range for the reception (e.g., "6:00 PM - 11:00 PM")',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Image for the reception section',
          },
        },
        {
          name: 'imageAlt',
          type: 'text',
          admin: {
            description: 'Alt text for the reception image (for accessibility)',
          },
        },
      ],
      admin: {
        description: 'Reception details and content',
      },
    },
  ],
  labels: {
    plural: 'Ceremony & Reception Sections',
    singular: 'Ceremony & Reception Section',
  },
}
