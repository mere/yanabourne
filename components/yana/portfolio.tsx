"use client";

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import portfolioData from "@/content/data/portfolio-section.json";

export default function Portfolio() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className="relative" id="portfolio" data-sb-object-id="content/data/portfolio-section.json">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4" data-sb-field-path="heading">
              {portfolioData.heading}
            </h2>
          </div>

          {/* Portfolio items */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {portfolioData.items.map((item, index) => (
              <Link 
                key={item.link}
                href={item.link}
                className="group cursor-pointer h-full"
                data-sb-field-path={`items.${index}`}
              >
                <article
                  className="flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative mb-6">
                    <div
                      className="absolute inset-0 pointer-events-none border-2 border-slate-100 -translate-x-2 -translate-y-2 -z-10 rounded-lg"
                      aria-hidden="true"
                    ></div>

                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-out"
                        data-sb-field-path=".image"
                      />
                      <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-40 transition duration-700 ease-out" />
                    </div>
                  </div>

                  <div className="flex flex-col h-full">
                    <h3 className="h4 font-playfair-display mb-4 text-center min-h-16" data-sb-field-path=".title">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-500 text-center mb-6" data-sb-field-path=".description">
                      {item.description}
                    </p>
                    <div className="mt-auto flex justify-center">
                      <div 
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        View Portfolio
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
