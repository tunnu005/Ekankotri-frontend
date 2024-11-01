'use client'

import React, { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
import { Label } from '@radix-ui/react-context-menu'

export default function WeddingPlannerForm() {

  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [weddingDetails, setWeddingDetails] = useState({
    weddingDate: '',
    brideName: '',
    groomName: '',
    story: '',
    location: ''
  })
  const [events, setEvents] = useState([{ date: '', name: '', description: '' }])
  const [locationUrl, setLocationUrl] = useState('')
  
  // New states for image upload and preview
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const [invitedBy, setInvitees] = useState([''])

  const handleWeddingDetailsChange = (e) => {
    setWeddingDetails({ ...weddingDetails, [e.target.name]: e.target.value })
  }

  const handleEventChange = (index, field, value) => {
    const newEvents = [...events]
    newEvents[index][field] = value
    setEvents(newEvents)
  }

  const addEvent = () => {
    setEvents([...events, { date: '', name: '', description: '' }])
  }

  const removeEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index)
    setEvents(newEvents)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log(file)
      // sessionStorage.setItem('image', file)
      setImage(file)

      // Generate image preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
        // sessionStorage.setItem('imagep', JSON.stringify(reader.result))
      }
      reader.readAsDataURL(file)
    }
  }

  const addInvitee = () => {
    setInvitees([...invitedBy, ''])
  }

  const removeInvitee = (index) => {
    const newInvitees = invitedBy.filter((_, i) => i !== index)
    setInvitees(newInvitees)
  }

  const handleInviteeChange = (index, value) => {
    const newInvitees = [...invitedBy]
    newInvitees[index] = value
    setInvitees(newInvitees)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      weddingDetails,
      events,
      locationUrl,
      // image: sessionStorage.getItem('image')
      photo: imagePreview,
      invitedBy
    }
    console.log(data)

    sessionStorage.setItem('data',JSON.stringify(data))
    // console.log('Form submitted:', { weddingDetails, events, locationUrl, image })
    // sessionStorage.setItem('weddingDetails', JSON.stringify(weddingDetails))
    // sessionStorage.setItem('events', JSON.stringify(events))
    // sessionStorage.setItem('locationUrl', locationUrl)
    // sessionStorage.setItem('mode', "1")

    // const modeId = sessionStorage.getItem('modeId')

    navigate('/preview')

    // Here you would typically send this data to your backend
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Wedding Planner</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              {/* Step 1: Wedding Details */}
              <div>
                <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700">Wedding Date</label>
                <Input
                  id="weddingDate"
                  type="date"
                  name="weddingDate"
                  value={weddingDetails.weddingDate}
                  onChange={handleWeddingDetailsChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="brideName" className="block text-sm font-medium text-gray-700">Bride's Name</label>
                <Input
                  id="brideName"
                  name="brideName"
                  value={weddingDetails.brideName}
                  onChange={handleWeddingDetailsChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="groomName" className="block text-sm font-medium text-gray-700">Groom's Name</label>
                <Input
                  id="groomName"
                  name="groomName"
                  value={weddingDetails.groomName}
                  onChange={handleWeddingDetailsChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="story" className="block text-sm font-medium text-gray-700">Story</Label>
                <Textarea
                  id="story"
                  name="story"
                  value={weddingDetails.story}
                  onChange={handleWeddingDetailsChange}
                  className="mt-1"
                  required
                  maxLength = {200}
                />
                 <div className="text-sm text-gray-600">
                      {weddingDetails.story.length} / 200 characters
                    </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Wedding Location</label>
                <Input
                  id="location"
                  name="location"
                  value={weddingDetails.location}
                  onChange={handleWeddingDetailsChange}
                  className="mt-1"
                  required
                />
              </div>
              <Button type="button" onClick={() => setStep(2)} className="w-full">Next</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {/* Step 2: Event Details */}
              {events.map((event, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor={`eventDate-${index}`} className="block text-sm font-medium text-gray-700">Event Date</label>
                      <Input
                        id={`eventDate-${index}`}
                        type="date"
                        value={event.date}
                        onChange={(e) => handleEventChange(index, 'date', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor={`eventName-${index}`} className="block text-sm font-medium text-gray-700">Event Name</label>
                      <Input
                        id={`eventName-${index}`}
                        value={event.name}
                        onChange={(e) => handleEventChange(index, 'name', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor={`eventDescription-${index}`} className="block text-sm font-medium text-gray-700">Event Description</label>
                      <Textarea
                        id={`eventDescription-${index}`}
                        value={event.description}
                        onChange={(e) => handleEventChange(index, 'description', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    {events.length > 1 && (
                      <Button type="button" variant="destructive" onClick={() => removeEvent(index)} className="mt-2">
                        <Trash2 className="mr-2 h-4 w-4" /> Remove Event
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
              <Button type="button" onClick={addEvent} variant="outline" className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Event
              </Button>
              {/* Invitees Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Invitees</label>
                {invitedBy.map((invitee, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={invitee}
                      onChange={(e) => handleInviteeChange(index, e.target.value)}
                      className="mt-1"
                      placeholder="Invitee Name"
                      required
                    />
                    {invitedBy.length > 1 && (
                      <Button type="button" variant="destructive" onClick={() => removeInvitee(index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" onClick={addInvitee} variant="outline" className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Invitee
                </Button>
              </div>
              <div className="flex justify-between">
                <Button type="button" onClick={() => setStep(1)} variant="outline">Previous</Button>
                <Button type="button" onClick={() => setStep(3)}>Next</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              {/* Step 3: Location URL and Image Upload */}
              <div>
                <label htmlFor="locationUrl" className="block text-sm font-medium text-gray-700">Location URL</label>
                <Input
                  id="locationUrl"
                  type="url"
                  value={locationUrl}
                  onChange={(e) => setLocationUrl(e.target.value)}
                  className="mt-1"
                  placeholder="https://..."
                  required
                />
              </div>

              <div>
                <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Upload Wedding Image</label>
                <Input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1"
                />
              </div>

              {/* Image Preview */}
              {imagePreview && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Image Preview</label>
                  <img src={imagePreview} alt="Wedding Preview" className="mt-2 max-w-xs" />
                </div>
              )}

              <div className="flex justify-between">
                <Button type="button" onClick={() => setStep(2)} variant="outline">Previous</Button>
                <Button type="submit" onClick={(e)=>{handleSubmit(e);}}>Submit</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </form>
  )
}
