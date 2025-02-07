import Link from 'next/link'

export default function Logo({ 
  title = "Dr. Yana Bourne",
  className = "" 
}: { 
  title?: string
  className?: string 
}) {
  return (
    <Link 
      href="/" 
      className={`block text-blue-600 transition duration-150 ease-in-out font-the-nautigal text-2xl font-extrabold ${className}`} 
      aria-label="Cruip"
    >
      {title}
    </Link>
  )
}
