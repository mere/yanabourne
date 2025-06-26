import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LanguageSelector from './language-selector'
import { Link } from '@/components/utils/link'
import { Lang } from '@/app/[lang]/page'

export default function Header({ lang }: { lang: Lang }) {
  return (
    <header className={`fixed w-full z-30 backdrop-blur-sm bg-white/80 shadow-sm`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo lang={lang} />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              
              <li>
                <Link href="/#about" lang={lang} className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              {/* <li>
                <Link href="#specialties" lang={lang} className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Specialties</Link>
              </li> */}
              <li>
                <Link href="/#locations" lang={lang} className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Locations</Link>
              </li>
              {/* <li>
                <Link href="#certificates" lang={lang} className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Certificates</Link>
              </li> */}
              {/* <li>
                <Link href="#portfolio" lang={lang} className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Portfolio</Link>
              </li> */}
              <Dropdown title="Portfolio" href="/#portfolio" lang={lang}>
                {/* 2nd level: hover */}
                <li>
                  <Link href="/portfolio/complex-endodontic-procedures" lang={lang} className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Complex Endodontic Procedures</Link>
                </li>
                <li>
                  <Link href="/portfolio/advanced-restorative-techniques" lang={lang} className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Advanced Restorative Techniques</Link>
                </li>
                <li>
                  <Link href="/portfolio/minimally-invasive-dental-treatments" lang={lang} className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Minimally Invasive Dental Treatments</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/#contact" lang={lang} className="font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            </ul>

          </nav>

          <div className="flex items-center justify-end gap-4">
            <a href="https://photography.yanabourne.com" className="hidden md:flex font-medium text-slate-500 hover:text-blue-600 px-3 lg:px-5 py-2 items-center transition duration-150 ease-in-out">Photography</a>
            <LanguageSelector />
            <MobileMenu lang={lang} />
          </div>

        </div>
      </div>
    </header>
  )
}
