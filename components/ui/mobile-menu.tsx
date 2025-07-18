'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Lang } from '@/app/[lang]/page'
import { Link } from '../utils/link'

export default function MobileMenu({ lang }: { lang: Lang }) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 text-slate-200 dark:text-slate-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div
        ref={mobileNav}
      >
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >        
          <ul className="px-5 py-2">
            <li>
              <Link href="/#about" lang={lang} className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/#locations" lang={lang} className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Locations</Link>
            </li>
            {/* <li>
              <Link href="#certificates" lang={lang} className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Certificates</Link>
            </li> */}
            <li className="border-t border-slate-200 mt-2 pt-2">
              <Link href="/#portfolio" lang={lang} className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Portfolio</Link>
              <ul className="pl-4">
                <li>
                  <Link href="/portfolio/complex-endodontic-procedures" lang={lang} className="flex font-medium text-sm text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>
                    Complex Endodontic Procedures
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/advanced-restorative-techniques" lang={lang} className="flex font-medium text-sm text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>
                    Advanced Restorative Techniques
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/minimally-invasive-dental-treatments" lang={lang} className="flex font-medium text-sm text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>
                    Minimally Invasive Dental Treatments
                  </Link>
                </li>
              </ul>
            </li>
            <li className="border-t border-slate-200 mt-2 pt-2">
              <Link href="/#contact" lang={lang} className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Contact</Link>
            </li>
            <li>
              <a href="https://photography.yanabourne.com" className="flex font-medium text-slate-800 hover:text-blue-600 py-2">Photography</a>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
