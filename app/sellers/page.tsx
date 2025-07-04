"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import LoginModal from "@/components/LoginModal"
import SignupModal from "@/components/SignupModal"
import { Upload, Camera, Users, TrendingUp, Zap, CheckCircle, DollarSign, Eye, MessageSquare } from "lucide-react"

export default function SellersPage() {
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
              Sell Your Property
              <span className="block bg-gradient-to-r from-[#4aba9c] via-[#72adca] to-[#9bd1d9] bg-clip-text text-transparent animate-gradient bg-300% font-extrabold">
                With Confidence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-3xl mx-auto">
              Reach thousands of qualified buyers across the Philippines. List your property for free and get maximum
              exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleSignup}
                className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-white/30 hover:border-white/50"
              >
                <Upload className="w-5 h-5 inline mr-2" />
                List Your Property Free
              </button>
              <button className="px-8 py-4 rounded-2xl font-semibold text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 hover:border-white/50">
                <DollarSign className="w-5 h-5 inline mr-2" />
                Get Property Valuation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell with Estature */}
      <section className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">Why Sell with Estature</h2>
            <p className="text-lg text-[#060f0c]/70 max-w-2xl mx-auto">
              Get the best value for your property with our proven selling platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Maximum Exposure */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Maximum Exposure</h3>
              <p className="text-[#060f0c]/70">Your property gets seen by thousands of active buyers every day.</p>
            </div>

            {/* Fast Sales */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#72adca] to-[#9bd1d9] flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Sell Faster</h3>
              <p className="text-[#060f0c]/70">Properties on Estature sell 40% faster than traditional methods.</p>
            </div>

            {/* Professional Support */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9bd1d9] to-[#4aba9c] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Expert Support</h3>
              <p className="text-[#060f0c]/70">
                Get help from our team of real estate professionals every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">How It Works</h2>
            <p className="text-lg text-[#060f0c]/70">Sell your property in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Create Your Listing</h3>
              <p className="text-[#060f0c]/70 mb-6">
                Upload photos, add property details, and set your price. Our easy-to-use form guides you through every
                step.
              </p>
              <div className="flex justify-center space-x-2">
                <Camera className="w-5 h-5 text-[#4aba9c]" />
                <Upload className="w-5 h-5 text-[#4aba9c]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#72adca] to-[#9bd1d9] flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Get Discovered</h3>
              <p className="text-[#060f0c]/70 mb-6">
                Your property appears in search results and gets promoted to our network of qualified buyers.
              </p>
              <div className="flex justify-center space-x-2">
                <Eye className="w-5 h-5 text-[#72adca]" />
                <TrendingUp className="w-5 h-5 text-[#72adca]" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9bd1d9] to-[#4aba9c] flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#060f0c] mb-4">Close the Deal</h3>
              <p className="text-[#060f0c]/70 mb-6">
                Connect with serious buyers, schedule viewings, and close your sale with our secure platform.
              </p>
              <div className="flex justify-center space-x-2">
                <MessageSquare className="w-5 h-5 text-[#9bd1d9]" />
                <CheckCircle className="w-5 h-5 text-[#9bd1d9]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Tools */}
      <section className="py-20 bg-gradient-to-b from-[#f4fbf9] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">Seller Tools & Features</h2>
            <p className="text-lg text-[#060f0c]/70">Everything you need to sell successfully</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Photography */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Professional Photography</h3>
                  <p className="text-[#060f0c]/70 mb-4">
                    Get high-quality photos that showcase your property's best features.
                  </p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    Book Photo Session →
                  </button>
                </div>
              </div>
            </div>

            {/* Market Analysis */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#72adca] to-[#9bd1d9] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Market Analysis</h3>
                  <p className="text-[#060f0c]/70 mb-4">
                    Get insights on pricing and market trends to sell at the right price.
                  </p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    Get Analysis →
                  </button>
                </div>
              </div>
            </div>

            {/* Buyer Management */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9bd1d9] to-[#4aba9c] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Buyer Communication</h3>
                  <p className="text-[#060f0c]/70 mb-4">
                    Manage inquiries and schedule viewings through our secure messaging system.
                  </p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    View Messages →
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Analytics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4aba9c] to-[#9bd1d9] flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#060f0c] mb-3">Listing Analytics</h3>
                  <p className="text-[#060f0c]/70 mb-4">
                    Track views, inquiries, and optimize your listing for better performance.
                  </p>
                  <button className="text-[#4aba9c] font-semibold hover:text-[#3a9d82] transition-colors duration-200">
                    View Analytics →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#060f0c] mb-4">Success Stories</h2>
            <p className="text-lg text-[#060f0c]/70">See how other sellers succeeded with Estature</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Santos",
                location: "Makati Condo",
                result: "Sold in 2 weeks",
                quote: "I couldn't believe how fast my condo sold! The platform made everything so easy.",
              },
              {
                name: "Juan dela Cruz",
                location: "Quezon City House",
                result: "15% above asking",
                quote: "Got multiple offers and sold above my asking price. Highly recommend!",
              },
              {
                name: "Anna Reyes",
                location: "BGC Townhouse",
                result: "Sold in 10 days",
                quote: "The professional photos and marketing really made a difference.",
              },
            ].map((story, index) => (
              <div key={index} className="bg-[#f4fbf9] rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4aba9c] to-[#72adca] flex items-center justify-center">
                    <span className="text-white font-bold">{story.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#060f0c]">{story.name}</h4>
                    <p className="text-sm text-[#060f0c]/70">{story.location}</p>
                  </div>
                </div>
                <div className="bg-[#4aba9c] text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  {story.result}
                </div>
                <p className="text-[#060f0c]/70 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4aba9c] to-[#72adca]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Sell Your Property?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful sellers who chose Estature. List your property for free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSignup}
              className="px-8 py-4 rounded-2xl font-semibold text-[#4aba9c] bg-white hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              List Your Property Free
            </button>
            <button className="px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white hover:bg-white hover:text-[#4aba9c] transition-all duration-300">
              Get Property Valuation
            </button>
          </div>
        </div>
      </section>

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal open={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  )
}
