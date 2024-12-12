import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Star } from 'lucide-react'
import { services, popularServices } from "@/lib/data"

export default function ServicesPage() {
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Services</h1>
        
        <div className="mb-8 flex gap-4">
          <div className="flex-grow">
            <Input placeholder="Search for a service..." />
          </div>
          <div className="w-1/3">
            <Input placeholder="Location" />
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Services</h2>
          <div className="flex flex-wrap gap-2">
            {popularServices.map((service) => (
              <Button key={service} variant="outline" size="sm">
                {service}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-2">Provider: {service.provider}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{service.location}</span>
                </div>
                <div className="flex items-center text-yellow-500 mb-4">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span>{service.rating}</span>
                </div>
                <p className="text-2xl font-bold">{service.price} TND</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/book/${service.id}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
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
