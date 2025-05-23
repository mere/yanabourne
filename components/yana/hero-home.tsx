import Image from "next/image";
import heroContentEn from "@/content/data/en/hero-section.json";
import heroContentRu from "@/content/data/ru/hero-section.json";
import { Lang } from "@/app/[lang]/page";
import { Link as CustomLink } from '@/components/utils/link'

export default function HeroHome({ lang }: { lang: Lang }) {
  const data = lang === "ru" ? heroContentRu : heroContentEn;
  return (
    <section className="relative overflow-hidden [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" data-sb-object-id={`content/data/${lang}/hero-section.json`}>

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-300 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-0 md:pt-40 md:pb-10">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-sf-pro-display text-slate-700 mb-4" data-sb-field-path="heading">
                {data.heading}
              </h1>
              <p className="text-2xl text-slate-400 mb-8" data-sb-field-path="subheading">
                {data.subheading}
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <CustomLink 
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" 
                    href={data.cta.primary.href}
                    lang={lang}
                    data-sb-field-path="cta.primary.href"
                  >
                    <span data-sb-field-path="cta.primary.text">{data.cta.primary.text}</span>
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" data-sb-field-path="cta.primary.icon">
                      {data.cta.primary.icon}
                    </span>
                  </CustomLink>
                </div>
                {/* <div>
                  <Link className="btn text-white bg-slate-700 hover:bg-slate-800 w-full" href="#0">Explore Product</Link>
                </div> */}
              </div>
            </div>

            {/* Hero image */}
            <div className="flex justify-center" data-aos="fade-left">
              <Image
                className="mx-auto"
                src={data.image.src}
                width={data.image.width}
                height={data.image.height}
                priority
                alt={data.image.alt}
                data-sb-field-path="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
