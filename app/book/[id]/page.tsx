'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { MapPin, Star, Calendar, Clock } from 'lucide-react'
import { services } from "@/lib/data"

// Dummy data for services (same as in services page)
// const services = [
//   { id: 1, name: "House Cleaning", price: 50, location: "New York, NY", provider: "CleanPro Services", rating: 4.8 },
//   { id: 2, name: "Plumbing Repair", price: 80, location: "Los Angeles, CA", provider: "FixIt Plumbing", rating: 4.9 },
//   { id: 3, name: "Lawn Mowing", price: 40, location: "Chicago, IL", provider: "GreenThumb Landscaping", rating: 4.7 },
//   { id: 4, name: "Electrical Work", price: 90, location: "Houston, TX", provider: "Spark Electricians", rating: 4.8 },
//   { id: 5, name: "Painting", price: 60, location: "Phoenix, AZ", provider: "ColorMaster Painters", rating: 4.6 },
//   { id: 6, name: "Carpet Cleaning", price: 70, location: "Philadelphia, PA", provider: "FreshStep Cleaners", rating: 4.7 },
// ]

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState('')
  const service = services.find(s => s.id === parseInt(params.id))

  if (!service) {
    return <div>Service not found</div>
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (paymentMethod) {
      router.push(`/confirmation?service=${service.id}&payment=${paymentMethod}`)
    } else {
      alert('Please select a payment method')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">SO&P</Link>
          <nav className="space-x-4">
            <Link href="/services" className="text-sm font-medium hover:underline">Find Services</Link>
            <Link href="/provider" className="text-sm font-medium hover:underline">Become a Provider</Link>
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm">Sign Up</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Book Service</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.provider}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{service.location}</span>
              </div>
              <div className="flex items-center text-yellow-500 mb-4">
                <Star className="h-4 w-4 mr-2 fill-current" />
                <span>{service.rating}</span>
              </div>
              <p className="text-2xl font-bold mb-4">{service.price} TND</p>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Select a date</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Select a time</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking}>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit_card" id="credit_card" />
                    <Label htmlFor="credit_card">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d17" id="d17" />
                    <Label htmlFor="d17">D17</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flouci" id="flouci" />
                    <Label htmlFor="flouci">Flouci</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="edinar" id="edinar" />
                    <Label htmlFor="edinar">E-Dinar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash</Label>
                  </div>
                </RadioGroup>

                <Button type="submit" className="w-full mt-6">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SO&P - Service On & Provide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
