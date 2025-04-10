'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Get To Know More
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h3>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm"
          >
            <div className="flex items-center gap-x-4">
              <BriefcaseIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-lg font-semibold">Experience</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">5+ years</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Product & Engineering</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm"
          >
            <div className="flex items-center gap-x-4">
              <AcademicCapIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">MBA (IIT Bombay)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech. (CSE)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm sm:col-span-2 lg:col-span-1"
          >
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-6">
              I&apos;m a tech enthusiast with a penchant for solving complex problems and improving productivity. 
              During my MBA at IIT Bombay, I focused on Finance and Information Technology, achieving notable successes 
              in corporate and B-School competitions. Previously, I worked for four years as a Systems Engineer at 
              Unisys India Pvt. Ltd., specializing in network security and micro-segmentation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 