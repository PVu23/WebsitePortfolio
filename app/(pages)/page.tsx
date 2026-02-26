import Link from 'next/link'

export default function Home() {
  const skills = {
    languages: ['Java', 'JavaScript', 'Python'],
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    databases: ['SQL', 'MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'AWS', 'VS Code'],
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Phillip Lam Vu
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Building reliable, scalable, and user-friendly web applications.
            </p>
          </div>

          {/* CTA Buttons */}
          {/* Have a place where you can see the resume and also the ability to download resume */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Projects
            </Link>
          
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
