'use client'

import React, { useState } from 'react'
import { Search, Heart, Check, X, Users, Mail, MessageSquare, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface Guest {
  id: string
  fullName: string
  email?: string
  partySize: number
  isInvited: boolean
  notes?: string
}

interface RSVPFormProps {
  className?: string
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ className = '' }) => {
  const [searchName, setSearchName] = useState('')
  const [foundGuests, setFoundGuests] = useState<Guest[]>([])
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)
  const [searchError, setSearchError] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  // Form state
  const [response, setResponse] = useState<'attending' | 'not_attending' | ''>('')
  const [attendingCount, setAttendingCount] = useState(1)
  const [dietaryRestrictions, setDietaryRestrictions] = useState('')
  const [message, setMessage] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const searchGuest = async () => {
    if (!searchName.trim()) {
      setSearchError('Please enter a name to search')
      return
    }

    setIsSearching(true)
    setSearchError('')
    setFoundGuests([])
    setSelectedGuest(null)

    try {
      const response = await fetch(
        `/api/rsvp-guests?where[fullName][contains]=${encodeURIComponent(searchName.trim())}`,
      )
      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        // Filter only invited guests
        const invitedGuests = data.docs.filter((guest: Guest) => guest.isInvited)

        if (invitedGuests.length === 0) {
          setSearchError(
            'We could not find your name on our guest list. Please contact us if you believe this is an error.',
          )
        } else if (invitedGuests.length === 1) {
          // Only one match, select it automatically
          const guest = invitedGuests[0]
          setSelectedGuest(guest)
          setAttendingCount(guest.partySize)
          setContactEmail(guest.email || '')
        } else {
          // Multiple matches, let user choose
          setFoundGuests(invitedGuests)
        }
      } else {
        setSearchError(
          'We could not find your name on our guest list. Please check the spelling and try again.',
        )
      }
    } catch (error) {
      setSearchError('There was an error searching for your name. Please try again.')
      console.error('Search error:', error)
    } finally {
      setIsSearching(false)
    }
  }

  const selectGuest = (guest: Guest) => {
    setSelectedGuest(guest)
    setFoundGuests([])
    setAttendingCount(guest.partySize)
    setContactEmail(guest.email || '')
  }

  const submitRSVP = async () => {
    if (!selectedGuest || !response) return

    setIsSubmitting(true)

    try {
      const rsvpData = {
        guest: selectedGuest.id,
        guestName: selectedGuest.fullName,
        response,
        attendingCount: response === 'attending' ? attendingCount : 0,
        dietaryRestrictions: response === 'attending' ? dietaryRestrictions : '',
        message,
        contactEmail,
      }

      const submitResponse = await fetch('/api/rsvp-responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData),
      })

      if (submitResponse.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit RSVP')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('There was an error submitting your RSVP. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSearchName('')
    setFoundGuests([])
    setSelectedGuest(null)
    setSearchError('')
    setResponse('')
    setAttendingCount(1)
    setDietaryRestrictions('')
    setMessage('')
    setContactEmail('')
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className={`max-w-2xl mx-auto p-8 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-serif text-gray-800 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your RSVP has been received. We&apos;re{' '}
            {response === 'attending' ? 'excited to celebrate with you' : "sorry you can't make it"}
            .
          </p>
          <Button onClick={resetForm} variant="outline">
            Submit Another RSVP
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`max-w-2xl mx-auto p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 h-px bg-emerald-300"></div>
          <Heart className="w-6 h-6 text-emerald-400 fill-emerald-400" />
          <div className="w-16 h-px bg-emerald-300"></div>
        </div>
        <h2 className="text-4xl font-serif text-gray-800 mb-4">RSVP</h2>
        <p className="text-lg text-gray-600">
          Please search for your name below to respond to our invitation
        </p>
      </div>

      {!selectedGuest ? (
        <div className="space-y-6">
          <div>
            <Label htmlFor="search-name" className="text-lg font-medium text-gray-700 mb-2 block">
              Search for your name
            </Label>
            <div className="flex gap-3">
              <Input
                id="search-name"
                type="text"
                placeholder="Enter your full name as it appears on the invitation"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchGuest()}
                className="flex-1 text-lg py-3"
              />
              <Button
                onClick={searchGuest}
                disabled={isSearching}
                className="bg-emerald-500 hover:bg-emerald-600 px-6"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </Button>
            </div>
            {searchError && <p className="text-red-600 mt-2 text-sm">{searchError}</p>}
          </div>

          {/* Multiple Guests Found */}
          {foundGuests.length > 1 && (
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Multiple guests found - Please select your name:
              </h3>
              <div className="space-y-3">
                {foundGuests.map((guest) => (
                  <button
                    key={guest.id}
                    onClick={() => selectGuest(guest)}
                    className="w-full text-left p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{guest.fullName}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <Users className="w-4 h-4" />
                          <span>Party of {guest.partySize}</span>
                          {guest.email && (
                            <>
                              <span>•</span>
                              <span>{guest.email}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-gray-400 rotate-[-90deg]" />
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Don't see your name? Try searching with your full name as it appears on the
                invitation.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          {/* Guest Selected */}
          <div className="bg-emerald-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Check className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-semibold text-gray-800">Guest Found!</h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Name:</strong> {selectedGuest.fullName}
              </p>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>
                  Party size: {selectedGuest.partySize}{' '}
                  {selectedGuest.partySize === 1 ? 'person' : 'people'}
                </span>
              </div>
            </div>
            <Button
              onClick={() => setSelectedGuest(null)}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Search for a different name
            </Button>
          </div>

          {/* RSVP Response */}
          <div>
            <Label className="text-lg font-medium text-gray-700 mb-4 block">
              Will you be attending our wedding?
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={response === 'attending' ? 'default' : 'outline'}
                onClick={() => setResponse('attending')}
                className={`py-6 text-lg ${
                  response === 'attending'
                    ? 'bg-emerald-500 hover:bg-emerald-600'
                    : 'border-emerald-300 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Check className="w-5 h-5 mr-2" />
                Yes, I'll be there!
              </Button>
              <Button
                variant={response === 'not_attending' ? 'default' : 'outline'}
                onClick={() => setResponse('not_attending')}
                className={`py-6 text-lg ${
                  response === 'not_attending'
                    ? 'bg-gray-500 hover:bg-gray-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <X className="w-5 h-5 mr-2" />
                Sorry, can't make it
              </Button>
            </div>
          </div>

          {/* Additional Fields for Attending */}
          {response === 'attending' && (
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="attending-count"
                  className="text-lg font-medium text-gray-700 mb-2 block"
                >
                  How many people will be attending?
                </Label>
                <Input
                  id="attending-count"
                  type="number"
                  min="1"
                  max={selectedGuest.partySize}
                  value={attendingCount}
                  onChange={(e) => setAttendingCount(parseInt(e.target.value) || 1)}
                  className="w-32 text-lg py-3"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Maximum {selectedGuest.partySize}{' '}
                  {selectedGuest.partySize === 1 ? 'person' : 'people'} based on your invitation
                </p>
              </div>

              <div>
                <Label
                  htmlFor="dietary-restrictions"
                  className="text-lg font-medium text-gray-700 mb-2 block"
                >
                  Dietary restrictions or special requests
                </Label>
                <Textarea
                  id="dietary-restrictions"
                  placeholder="Please let us know about any dietary restrictions, allergies, or special requests..."
                  value={dietaryRestrictions}
                  onChange={(e) => setDietaryRestrictions(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          )}

          {/* Contact Email */}
          <div>
            <Label htmlFor="contact-email" className="text-lg font-medium text-gray-700 mb-2 block">
              <Mail className="w-4 h-4 inline mr-2" />
              Email address
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="your.email@example.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="text-lg py-3"
            />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2 block">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Message for the couple (optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Share your excitement, well wishes, or any questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              onClick={submitRSVP}
              disabled={!response || isSubmitting}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : null}
              Submit RSVP
            </Button>
            <Button onClick={resetForm} variant="outline" className="px-6 py-4">
              Start Over
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
