'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const productSkills = [
  { name: 'Feature Prioritization', level: 'Experienced' },
  { name: 'AWS', level: 'Experienced' },
  { name: 'Kubernetes', level: 'Intermediate' },
  { name: 'Roadmap', level: 'Experienced' },
  { name: 'Cost Optimization', level: 'Experienced' },
  { name: 'Stakeholder Management', level: 'Experienced' },
]

const engineeringSkills = [
  { name: 'PostgreSQL', level: 'Basic' },
  { name: 'C#', level: 'Intermediate' },
  { name: 'Powershell/Bash', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Explore My
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h3>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8"
          >
            <h4 className="text-xl font-semibold mb-6">Product Management (1+ Year)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8"
          >
            <h4 className="text-xl font-semibold mb-6">Systems Engineering (4 Years)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 