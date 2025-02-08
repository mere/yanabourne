import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={`fixed w-full z-30 ${mode !== 'light' && 'dark'} backdrop-blur-sm bg-white/80 dark:bg-slate-900/70 shadow-sm`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              
              <li>
                <Link href="/#about" className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              {/* <li>
                <Link href="#specialties" className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Specialties</Link>
              </li> */}
              <li>
                <Link href="/#locations" className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Locations</Link>
              </li>
              {/* <li>
                <Link href="#certificates" className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Certificates</Link>
              </li> */}
              {/* <li>
                <Link href="#portfolio" className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Portfolio</Link>
              </li> */}
              <Dropdown title="Portfolio" href="/#portfolio">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/portfolio/complex-endodontic-procedures" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Complex Endodontic Procedures</Link>
                </li>
                <li>
                  <Link href="/portfolio/advanced-restorative-techniques" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Advanced Restorative Techniques</Link>
                </li>
                <li>
                  <Link href="/portfolio/minimally-invasive-dental-treatments" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Minimally Invasive Dental Treatments</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/#contact" className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            </ul>

          
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
