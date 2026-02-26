export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
      {skill}
    </span>
  )
}
