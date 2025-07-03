"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, LogOut } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
  isLoggedIn?: boolean
  userRole?: "admin" | "broker" | "client" | null
  userName?: string
  onLogin?: () => void
  onSignup?: () => void
  onLogout?: () => void
  onLoginModal: () => void;
  onSignupModal: () => void;
}

export default function Navbar({
  isLoggedIn = false,
  userRole = null,
  userName = "John Doe",
  onLogin = () => console.log("Login clicked"),
  onSignup = () => console.log("Signup clicked"),
  onLogout = () => console.log("Logout clicked"),
  onLoginModal,
  onSignupModal,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const renderAuthSection = () => {
    if (isLoggedIn) {
      return (
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-white/90">
            <User className="w-4 h-4" />
            <span className="font-medium">{userName}</span>
            {userRole && (
              <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white font-medium border border-white/30">
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
              </span>
            )}
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-white/90 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      )
    }

    return (
      <div className="flex items-center space-x-3">
        <button
          onClick={onLogin}
          className="px-4 py-2 rounded-xl font-medium text-white/90 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
        >
          Login
        </button>
        <button
          onClick={onSignup}
          className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-white/30 hover:border-white/50"
        >
          Sign Up
        </button>
      </div>
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-navbar-scrolled" : "glass-navbar"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title - Left Side */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
              <Image
                src="/Estature-logo-png.png"
                alt="Estature Logo"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">Estature</h1>
              <p className="text-sm text-white/80 hidden sm:block drop-shadow-sm">Real Estate Philippines</p>
            </div>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Commercial", "Residential", "Broker"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white font-medium transition-all duration-300 relative group px-4 py-2 rounded-xl hover:bg-white/10 backdrop-blur-sm"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-white/60 to-white/30 group-hover:w-8 transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Auth Section - Right Side */}
          <div className="hidden md:flex">{renderAuthSection()}</div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-xl text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 glass-mobile-menu">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation */}
              {["Commercial", "Residential", "Broker"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/90 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                >
                  {item}
                </a>
              ))}

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-white/20">
                {isLoggedIn ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-white/90 px-4">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{userName}</span>
                      {userRole && (
                        <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white font-medium border border-white/30">
                          {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={onLogout}
                      className="flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-white/90 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 w-full border border-white/20"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={onLoginModal}
                      className="w-full px-4 py-3 rounded-xl font-medium text-white/90 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-left border border-white/20"
                    >
                      Login
                    </button>
                    <button
                      onClick={onSignupModal}
                      className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-sm transition-all duration-300 shadow-lg border border-white/30"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )