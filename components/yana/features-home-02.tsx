"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import FeaturesImage from "@/public/images/features-home-01.jpg";

export default function FeaturesHome02() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className="relative" id="specialties">
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none "
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Specialties
            </h2>
          </div>

          {/* Features1 */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            <article
              className="h-full flex flex-col space-y-5"
              data-aos="fade-up"
            >
              <div className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out bg-slate-700 rounded-lg" />

              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-playfair-display mb-3 text-center">
                    Complex Endodontic Procedures
                  </h3>
                </header>
                <p className="text-lg text-slate-500 grow text-center">
                  I specialise in complex endodontic procedures, including root
                  canal treatments and endodontic surgeries.
                </p>
              </div>
            </article>


            <article
              className="h-full flex flex-col space-y-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out bg-slate-700 rounded-lg" />

              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-playfair-display mb-3 text-center">
                  Advanced Restorative Techniques
                  </h3>
                </header>
                <p className="text-lg text-slate-500 grow text-center">
                  I specialise in advanced restorative techniques, including
                  dental implants and full mouth rehabilitation.
                </p>
              </div>
            </article>


            <article
              className="h-full flex flex-col space-y-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out bg-slate-700 rounded-lg" />

              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-playfair-display mb-3 text-center">
                  Minimally Invasive Dental Treatments
                  </h3>
                </header>
                <p className="text-lg text-slate-500 grow text-center">
                  I specialise in minimally invasive dentistry, including
                  tooth-saving techniques and conservative restorative options.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
