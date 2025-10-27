import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Questions?',
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
        description: 'Description text for the contact section',
      },
    },
    {
      name: 'messengerLink',
      type: 'text',
      admin: {
        description:
          'Facebook Messenger link (e.g., "https://m.me/username" or "https://www.messenger.com/t/username")',
      },
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Contact phone number (e.g., "(123) 456-7890")',
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
      ],
      admin: {
        description: 'Choose the background style for this section',
      },
    },
  ],
  labels: {
    plural: 'Contact Sections',
    singular: 'Contact Section',
  },
}
