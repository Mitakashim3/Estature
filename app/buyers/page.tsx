"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../../components/Navbar"
import LoginModal from "../../components/LoginModal"
import SignupModal from "../../components/SignupModal"
import { Search, MapPin, Heart, Calculator, Shield, Users, Star, ArrowRight } from "lucide-react"

export default function BuyersPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"admin" | "broker" | "client" | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const router = useRouter()

  const handleLogin = () => setShowLoginModal(true)
  const handleSignup = () => setShowSignupModal(true)
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
  }

  const navigateToSearch = () => router.push("/search")

  return (
    <div className="min-h-screen">
      <Navbar
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        userName="John Doe"
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
      />

      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center justify-center">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Find Your
              <span className="block bg-gradient-to-r from-[#4aba9c] via-[#72adca] to-[#9bd1d9] bg-clip-text text-transparent animate-gradient bg-300% font-extrabold">
                Dream Home
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-3xl mx-auto">
              Discover thousands of verified properties across the Philippines. From condos to house & lots, find the
              perfect home for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={navigateToSearch}
                className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-white/30 hover:border-white/50"
              >
                <Search className="w-5 h-5 inline mr-2" />
                Start Property Search
              </button>
              <button className="px-8 py-4 rounded-2xl font-semibold text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 hover:border-white/50">
                <Calculator className="w-5 h-5 inline mr-2" />
                Mortgage Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Estature for Buyers */}
      <section className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">Why Buyers Choose Estature</h2>
            <p className="text-lg text-[#060f0c]/70 max-w-2xl mx-auto">
              We make property hunting simple, secure, and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Verified Listings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Verified Listings</h3>
              <p className="text-[#060f0c]/70">
                All properties are verified by our team. No fake listings, no wasted time.
              </p>
            </div>

            {/* Smart Search */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#72adca] to-[#9bd1d9] flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Smart Search</h3>
              <p className="text-[#060f0c]/70">
                Advanced filters help you find exactly what you're looking for in minutes.
              </p>
            </div>

            {/* Expert Support */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9bd1d9] to-[#4aba9c] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Expert Support</h3>
              <p className="text-[#060f0c]/70">
                Get guidance from certified real estate professionals throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">Popular Property Types</h2>
            <p className="text-lg text-[#060f0c]/70">Find the perfect property type for your lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Condominiums", count: "2,450+", icon: "🏢", desc: "Modern living in the city" },
              { name: "House & Lot", count: "3,200+", icon: "🏠", desc: "Perfect for growing families" },
              { name: "Townhouses", count: "1,800+", icon: "🏘️", desc: "Community living with privacy" },
              { name: "Lots", count: "950+", icon: "🌳", desc: "Build your dream home" },
            ].map((type, index) => (
              <div
                key={index}
                className="bg-[#f4fbf9] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-[#060f0c] mb-2">{type.name}</h3>
                <p className="text-[#4aba9c] font-semibold mb-2">{type.count} listings</p>
                <p className="text-sm text-[#060f0c]/70">{type.desc}</p>
                <ArrowRight className="w-5 h-5 text-[#4aba9c] mt-3 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Tools */}
      <section className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">Buyer Tools & Resources</h2>
            <p className="text-lg text-[#060f0c]/70">Everything you need to make informed decisions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mortgage Calculator */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Mortgage Calculator</h3>
                  <p className="text-[#060f0c]/70 mb-4">Calculate your monthly payments and see what you can afford.</p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    Try Calculator →
                  </button>
                </div>
              </div>
            </div>

            {/* Neighborhood Guide */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#72adca] to-[#9bd1d9] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Neighborhood Guide</h3>
                  <p className="text-[#060f0c]/70 mb-4">
                    Explore schools, amenities, and lifestyle in different areas.
                  </p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    Explore Areas →
                  </button>
                </div>
              </div>
            </div>

            {/* Saved Properties */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9bd1d9] to-[#4aba9c] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Save Favorites</h3>
                  <p className="text-[#060f0c]/70 mb-4">
                    Create lists of your favorite properties and compare them easily.
                  </p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    Start Saving →
                  </button>
                </div>
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4aba9c] to-[#9bd1d9] flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Market Insights</h3>
                  <p className="text-[#060f0c]/70 mb-4">Get the latest market trends and property value insights.</p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    View Insights →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4aba9c] to-[#72adca]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of happy homeowners who found their perfect property through Estature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToSearch}
              className="px-8 py-4 rounded-2xl font-semibold text-[#4aba9c] bg-white hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Search Now
            </button>
            <button
              onClick={handleSignup}
              className="px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white hover:bg-white hover:text-[#4aba9c] transition-all duration-300"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal open={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  )
}
