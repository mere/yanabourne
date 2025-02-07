"use client";

import { useState } from "react";
import Image from "next/image";
import microscope from "@/public/images/yana/microscope.jpg";

export default function FeaturesHome() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className="relative" id="about">
      <div
        className="absolute inset-0  pointer-events-none mb-64 md:mb-80"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-600 mb-4">
              Hello!
            </h2>
            <p className="text-xl text-slate-700">
              I am Dr Yana Bourne, a dedicated Dental Therapist, General
              Dentist, and Endodontist with over 18 years of experience in
              paediatric and adult dentistry. Throughout my career in Russia, I
              have specialised in complex endodontic procedures, advanced
              restorative techniques, and minimally invasive dental treatments,
              always striving for precision and excellence.
            </p>

            <div className="my-12 border-t border-slate-200" />
          </div>

          {/* 1st Segment */}
          <div className="flex flex-col-reverse md:flex-row-reverse md:items-center gap-12">
            {/* Content */}
            <div className="" data-aos="fade-left">
              <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                My Story
              </h2>
              <p className="text-lg text-slate-700">
                My passion for dentistry was ignited early in life, inspired by
                my father, a dental technician. After school, I would spend
                hours playing with artificial teeth and crowns, fascinated by
                their intricacy. It was then that I knew dentistry was my
                calling. This deep-rooted connection shaped my meticulous
                approach to dental care.
              </p>
              <p className="text-lg text-slate-700 mt-4">
                For over 15 years, I have been working with a microscope,
                mastering microinvasive dentistry—an approach that has become my
                professional "religion." I believe in preserving as much healthy
                tooth structure as possible, and in my daily practice, I
                incorporate microscopy into every case to ensure the highest
                level of precision and care. My expertise extends to advanced
                diagnostic imaging, complex root canal treatments, and
                restorative procedures, all performed with an unwavering
                commitment to patient-centred care.
              </p>
              <p className="text-lg text-slate-700 mt-4">
                My dedication to continuous professional development has led me
                to attend numerous international congresses and specialised
                training courses. I also take pride in mentoring and sharing my
                knowledge with colleagues, contributing to the advancement of
                modern dental techniques.
              </p>
            </div>

            {/* Image */}
            <div
              className="flex justify-center items-center "
              data-aos="fade-right"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-100 -translate-x-2 -translate-y-2 -z-10 rounded-lg"
                  aria-hidden="true"
                ></div>

                <div className="min-w-[300px] min-h-[250px] bg-slate-300 rounded-lg">
                  <Image
                    src={microscope}
                    alt="Microscope"
                    className="rounded-lg min-w-[300px] min-h-[250px]"
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
