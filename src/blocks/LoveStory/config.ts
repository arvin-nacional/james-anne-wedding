import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const LoveStory: Block = {
  slug: 'loveStory',
  interfaceName: 'LoveStoryBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Our Love Story',
      admin: {
        description: 'Main section title (e.g., "Our Love Story", "About Us")',
      },
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Optional subtitle below the section title',
      },
    },
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
      name: 'content',
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
        description: 'Your love story content - can include multiple paragraphs',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Main image for the love story section',
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      admin: {
        description: 'Alt text for the image (for accessibility)',
      },
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'imageRight',
      options: [
        {
          label: 'Image on Right',
          value: 'imageRight',
        },
        {
          label: 'Image on Left',
          value: 'imageLeft',
        },
      ],
      admin: {
        description: 'Choose whether the image appears on the left or right side',
      },
    },
  ],
  labels: {
    plural: 'Love Story Sections',
    singular: 'Love Story Section',
  },
}
