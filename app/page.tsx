import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function Home() {
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
            <h1 className="text-5xl font-bold mb-6">Find Local Services in Tunisia</h1>
            <p className="text-xl mb-8">Connect with trusted service providers across Tunisia</p>
            <div className="max-w-md mx-auto flex">
              <Input placeholder="What service do you need?" className="rounded-r-none" />
              <Button size="lg" className="rounded-l-none">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How SO&P Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1a237e] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Browse Services</h3>
                <p>Explore a wide range of services offered by local Tunisian providers</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose a Provider</h3>
                <p className="text-gray-600">Compare profiles, reviews, and prices.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Get It Done</h3>
                <p className="text-gray-600">Your provider arrives and completes your task.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Home Cleaning', 'Handyman', 'Moving', 'Plumbing', 'Electrical', 'Painting', 'Lawn Care', 'Pest Control'].map((service) => (
                <Button key={service} variant="outline" className="h-auto py-4 px-6 text-lg font-medium">
                  {service}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to offer your services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join our network of skilled professionals and grow your business.</p>
            <Button size="lg" asChild>
              <Link href="/provider">Become a Service Provider</Link>
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
            <p>&copy; 2024 SO&P - Service On & Provide. All rights reserved. Serving Tunisia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
