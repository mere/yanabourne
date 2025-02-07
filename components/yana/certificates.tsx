import Image from 'next/image'
import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import TestimonialImage04 from '@/public/images/testimonial-04.jpg'
import TestimonialImage05 from '@/public/images/testimonial-05.jpg'
import TestimonialImage06 from '@/public/images/testimonial-06.jpg'

export default function Certificates() {  
  return (
    <section className="bg-slate-50" id="certificates">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Certificates and Awards</h2>
          </div>
          {/* Testimonials container */}
          <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16" data-aos-id-testimonials>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="grow mb-3 h-32"></header>
              
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">[Date]</a>
                <span className="text-slate-500">[Certificate]</span>
              </footer>
            </article>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="grow mb-3 h-32"></header>
              
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">[Date]</a>
                <span className="text-slate-500">[Certificate]</span>
              </footer>
            </article>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="grow mb-3 h-32"></header>
              
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">[Date]</a>
                <span className="text-slate-500">[Certificate]</span>
              </footer>
            </article>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="grow mb-3 h-32"></header>
              
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">[Date]</a>
                <span className="text-slate-500">[Certificate]</span>
              </footer>
            </article>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="grow mb-3 h-32"></header>
              
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">[Date]</a>
                <span className="text-slate-500">[Certificate]</span>
              </footer>
            </article>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col p-6 shadow-xl bg-slate-200" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="grow mb-3 h-32"></header>
              
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">[Date]</a>
                <span className="text-slate-500">[Certificate]</span>
              </footer>
            </article>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}