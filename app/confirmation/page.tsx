import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { services } from "@/lib/data"

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const serviceId = typeof searchParams.service === 'string' ? parseInt(searchParams.service) : null
  const paymentMethod = typeof searchParams.payment === 'string' ? searchParams.payment : null

  const service = serviceId ? services.find(s => s.id === serviceId) : null

  if (!service || !paymentMethod) {
    return <div>Invalid booking information</div>
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
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <CardTitle className="text-2xl">Booking Confirmed</CardTitle>
            </div>
            <CardDescription>Thank you for your booking!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Service Details</h3>
              <p>Service: {service.name}</p>
              <p>Provider: {service.provider}</p>
              <p>Location: {service.location}</p>
              <p>Price: {service.price} TND</p>
            </div>
            <div>
              <h3 className="font-semibold">Payment Information</h3>
              <p>Payment Method: {paymentMethod}</p>
            </div>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to your registered email address. The service provider will contact you shortly to confirm the details of your appointment.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              For any questions or concerns, please contact our Tunisian customer support team at support@sop.tn.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/services">Book Another Service</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SO&P - Service On & Provide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

