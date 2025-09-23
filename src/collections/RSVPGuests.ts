import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const RSVPGuests: CollectionConfig = {
  slug: 'rsvp-guests',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'partySize', 'isInvited'],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
      admin: {
        description: 'The full name of the guest as it appears on the invitation',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      admin: {
        description: 'Optional email address for the guest',
      },
    },
    {
      name: 'partySize',
      type: 'number',
      required: true,
      defaultValue: 1,
      min: 1,
      max: 10,
      label: 'Party Size',
      admin: {
        description: "Number of people in this guest's party (including the guest)",
      },
    },
    {
      name: 'isInvited',
      type: 'checkbox',
      defaultValue: true,
      label: 'Is Invited',
      admin: {
        description: 'Whether this guest is currently invited to the wedding',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notes',
      admin: {
        description: 'Any additional notes about this guest (dietary restrictions, etc.)',
      },
    },
  ],
}
