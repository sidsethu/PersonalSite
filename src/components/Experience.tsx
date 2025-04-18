'use client'

import { motion } from 'framer-motion'
import { 
  CloudIcon, 
  CubeIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CodeBracketSquareIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  ListBulletIcon,
  DocumentTextIcon,
  SwatchIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

const productSkills = [
  { name: 'Feature Prioritization', icon: ListBulletIcon },
  { name: 'AWS', icon: CloudIcon },
  { name: 'Kubernetes', icon: CubeIcon },
  { name: 'AI for Productivity', icon: SparklesIcon },
  { name: 'Data Analytics', icon: PresentationChartLineIcon },
  { name: 'Cost Optimization', icon: CurrencyDollarIcon },
  { name: 'Stakeholder Management', icon: UserGroupIcon },
  { name: 'UI/UX Design', icon: PaintBrushIcon },
]

const engineeringSkills = [
  { name: 'PostgreSQL', icon: CircleStackIcon },
  { name: 'C#', icon: CodeBracketIcon },
  { name: 'Powershell/Bash', icon: CommandLineIcon },
  { name: 'Git', icon: CodeBracketSquareIcon },
  { name: 'Software Design', icon: SwatchIcon },
  { name: 'Tech Documentation', icon: DocumentTextIcon },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
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
                  className="group relative p-4 rounded-xl bg-white dark:bg-gray-700/50 shadow-sm hover:shadow-md transition-all duration-200"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 1000, damping: 20, mass: 0.2 }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-200">
                      <skill.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
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
                  className="group relative p-4 rounded-xl bg-white dark:bg-gray-700/50 shadow-sm hover:shadow-md transition-all duration-200"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 1000, damping: 20, mass: 0.2 }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-200">
                      <skill.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
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