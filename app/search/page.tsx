"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import LoginModal from "@/components/LoginModal"
import SignupModal from "@/components/SignupModal"
import { Search, ChevronDown, SlidersHorizontal, MapPin, Home, Building, Warehouse, TreePine } from "lucide-react"

export default function SearchPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"admin" | "broker" | "client" | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  // Search state
  const [offerType, setOfferType] = useState("All")
  const [propertyType, setPropertyType] = useState("All")
  const [location, setLocation] = useState("")
  const [showOfferDropdown, setShowOfferDropdown] = useState(false)
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false)

  const handleLogin = () => setShowLoginModal(true)
  const handleSignup = () => setShowSignupModal(true)
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
  }

  const offerTypes = ["All", "For Sale", "For Rent", "Pre-selling"]
  const propertyTypes = ["All", "House & Lot", "Condominium", "Townhouse", "Lot", "Commercial", "Office"]

  const handleSearch = () => {
    console.log("Searching:", { offerType, propertyType, location })
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

      {/* Hero Section with Search */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-property.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Real estate search made{" "}
              <span className="relative">
                simple.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#4aba9c] to-[#72adca] rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto">
              Find the best residential and commercial properties in the Philippines.
            </p>
          </div>

          {/* Search Interface */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Offer Type */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium block text-left">Offer Type</label>
                <div className="relative">
                  <button
                    onClick={() => setShowOfferDropdown(!showOfferDropdown)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white text-left flex items-center justify-between hover:bg-white/20 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <Home className="w-5 h-5 text-white/70" />
                      <span>{offerType}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  </button>
                  {showOfferDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl shadow-xl z-20">
                      {offerTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setOfferType(type)
                            setShowOfferDropdown(false)
                          }}
                          className="w-full px-4 py-3 text-white text-left hover:bg-white/20 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium block text-left">Property Type</label>
                <div className="relative">
                  <button
                    onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white text-left flex items-center justify-between hover:bg-white/20 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-white/70" />
                      <span>{propertyType}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  </button>
                  {showPropertyDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl shadow-xl z-20">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setPropertyType(type)
                            setShowPropertyDropdown(false)
                          }}
                          className="w-full px-4 py-3 text-white text-left hover:bg-white/20 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium block text-left">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for a location, developer or development..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Search Actions */}
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-200">
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="hidden sm:inline">Filters</span>
                  <span className="bg-[#4aba9c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </button>
                <button
                  onClick={handleSearch}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#4aba9c] to-[#72adca] hover:from-[#3a9d82] hover:to-[#5a94b3] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#060f0c] mb-6">
                Estature is an online marketplace for listings of residential and commercial properties in the
                Philippines. Buyers, renters, and sellers can navigate every step of their real estate journey with
                ease.
              </h2>
            </div>
            <div>
              <p className="text-lg text-[#060f0c]/70 mb-6">
                More often than not, searching for the ideal house & lot, condo, or office space involves a series of
                difficult steps. Estature removes a lot of the hassle of searching for the best properties through an
                easy-to-use platform and tons of helpful resources.
              </p>
              <p className="text-lg text-[#060f0c]/70">
                We're not just any real estate platform. We're your local guide to the ins and outs of real estate in
                the Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 md:space-x-16 opacity-30">
            <div className="flex flex-col items-center space-y-2">
              <Home className="w-12 h-12 text-[#060f0c]" />
              <span className="text-xs text-[#060f0c] font-medium">House</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Building className="w-12 h-12 text-[#060f0c]" />
              <span className="text-xs text-[#060f0c] font-medium">Condo</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Warehouse className="w-12 h-12 text-[#060f0c]" />
              <span className="text-xs text-[#060f0c] font-medium">Commercial</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TreePine className="w-12 h-12 text-[#060f0c]" />
              <span className="text-xs text-[#060f0c] font-medium">Lot</span>
            </div>
          </div>
        </div>
      </section>

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal open={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  )
}