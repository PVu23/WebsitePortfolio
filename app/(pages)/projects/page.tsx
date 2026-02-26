
import ProjectCard from '../../components/ProjectCard'
import projectImg from '../../media/IMG_6958.jpeg'

const projects = [
  {
    id: 1,
    title: 'Staff Dashboard',
    description: 'A comprehensive staff management dashboard for Next Generation Focus.',
    techStack: ['React.js', 'MongoDB', 'Jira', 'JavaScript', 'git', 'GitHub'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    imgSrc: projectImg,
  },
  {
    id: 2,
    title: 'Church Web Application',
    description: 'Internal web application for church operations and management.',
    techStack: ['AWS', 'MongoDB', 'JavaScript', 'Express'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    imgSrc: projectImg,
  } 
]

export default function ProjectsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 animate-fade-in-up">
            Projects
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A selection of projects I've worked on
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  imgSrc={project.imgSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
