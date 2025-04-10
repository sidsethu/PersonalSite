'use client'

import Link from 'next/link'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6" aria-label="Footer">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Sidharth Sethu. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
} 