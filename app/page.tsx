"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import LoginModal from "@/components/LoginModal"
import SignupModal from "@/components/SignupModal"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"buyer" | "seller" | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [userName, setUserName] = useState("John Doe")
  const router = useRouter()

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const handleSignup = () => {
    setShowSignupModal(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
    setUserName("John Doe")
  }

  const handleSignupSuccess = (user: any) => {
    setIsLoggedIn(true)
    let mappedRole: "buyer" | "seller" | null = null
    if (user.role === "buyer") mappedRole = "buyer"
    else if (user.role === "seller") mappedRole = "seller"
    setUserRole(mappedRole)
    setUserName(user.name || "User")
  }

  const handleLoginSuccess = (user: any) => {
    setIsLoggedIn(true)
    let mappedRole: "buyer" | "seller" | null = null
    if (user.role === "buyer") mappedRole = "buyer"
    else if (user.role === "seller") mappedRole = "seller"
    setUserRole(mappedRole)
    setUserName(user.name || "User")
  }

  const navigateToSearch = () => {
    router.push("/search")
  }

  const navigateToBuyers = () => {
    router.push("/buyers")
  }

  const navigateToSellers = () => {
    router.push("/sellers")
  }

  const handleExploreProperties = () => {
    if (isLoggedIn && userRole === "buyer") {
      navigateToSearch()
    } else if (isLoggedIn && userRole === "seller") {
      navigateToSellers()
    } else {
      navigateToSearch()
    }
  }

  const handleLearnMore = () => {
    if (isLoggedIn && userRole === "buyer") {
      navigateToBuyers()
    } else if (isLoggedIn && userRole === "seller") {
      navigateToSellers()
    } else {
      // Scroll to the "What are you looking for?" section
      document.getElementById("user-type-selection")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        userName={userName}
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

            {/* Dynamic subtitle based on user role */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-2xl mx-auto">
              {isLoggedIn && userRole === "buyer"
                ? "Find your dream home from thousands of verified properties across the Philippines."
                : isLoggedIn && userRole === "seller"
                  ? "List your property and connect with serious buyers through our premium platform."
                  : "Your premier platform for buying, selling, and renting properties in the Philippines."}
            </p>

            {/* Dynamic CTAs based on user role */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExploreProperties}
                className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-white/30 hover:border-white/50"
              >
                {isLoggedIn && userRole === "buyer"
                  ? "Search Properties"
                  : isLoggedIn && userRole === "seller"
                    ? "Manage Listings"
                    : "Explore Properties"}
              </button>
              <button
                onClick={handleLearnMore}
                className="px-8 py-4 rounded-2xl font-semibold text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                {isLoggedIn && userRole === "buyer"
                  ? "Buyer Tools"
                  : isLoggedIn && userRole === "seller"
                    ? "Seller Resources"
                    : "Learn More"}
              </button>
            </div>

            {/* Welcome message for logged-in users */}
            {isLoggedIn && (
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="text-white/90">
                  Welcome back, <span className="font-semibold">{userName}</span>!
                  {userRole === "buyer" && " Ready to find your perfect home?"}
                  {userRole === "seller" && " Let's get your property noticed by thousands of buyers."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* User Type Selection - Only show if not logged in */}
      {!isLoggedIn && (
        <section id="user-type-selection" className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#060f0c] mb-4">What are you looking for?</h2>
              <p className="text-lg text-[#060f0c]/70">Choose your path to find the perfect property solution</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Buyers */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#060f0c] mb-4">For Buyers</h3>
                  <p className="text-[#060f0c]/70 mb-6">
                    Find your dream home from thousands of verified listings across the Philippines.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={navigateToBuyers}
                      className="w-full px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-[#4aba9c] to-[#72adca] text-white hover:from-[#3a9d82] hover:to-[#5a94b3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Start Searching
                    </button>
                    <button
                      onClick={navigateToSearch}
                      className="w-full px-6 py-3 rounded-xl font-medium text-[#4aba9c] border border-[#4aba9c] hover:bg-[#4aba9c] hover:text-white transition-all duration-300"
                    >
                      Browse Properties
                    </button>
                  </div>
                </div>
              </div>

              {/* For Sellers */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#72adca] to-[#9bd1d9] flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#060f0c] mb-4">For Sellers</h3>
                  <p className="text-[#060f0c]/70 mb-6">
                    List your property and connect with serious buyers through our platform.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={navigateToSellers}
                      className="w-full px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-[#72adca] to-[#9bd1d9] text-white hover:from-[#5a94b3] hover:to-[#7bb8c4] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      List Property
                    </button>
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className="w-full px-6 py-3 rounded-xl font-medium text-[#72adca] border border-[#72adca] hover:bg-[#72adca] hover:text-white transition-all duration-300"
                    >
                      Get Started Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Role-based Dashboard Preview - Only show if logged in */}
      {isLoggedIn && (
        <section className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#060f0c] mb-4">
                {userRole === "buyer" ? "Your Buyer Dashboard" : "Your Seller Dashboard"}
              </h2>
              <p className="text-lg text-[#060f0c]/70">
                {userRole === "buyer"
                  ? "Track your property searches and saved favorites"
                  : "Manage your listings and track performance"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userRole === "buyer" ? (
                <>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-[#060f0c] mb-2">Saved Properties</h3>
                    <p className="text-3xl font-bold text-[#4aba9c] mb-2">12</p>
                    <p className="text-sm text-[#060f0c]/70">Properties in your favorites</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-[#060f0c] mb-2">Recent Searches</h3>
                    <p className="text-3xl font-bold text-[#72adca] mb-2">8</p>
                    <p className="text-sm text-[#060f0c]/70">Searches this week</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-[#060f0c] mb-2">Inquiries Sent</h3>
                    <p className="text-3xl font-bold text-[#9bd1d9] mb-2">5</p>
                    <p className="text-sm text-[#060f0c]/70">Active conversations</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-[#060f0c] mb-2">Active Listings</h3>
                    <p className="text-3xl font-bold text-[#4aba9c] mb-2">3</p>
                    <p className="text-sm text-[#060f0c]/70">Properties listed</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-[#060f0c] mb-2">Total Views</h3>
                    <p className="text-3xl font-bold text-[#72adca] mb-2">1,247</p>
                    <p className="text-sm text-[#060f0c]/70">Views this month</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-[#060f0c] mb-2">Inquiries</h3>
                    <p className="text-3xl font-bold text-[#9bd1d9] mb-2">23</p>
                    <p className="text-sm text-[#060f0c]/70">New inquiries</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

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

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} onSuccess={handleLoginSuccess} />
      <SignupModal
        open={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSuccess={handleSignupSuccess}
        allowedRoles={["buyer", "seller"]}
      />
    </div>
  )
}
