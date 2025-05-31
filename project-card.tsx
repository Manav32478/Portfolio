import { Calendar, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  period: string
  description: string
  technologies: string[]
  highlights: string[]
  projectUrl?: string
  githubUrl?: string
  previewImage?: string
  status?: "live" | "development" | "completed"
}

export default function ProjectCard({
  title,
  period,
  description,
  technologies,
  highlights,
  projectUrl = "#",
  githubUrl,
  previewImage,
  status = "completed",
}: ProjectCardProps) {
  const statusColors = {
    live: "bg-green-500/20 text-green-300 border-green-500/30",
    development: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    completed: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  }

  const statusLabels = {
    live: "Live",
    development: "In Development",
    completed: "Completed",
  }

  return (
    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/30">
      {/* Preview Image */}
      {previewImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={previewImage || "/placeholder.svg"}
            alt={`${title} preview`}
            width={400}
            height={200}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

          {/* Status Badge */}
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}
          >
            {statusLabels[status]}
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            {period}
          </div>
          {!previewImage && (
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}>
              {statusLabels[status]}
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">{title}</h3>

        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
          <div className="grid grid-cols-1 gap-1">
            {highlights.slice(0, 4).map((highlight) => (
              <div key={highlight} className="text-xs text-gray-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/20 hover:border-blue-400/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </Link>

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Decorative gradient border */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ padding: "1px", margin: "-1px" }}
      >
        <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
      </div>
    </div>
  )
}
