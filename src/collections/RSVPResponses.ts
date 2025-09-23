import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const RSVPResponses: CollectionConfig = {
  slug: 'rsvp-responses',
  access: {
    create: anyone, // Allow guests to create responses
    delete: authenticated,
    read: authenticated, // Only authenticated users can read responses
    update: anyone, // Allow guests to update their responses
  },
  admin: {
    useAsTitle: 'guestName',
    defaultColumns: ['guestName', 'response', 'attendingCount', 'submittedAt'],
  },
  fields: [
    {
      name: 'guest',
      type: 'relationship',
      relationTo: 'rsvp-guests',
      required: true,
      label: 'Guest',
      admin: {
        description: 'The guest this response is for',
      },
    },
    {
      name: 'guestName',
      type: 'text',
      required: true,
      label: 'Guest Name',
      admin: {
        description: 'Name of the guest (copied from guest record for easier display)',
      },
    },
    {
      name: 'response',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Attending',
          value: 'attending',
        },
        {
          label: 'Not Attending',
          value: 'not_attending',
        },
      ],
      label: 'RSVP Response',
    },
    {
      name: 'attendingCount',
      type: 'number',
      required: false,
      min: 0,
      max: 10,
      label: 'Number Attending',
      admin: {
        description: 'How many people from their party will be attending',
        condition: (data) => data.response === 'attending',
      },
    },
    {
      name: 'dietaryRestrictions',
      type: 'textarea',
      label: 'Dietary Restrictions',
      admin: {
        description: 'Any dietary restrictions or special requests',
        condition: (data) => data.response === 'attending',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      admin: {
        description: 'Optional message from the guest',
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      label: 'Submitted At',
      admin: {
        description: 'When this RSVP was submitted',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Contact Email',
      admin: {
        description: 'Email address provided by the guest',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        // Set submission timestamp for new responses
        if (operation === 'create') {
          data.submittedAt = new Date()
        }
        return data
      },
    ],
  },
}
