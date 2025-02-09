import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Gallery from '@/components/yana/gallery'
import dataEn from '@/content/data/en/portfolioItems.json'
import dataRu from '@/content/data/ru/portfolioItems.json'
import { Lang } from '../../page'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'


export const metadata = {
  title: 'Portfolio Details',
  description: 'Detailed view of portfolio',
}

// This would need to be replaced with actual data fetching
async function getPortfolioItem(slug: string, data: typeof dataEn | typeof dataRu) {
  const portfolioItems = data.items
  return portfolioItems.find(item => item.slug === slug)
}

export default async function PortfolioPost({ params }: { params: Promise<{ lang: Lang, slug: string }> }) {
  const lang = (await params).lang;
  const data = lang === 'ru' ? dataRu : dataEn;
  const portfolio = await getPortfolioItem((await params).slug, data)
  
  if (!portfolio) {
    notFound()
  }
  
  const itemIndex = data.items.findIndex(item => item.slug === portfolio.slug);
  const fieldPath = `items.${itemIndex}`;

  return (
    <section className="relative" data-sb-object-id={`content/data/${lang}/portfolioItems.json`}>
      <Header lang={lang} />
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          
            
            <article className="max-w-3xl mx-auto">
              <header className="mb-8">
                {/* Back button */}
                <div className="mb-6">
                  <Link className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline" href={`/${lang}/#portfolio`}>
                    <svg className="fill-current text-blue-600 mr-2 h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                    </svg>
                    <span>Back to Portfolio</span>
                  </Link>
                </div>
                
                <h1 className="h2 text-slate-200 mb-4" data-sb-field-path={`${fieldPath}.title`}>
                  {portfolio.title}
                </h1>
              </header>

              {/* Main image */}
              <div className="mb-8">
                <Image 
                  className="w-full rounded-xl" 
                  src={portfolio.image}
                  width={800}
                  height={400}
                  alt={portfolio.title}
                  priority
                  data-sb-field-path={`${fieldPath}.image`}
                />
              </div>

              {/* Content */}
              <div className="text-lg text-slate-500 space-y-8">
                <p data-sb-field-path={`${fieldPath}.description`}>
                  {portfolio.description}
                </p>
              </div>

            </article>
            
          
              <Gallery 
                lang={lang}
                items={portfolio.images.map((image, index) => ({
                  id: index,
                  src: image,
                  width: 800,
                  height: 400
                }))}
                fieldPath={fieldPath}
              />
        </div>
      </div>
      <Footer lang={lang} />
    </section>
  )
}
