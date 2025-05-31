"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Award, Code, Database, Globe } from "lucide-react"

import AnimatedPhoto from "@/components/animated-photo"
import ProjectCard from "@/components/project-card"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "education", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "JavaScript", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "React.js", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Node.js", level: 80, icon: <Database className="w-5 h-5" /> },
    { name: "HTML/CSS", level: 95, icon: <Globe className="w-5 h-5" /> },
    { name: "MongoDB", level: 75, icon: <Database className="w-5 h-5" /> },
    { name: "Python", level: 70, icon: <Code className="w-5 h-5" /> },
    { name: "MySQL", level: 80, icon: <Database className="w-5 h-5" /> },
    { name: "Express.js", level: 75, icon: <Database className="w-5 h-5" /> },
  ]

  const projects = [
    {
      title: "SPARSH - E-commerce Platform",
      period: "April 2025 - Present",
      description:
        "Full-stack e-commerce platform for natural hair-care products featuring user authentication, shopping cart functionality, Razorpay payment integration, and comprehensive shipping logistics with Shiprocket.",
      technologies: ["React.js", "Supabase", "Razorpay", "Shiprocket", "Formspree", "CSS3"],
      highlights: [
        "User Authentication & Profiles",
        "Secure Payment Gateway",
        "Real-time Order Tracking",
        "Email Notifications",
        "Inventory Management",
        "Mobile Responsive Design",
      ],
      url: "https://www.sparshnaturals.shop",
      githubUrl: "https://github.com/Manav32478/sparsh-ecommerce",
      previewImage: "/images/sparsh-preview.jpeg",
      status: "live" as const,
    },
    {
      title: "Women's Safety Website",
      period: "Feb 2025 - April 2025",
      description:
        "Smart India Hackathon project featuring comprehensive women's safety solutions including live location tracking, SOS alerts, emergency calling system, and educational safety resources.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Geolocation API", "SMS Integration", "Bootstrap"],
      highlights: [
        "Real-time Location Tracking",
        "One-Click SOS Alerts",
        "Emergency Contact System",
        "Safety Tips & Resources",
        "Government Integration",
        "Multi-language Support",
      ],
      url: "https://women-s-safety-website.vercel.app",
      githubUrl: "https://github.com/Manav32478/women-safety-website",
      previewImage: "/images/women-safety-preview.jpeg",
      status: "live" as const,
    },
    {
      title: "MakeMyTrip Clone",
      period: "Aug 2024 - Sep 2024",
      description:
        "Complete recreation of the MakeMyTrip platform with advanced booking functionality for flights, hotels, and trains, featuring user authentication and real-time API integration.",
      technologies: ["HTML5", "CSS3", "JavaScript", "API Integration", "Local Storage", "Responsive Design"],
      highlights: [
        "Multi-service Booking",
        "User Authentication",
        "Real-time Price Updates",
        "Search & Filter Options",
        "Booking Management",
        "Payment Simulation",
      ],
      url: "https://wt-project-sable.vercel.app",
      githubUrl: "https://github.com/Manav32478/makemytrip-clone",
      status: "completed" as const,
    },
  ]

  const certifications = [
    "Generative AI & ChatGPT for Industrial Applications - Corizo",
    "NPTEL Data Structures and Algorithms",
    "NPTEL C++ Programming",
    "NPTEL C Programming",
    "HackerRank Java (Basic)",
    "DataCamp Intermediate Python",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MS
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MANAV SARVAIYA
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">Full Stack Web Developer</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              B.Tech IT student passionate about creating impactful digital experiences with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About <span className="text-blue-400">Me</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A dedicated B.Tech student specializing in Information Technology with a passion for utilizing my
                technical skills. I thrive in challenging and motivating environments, eager to apply and sharpen my
                expertise.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My experiences include developing impactful projects using modern technologies. I aim to provide quality
                service and to further enhance my knowledge in the tech field.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">8.25</div>
                  <div className="text-gray-400">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">3+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <AnimatedPhoto />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-400 mt-2">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development techniques and innovative solutions
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                period={project.period}
                description={project.description}
                technologies={project.technologies}
                highlights={project.highlights}
                projectUrl={project.url}
                githubUrl={project.githubUrl}
                previewImage={project.previewImage}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Education & <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400">Education</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2">B.Tech in Information Technology</h4>
                  <p className="text-gray-400 mb-2">Charotar University of Science and Technology</p>
                  <p className="text-gray-400 mb-2">Jul 2023 - Present</p>
                  <div className="text-blue-400 font-semibold">CGPA: 8.25</div>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2">Higher Secondary Certificate</h4>
                  <p className="text-gray-400 mb-2">Gyanmanjri Vidyapith</p>
                  <p className="text-gray-400 mb-2">2021 - 2023</p>
                  <div className="text-blue-400 font-semibold">Percentile: 87.8%</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology and development.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">+91 8780003738</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">manavsarvaiya188@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400">Bhavnagar, Gujarat, India</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/feed/"
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://GitHub.com/Manav32478"
                  className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-700/30 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Manav Sarvaiya. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
