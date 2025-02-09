
import { Lang } from '@/app/[lang]/page'
import { Link } from '../utils/link'

export default function Logo({ 
  lang,
  title = "Dr. Yana Bourne",
  className = "" 
}: { 
  title?: string
  className?: string 
  lang: Lang
}) {
  return (
    <Link
      href="/" 
      lang={lang}
      className={`block text-blue-600 transition duration-150 ease-in-out font-the-nautigal text-2xl font-extrabold ${className}`} 
      aria-label="Cruip"
    >
      {title}
    </Link>
  )
}
