"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"admin" | "broker" | "client" | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const handleSignup = () => {
    setShowSignupModal(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
  }

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

      {/* Hero Section with Background Image */}
      <section className="hero-background min-h-screen flex items-center justify-center">
        <div className="hero-content text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Gradient Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              <span className="block text-white mb-2">Welcome to</span>
              <span className="block bg-gradient-to-r from-[#4aba9c] via-[#72adca] to-[#9bd1d9] bg-clip-text text-transparent animate-gradient bg-300% font-extrabold">
                Estature
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-2xl mx-auto">
              Your premier platform for buying, selling, and renting properties in the Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-white/30 hover:border-white/50">
                Explore Properties
              </button>
              <button className="px-8 py-4 rounded-2xl font-semibold text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 hover:border-white/50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section id="commercial" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#060f0c] mb-6">Commercial Properties</h2>
          <p className="text-lg text-[#060f0c]/70 max-w-3xl mx-auto">
            Discover premium commercial real estate opportunities for your business growth.
          </p>
        </div>
      </section>

      <section id="residential" className="py-20 bg-[#f4fbf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#060f0c] mb-6">Residential Homes</h2>
          <p className="text-lg text-[#060f0c]/70 max-w-3xl mx-auto">
            Find your perfect home with our extensive residential property listings.
          </p>
        </div>
      </section>

      <section id="broker" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#060f0c] mb-6">Broker Services</h2>
          <p className="text-lg text-[#060f0c]/70 max-w-3xl mx-auto">
            Professional broker services to help you navigate the real estate market.
          </p>
        </div>
      </section>

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal open={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  )
}