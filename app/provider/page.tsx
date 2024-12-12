import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function ProviderPage() {
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

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Become a Service Provider on SO&P</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join our network of skilled professionals and grow your business in Tunisia</p>
            <Button size="lg" asChild>
              <Link href="/provider/signup">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join SO&P?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    Expand Your Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Connect with customers across Tunisia looking for your services.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    Flexible Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Choose your own hours and work when it&apos;s convenient for you.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    Secure Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Get paid securely through our platform with multiple payment options.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 text-purple-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create your profile and list your services</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Requests</h3>
                <p className="text-gray-600">Receive job requests from clients in your area</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Complete Jobs</h3>
                <p className="text-gray-600">Provide excellent service to your clients</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
                <p className="text-gray-600">Receive secure payments for your work</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join SO&P today and start connecting with customers who need your services.</p>
            <Button size="lg" asChild>
              <Link href="/provider/signup">Become a Service Provider</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About SO&P</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">How it Works</Link></li>
                <li><Link href="#" className="hover:underline">Safety</Link></li>
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Providers</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Become a Provider</Link></li>
                <li><Link href="#" className="hover:underline">Provider Resources</Link></li>
                <li><Link href="#" className="hover:underline">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                <li><Link href="#" className="hover:underline">Facebook</Link></li>
                <li><Link href="#" className="hover:underline">Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 SO&P - Service On & Provide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
