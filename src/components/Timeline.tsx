'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface TimelineItem {
  id: string
  title: string
  date: string
  description: string
  logo: string
  achievements: string[]
}

const timelineItems: TimelineItem[] = [
  {
    id: 'nammayatri',
    title: 'Product Manager at Namma Yatri',
    date: '2022-Present',
    description: 'Leading product initiatives in the mobility space',
    logo: '/namma_yatri_logo.jpg',
    achievements: [
      'Led multiple 0-1 product launches',
      'Managed on-call issue resolution teams',
      'Improved critical metrics such as cancellation rate, fare recompute rate, etc.'
    ]
  },
  {
    id: 'mba',
    title: 'MBA from IIT Bombay',
    date: '2020-2022',
    description: 'Pursued MBA with focus on Finance and IT',
    logo: '/iit_bombay_logo.png',
    achievements: [
      'Specialized in Finance',
      'Won multiple case competitions',
      'Active in student organizations, headed the admissions committee'
    ]
  },
  {
    id: 'unisys',
    title: 'Systems Engineer at Unisys',
    date: '2016-2020',
    description: 'Worked as a Systems Engineer focusing on Unisys Stealth',
    logo: '/unisys_logo.jpeg',
    achievements: [
      'Implemented network security solutions',
      'Worked on micro-segmentation projects, was SME on a US-based team',
      'Led a team of junior engineers'
    ]
  },
  {
    id: 'graduation',
    title: 'B.Tech. in Computer Science',
    date: '2012-2016',
    description: 'Graduated (First Class) with a Bachelor\'s degree in Computer Science from <a href="https://scmsgroup.org/sset/" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline">SSET, Ernakulam</a>',
    logo: '/engineering_logo.jpeg',
    achievements: [
      'Secured the first placement offer in the batch',
      'Won multiple competitions across technical and non-technical domains'
    ]
  }
]

export function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const itemWidth = scrollContainer.scrollWidth / timelineItems.length;
      const index = Math.min(
        Math.max(0, Math.round(scrollContainer.scrollLeft / itemWidth)),
        timelineItems.length - 1
      );
      setCurrentIndex(index);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative py-12">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex space-x-16 min-w-max px-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (timelineItems.length - 1 - index) * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center cursor-pointer relative pb-8 pt-4"
              onClick={() => setSelectedItem(item)}
            >
              <motion.div 
                className="relative w-20 h-20 mb-4 mt-2"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="absolute -inset-1 rounded-full border-4 border-black dark:border-white" />
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="rounded-full object-cover p-1"
                  fill
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-indigo-600/0"
                  whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                {/* Pulsing circle */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-indigo-600 dark:border-indigo-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Main dot */}
                <div className="relative w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Swipe Indicator Dots */}
      <div className="flex justify-center space-x-3 mt-6">
        {timelineItems.map((_, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              width: index === currentIndex ? 24 : 8,
              opacity: index === currentIndex ? 1 : 0.5,
              scale: index === currentIndex ? 1 : 0.8
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className={`h-2 rounded-full ${
              index === currentIndex 
                ? 'bg-indigo-600 dark:bg-indigo-400' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src={selectedItem.logo}
                  alt={selectedItem.title}
                  className="rounded-full object-cover"
                  fill
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedItem.date}</p>
              </div>
            </div>
            <p className="mt-2 text-base text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
            <ul className="space-y-2">
              {selectedItem.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
} 