import React from 'react'
import { Metadata } from 'next'
import { RSVPForm } from '@/components/RSVPForm'

export const metadata: Metadata = {
  title: 'RSVP | James & Anne Wedding',
  description: 'Please respond to our wedding invitation',
}

export default function RSVPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="container mx-auto py-16">
        <RSVPForm />
      </div>
    </div>
  )
}
