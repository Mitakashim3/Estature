import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#060f0c] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Estature. All rights reserved.</p>
          </div>
          <div>
            <a href="#" className="text-sm hover:text-[#4aba9c] mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-[#4aba9c]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
