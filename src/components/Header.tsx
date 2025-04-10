'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 pr-4">
            <Link href="/" className="text-xl font-bold">
              SidSethu&apos;s Space
            </Link>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center pl-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
} 