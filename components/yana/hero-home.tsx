import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/yana/hero.png'

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-300 pointer-events-none -z-10 " aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-0 md:pt-40 md:pb-10">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-sf-pro-display text-slate-700 mb-4">Dr. Yana Bourne</h1>
              <p className="text-2xl text-slate-400 mb-8">Experienced Dental Therapist,<br/> General Dentist & Endodontist
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#contact" >
                    Get in Touch <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
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
                src={HeroImage}
                width={540}
                height={405}
                priority
                alt="Hero"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}