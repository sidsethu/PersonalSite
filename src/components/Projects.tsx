'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'My Photography',
    description: 'A collection of my best photographs from around the world.',
    image: '/photography.jpg',
    link: '#',
    linkText: 'Visit Gallery',
  },
  {
    title: 'My Instagram',
    description: 'Follow my journey through pictures and stories.',
    image: '/instagram.jpg',
    link: '#',
    linkText: 'Profile Link',
  },
  {
    title: 'Project Three - WIP',
    description: 'Coming soon...',
    image: '/project3.jpg',
    link: '#',
    linkText: 'TBD',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Browse My Recent
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h3>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                  <Link
                    href={project.link}
                    className="mt-4 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    {project.linkText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 