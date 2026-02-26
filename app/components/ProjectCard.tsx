import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  imgSrc?: string | StaticImageData
  githubLink?: string
  liveLink?: string
}

export default function ProjectCard({
  title,
  description,
  techStack,
  imgSrc,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
      {/* Image placeholder */}
      {imgSrc ? (
        <div className="relative w-full h-48">
          <Image src={imgSrc} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400">Project Image</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:border-gray-400 hover:bg-gray-50 font-medium transition-colors text-center text-sm"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-medium transition-colors text-center text-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
