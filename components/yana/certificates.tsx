import Image from 'next/image'
import { Link } from '@/components/utils/link'
import { Lang } from '@/app/[lang]/page'
import certificatesDataEn from "@/content/data/en/certificates-section.json";
import certificatesDataRu from "@/content/data/ru/certificates-section.json";

export default function Certificates({ lang }: { lang: Lang }) {  
  const data = lang === "ru" ? certificatesDataRu : certificatesDataEn;

  return (
    <section className="bg-slate-50" id="certificates">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">{data.heading}</h2>
          </div>
          {/* Testimonials container */}
          <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16" data-aos-id-testimonials>
            {data.certificates.map((certificate, index) => (
              <article key={index} className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className="grow mb-3 h-32"></header>
                <footer className="text-sm font-medium">
                  <Link lang={lang} className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href={certificate.link}>{certificate.date}</Link>
                  <span className="text-slate-500">{certificate.title}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}