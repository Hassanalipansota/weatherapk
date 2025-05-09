import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left section: Image */}
        <div className="md:w-1/2 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center p-6">
          <img
            src="/pics/hassanimage.jpg"  // <-- Replace with your photo path
            alt="Hassan Ali Pansota"
            className="rounded-full border-4 border-white w-48 h-48 object-cover shadow-xl"
          />
        </div>

        {/* Right section: Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Hassan Ali Pansota</h1>
          <p className="text-lg text-gray-600 mb-4">PUCIT (2023 – 2027)</p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-blue-600 text-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.6a1 1 0 01.98.804l.7 3.496a1 1 0 01-.272.945l-2.148 2.149a11.042 11.042 0 005.292 5.292l2.149-2.148a1 1 0 01.945-.272l3.496.7a1 1 0 01.804.98V19a2 2 0 01-2 2h-.6C7.477 21 3 16.523 3 11.6V5z" /></svg>
              </span>
              <span className="text-gray-700 text-lg">+92 322 7827070</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-block bg-blue-600 text-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2a2 2 0 012 2v4.586a1 1 0 01-.293.707l-1.414 1.414a1 1 0 01-1.414 0L10 5.414a1 1 0 01-.293-.707V4a2 2 0 012-2h4zm-6 9v10m4-10v10M4 8h16" /></svg>
              </span>
              <span className="text-gray-700 text-lg">Lahore, Pakistan</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-block bg-blue-600 text-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v18h12V3H6z" /></svg>
              </span>
              <span className="text-gray-700 text-lg">hassanaly438@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-block bg-blue-600 text-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79c-.42 0-.84-.14-1.18-.4l-5.22-4.57-1.04 1.04 5.11 4.36c-.29.53-.53 1.08-.74 1.67-.36.85-.57 1.76-.57 2.67 0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5zm-9.71-.82l-4.97-4.97c-.41-.41-.41-1.08 0-1.49.41-.41 1.08-.41 1.49 0l4.97 4.97c.41.41.41 1.08 0 1.49-.41.41-1.08.41-1.49 0zm2.11 9.66c-.69-.39-1.39-.75-2.11-1.06-.4-.2-.83-.38-1.26-.56-1.42-.55-2.91-.88-4.41-1.11-1.34-.18-2.66-.25-4-.25s-2.66.07-4 .25c-1.5.23-2.99.56-4.41 1.11-.43.18-.86.36-1.26.56-.72.31-1.42.67-2.11 1.06C3.56 18.12 2 15.5 2 12.5 2 7.9 5.43 4 9.9 4c.7 0 1.39.08 2.06.23 1.3.26 2.57.65 3.77 1.15 1.09.42 2.11.91 3.08 1.47 1.07-.56 2-.99 3.08-1.47 1.2-.5 2.47-.89 3.77-1.15.67-.15 1.36-.23 2.06-.23 4.47 0 7.9 3.9 7.9 8.5 0 3.5-2.33 6.62-5.55 7.88z" /></svg>
              </span>
              <span className="text-gray-700 text-lg">
                <a href="https://instagram.com/hassanali_pansota" target="_blank" rel="noopener noreferrer">hassanali_pansota</a>
              </span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/923227827070"  // Use WhatsApp URL directly
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer"  // For security reasons
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition duration-200 shadow-md hover:shadow-lg text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
