import Image from 'next/image'

export default function AboutPage() {
  const traits = ['Problem Solver', 'Creative Thinker', 'Studious', 'Communicative', 'Leader']

  return (
    <div>
      {/* Header */}
      {/* Change this section to make it a bit better */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 animate-fade-in-up">
            About Me
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Get to know me better
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Headshot */}
            {/* Add the ability to add a picture into this section */}
            <div className="flex items-center justify-center animate-fade-in-up">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <Image
                  src="/LinkedInPhoto.jpg"
                  alt="Professional Headshot"
                  className="rounded-2xl"
                  width={256}
                  height={256}
                />
                <span className="text-gray-500 font-medium"></span>
              </div>
            </div>

            {/* Summary */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hi, I'm Phillip</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a student from Georgia Gwinnett College pursuing a Bachelor of Science in Information Technology with a concentration in Software Development. I currently volunteer with my local church's web development team working with AWS and MongoDB. I also collaborated with Next Generation Focus to develop a staff dashboard using React and MongoDB.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy solving problems, learning quickly, and building software that makes a real impact. I'm passionate about creating clean, maintainable code and delivering user-focused solutions.
              </p>

              {/* Traits */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Traits</h3>
                <div className="flex flex-wrap gap-3">
                  {traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="mt-12 mb-16 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Resume</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Preview */}
              <div className="md:col-span-2">
                <div className="w-full h-96 border border-gray-200 rounded-lg overflow-hidden">
                  {/* Use an iframe as a quick preview for the PDF. Browsers that support inline PDF viewing will show first page. */}
                  <iframe
                    src="/Resume-Phillip_Vu.pdf"
                    title="Resume Preview"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Download / Actions */}
              <div className="flex flex-col gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Download</h3>
                  <p className="text-sm text-gray-600 mb-4">Click below to open or download a PDF copy of my resume.</p>
                  <a
                    href="/Resume-Phillip_Vu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-block w-full text-center px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-medium"
                  >
                    Download Resume
                  </a>
                </div>

                <div className="text-sm text-gray-500">
                  <p>If the preview doesn't render in your browser, the download button will open the PDF in a new tab.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>

            <div className="space-y-8">

              {/* Experience 1 - Flesh this out a bit more */}
              <div className="bg-gray-100 border-l-4 border-gray-900 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Web Development Volunteer
                </h3>
                <p className="text-sm text-gray-500 mb-4">Local Church • Ongoing</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Maintain and improve internal web applications</li>
                  <li>• Work with AWS and MongoDB to manage data</li>
                  <li>• Collaborate with team members to ship features</li>
                  <li>• Support church operations through technical solutions</li>
                </ul>
              </div>
            </div>
          </div>

          

          {/* Education Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>

            <div className="p-2 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-600 font-medium mb-2">Georgia Gwinnett College</p>
              <p className="text-sm text-gray-500 mb-4">Expected Graduation: May 2026</p>
              <p className="text-gray-600">
                <span className="font-medium">Concentration:</span> Software Development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
