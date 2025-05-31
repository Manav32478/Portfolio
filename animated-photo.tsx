"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AnimatedPhoto() {
  const [isInView, setIsInView] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (photoRef.current) {
      observer.observe(photoRef.current)
    }

    return () => {
      if (photoRef.current) {
        observer.unobserve(photoRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={photoRef}
      className="relative mx-auto lg:mx-0 max-w-[280px] aspect-[3/4]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 
          transition-all duration-700 ease-out
          ${isInView ? "opacity-100 scale-[1.03]" : "opacity-0 scale-[0.97]"}
          ${isHovered ? "rotate-6 scale-[1.05]" : ""}
        `}
        style={{
          transformOrigin: "center bottom",
          boxShadow: isHovered ? "0 25px 50px -12px rgba(79, 70, 229, 0.4)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      />

      <div
        className={`
          relative z-10 overflow-hidden rounded-xl border-4 border-white/10
          transition-all duration-700 ease-out transform
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ${isHovered ? "scale-[1.02]" : ""}
        `}
        style={{
          boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
          transformOrigin: "center bottom",
        }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            src="/images/manav-profile.jpeg"
            alt="Manav Sarvaiya"
            width={280}
            height={373}
            className={`
              object-cover w-full h-full transition-all duration-700
              ${isHovered ? "scale-[1.05]" : "scale-100"}
            `}
            priority
          />

          {/* Overlay effect on hover */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent
              transition-opacity duration-500
              ${isHovered ? "opacity-70" : "opacity-0"}
            `}
          />

          {/* Animated text on hover */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 p-4 text-center
              transform transition-all duration-500
              ${isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
          >
            <p className="text-white font-medium text-shadow">Manav Sarvaiya</p>
            <p className="text-blue-300 text-sm">Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`
          absolute -bottom-4 -right-4 w-20 h-20 rounded-full 
          bg-gradient-to-br from-purple-500 to-pink-500
          transition-all duration-700 delay-100
          ${isInView ? "opacity-80 scale-100" : "opacity-0 scale-0"}
          ${isHovered ? "scale-110" : ""}
        `}
        style={{
          zIndex: -1,
          filter: "blur(8px)",
        }}
      />

      <div
        className={`
          absolute -top-6 -left-6 w-16 h-16 rounded-full 
          bg-gradient-to-br from-blue-400 to-cyan-300
          transition-all duration-700 delay-200
          ${isInView ? "opacity-70 scale-100" : "opacity-0 scale-0"}
          ${isHovered ? "scale-125" : ""}
        `}
        style={{
          zIndex: -1,
          filter: "blur(10px)",
        }}
      />
    </div>
  )
}
