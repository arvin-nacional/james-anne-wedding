import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Frequently Asked Questions',
      admin: {
        description: 'Main section title for the FAQ section',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
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
        description: 'Optional description about the FAQs',
      },
    },
    {
      name: 'faqItems',
      type: 'array',
      label: 'FAQ Items',
      minRows: 1,
      admin: {
        description: 'List of frequently asked questions and answers',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
          admin: {
            description: 'The question being asked',
          },
        },
        {
          name: 'answer',
          type: 'richText',
          label: 'Answer',
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
            description: 'The answer to the question',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'light',
      options: [
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Light Green',
          value: 'lightGreen',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Transparent',
          value: 'transparent',
        },
        {
          label: 'Gradient',
          value: 'gradient',
        },
      ],
      admin: {
        description: 'Choose the background style for this section',
      },
    },
  ],
}
