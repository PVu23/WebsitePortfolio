'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formState)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's collaborate and build something amazing together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    phillipvu3635@gmail.com
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </span>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </span>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">Response Time:</span> I typically respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <p className="text-green-900 font-medium">
                    ✓ Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
