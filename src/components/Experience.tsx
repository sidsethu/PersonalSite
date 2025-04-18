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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-100px" }}
          className="text-center"
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ margin: "-100px" }}
          >
            My
          </motion.h2>
          <motion.h3 
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
          >
            Skills
          </motion.h3>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8
            }}
            viewport={{ margin: "-100px" }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800/80 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-center">
              <motion.h4 
                className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ margin: "-100px" }}
              >
                Product Management (3+ Years)
              </motion.h4>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-100px" }}
            >
              {productSkills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </motion.div>
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8
            }}
            viewport={{ margin: "-100px" }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800/80 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-center">
              <motion.h4 
                className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ margin: "-100px" }}
              >
                Systems Engineering (4 Years)
              </motion.h4>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-100px" }}
            >
              {engineeringSkills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </motion.div>
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 