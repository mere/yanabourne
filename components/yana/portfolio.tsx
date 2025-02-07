"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import FeaturesImage from "@/public/images/features-home-01.jpg";
import Link from 'next/link';

export default function Portfolio() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className="relative" id="portfolio">
      <div
        className="absolute inset-0 pointer-events-none "
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Portfolio
            </h2>
          </div>

          {/* Features1 */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            <Link 
              href="/portfolio/complex-endodontic-procedures"
              className="group cursor-pointer"
            >
              <article
                className="h-full flex flex-col space-y-5"
                data-aos="fade-up"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-100 -translate-x-2 -translate-y-2 -z-10 rounded-lg"
                    aria-hidden="true"
                  ></div>

                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/portfolio/IMG_8680.jpg"
                      alt="Complex Endodontic Procedures"
                      width={500}
                      height={300}
                      className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-40 transition duration-700 ease-out" />
                  </div>
                </div>

                <div className="grow flex flex-col">
                  <header>
                    <h3 className="h4 font-playfair-display mb-3 text-center">
                      Complex Endodontic Procedures
                    </h3>
                  </header>
                  <p className="text-lg text-slate-500 grow text-center">
                    I specialise in complex endodontic procedures, including root
                    canal treatments and retreatement.
                  </p>
                </div>
                <div 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 mx-auto"
                >
                  View Portfolio
                </div>
              </article>
            </Link>

            <Link 
              href="/portfolio/advanced-restorative-techniques"
              className="group cursor-pointer"
            >
              <article
                className="h-full flex flex-col space-y-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-100 -translate-x-2 -translate-y-2 -z-10 rounded-lg"
                    aria-hidden="true"
                  ></div>

                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/portfolio/DSC_4233.JPG"
                      alt="Advanced Restorative Techniques"
                      width={500}
                      height={300}
                      className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-40 transition duration-700 ease-out" />
                  </div>
                </div>

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
                <div 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 mx-auto"
                >
                  View Portfolio
                </div>
              </article>
            </Link>

            <Link 
              href="/portfolio/minimally-invasive-treatments"
              className="group cursor-pointer"
            >
              <article
                className="h-full flex flex-col space-y-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-100 -translate-x-2 -translate-y-2 -z-10 rounded-lg"
                    aria-hidden="true"
                  ></div>

                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/portfolio/IMG_8413.jpg"
                      alt="Minimally invasive dental treatment"
                      width={500}
                      height={300}
                      className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-40 transition duration-700 ease-out" />
                  </div>
                </div>

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
                <div 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 mx-auto"
                >
                  View Portfolio
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
