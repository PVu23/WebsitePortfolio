
import ProjectCard from '../../components/ProjectCard'
const NGFPicture = '/NextGenerationFocus.png'
const HVMATLPicture = '/HVMATLPicture.jpg'

const projects = [
  {
    id: 1,
    title: 'Project Manager: Georgia Gwinnett College and Next Generation Focus',
    description: 'Redesigned the staff dashboard and added ability to upload, store, and download files using MongoDB. Role was Project Manager whose main responsibilities were to upkeep deadlines, facilitate communication between members, and assign roles to members. Used Jira to turn client requirements into user stories.',
    techStack: ['React.js', 'MongoDB', 'Jira', 'JavaScript', 'git', 'GitHub'],
    liveLink: 'https://nextgenerationfocus.org/',
    imgSrc: NGFPicture,
  },
  {
    id: 2,
    title: 'Volunteer Programmer: Holy Vietnamese Martyr Church',
    description: 'Church web application for the Holy Vietnamese Martyrs Catholic Church in Atlanta. Shows upcoming events, mass times, people involved, and backstory on the founding of the church.',
    techStack: ['AWS', 'MongoDB', 'JavaScript', 'git', 'GitHub'],
    liveLink: 'https://www.hvmatl.org/',
    imgSrc: HVMATLPicture,
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
