import type { Block } from 'payload'

export const DressCode: Block = {
  slug: 'dressCode',
  interfaceName: 'DressCodeBlock',
  labels: {
    singular: 'Dress Code Block',
    plural: 'Dress Code Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Dress Code',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      admin: {
        description: 'Optional description about the dress code',
      },
    },
    {
      name: 'dressCodeType',
      type: 'select',
      label: 'Dress Code Type',
      defaultValue: 'cocktail',
      options: [
        {
          label: 'Casual',
          value: 'casual',
        },
        {
          label: 'Cocktail Attire',
          value: 'cocktail',
        },
        {
          label: 'Semi-Formal',
          value: 'semiformal',
        },
        {
          label: 'Formal',
          value: 'formal',
        },
        {
          label: 'Black Tie',
          value: 'blacktie',
        },
        {
          label: 'White Tie',
          value: 'whitetie',
        },
        {
          label: 'Beach Formal',
          value: 'beachformal',
        },
        {
          label: 'Garden Party',
          value: 'gardenparty',
        },
      ],
    },
    {
      name: 'groomsmenAttire',
      type: 'group',
      label: 'Groomsmen Attire',
      fields: [
        {
          name: 'guidelines',
          type: 'richText',
          label: 'Groomsmen Guidelines',
          admin: {
            description: 'Detailed guidelines for groomsmen attire',
          },
        },
        {
          name: 'referenceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Reference Image',
          admin: {
            description: 'Reference image for groomsmen attire',
          },
        },
      ],
    },
    {
      name: 'bridesmaidsAttire',
      type: 'group',
      label: 'Bridesmaids Attire',
      fields: [
        {
          name: 'guidelines',
          type: 'richText',
          label: 'Bridesmaids Guidelines',
          admin: {
            description: 'Detailed guidelines for bridesmaids attire',
          },
        },
        {
          name: 'referenceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Reference Image',
          admin: {
            description: 'Reference image for bridesmaids attire',
          },
        },
      ],
    },
    {
      name: 'menAttire',
      type: 'group',
      label: "Men's Attire (Guests)",
      fields: [
        {
          name: 'guidelines',
          type: 'richText',
          label: "Men's Attire Guidelines",
          admin: {
            description: "Detailed guidelines for male guests' attire",
          },
        },
        {
          name: 'referenceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Reference Image',
          admin: {
            description: "Reference image for men's guest attire",
          },
        },
      ],
    },
    {
      name: 'womenAttire',
      type: 'group',
      label: "Women's Attire (Guests)",
      fields: [
        {
          name: 'guidelines',
          type: 'richText',
          label: "Women's Attire Guidelines",
          admin: {
            description: "Detailed guidelines for female guests' attire",
          },
        },
        {
          name: 'referenceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Reference Image',
          admin: {
            description: "Reference image for women's guest attire",
          },
        },
      ],
    },
    {
      name: 'sponsorsAttire',
      type: 'group',
      label: 'Sponsors Attire',
      fields: [
        {
          name: 'guidelines',
          type: 'richText',
          label: 'Sponsors Attire Guidelines',
          admin: {
            description: 'Detailed guidelines for sponsors attire',
          },
        },
        {
          name: 'referenceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Reference Image',
          admin: {
            description: 'Reference image for sponsors attire',
          },
        },
      ],
    },
    {
      name: 'colorPalette',
      type: 'richText',
      label: 'Recommended Colors',
      admin: {
        description: 'Colors that complement the wedding theme',
      },
    },
    {
      name: 'avoidColors',
      type: 'richText',
      label: 'Colors to Avoid',
      admin: {
        description: 'Colors guests should avoid wearing',
      },
    },
    {
      name: 'additionalNotes',
      type: 'richText',
      label: 'Additional Notes',
      admin: {
        description: 'Any additional information or special considerations',
      },
    },
    {
      name: 'showcaseImages',
      type: 'array',
      label: 'Style Inspiration Images',
      admin: {
        description: 'Gallery of style inspiration images for guests',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
          admin: {
            description: 'Optional caption for the image',
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
    },
  ],
}
