"use client";

import { useState } from "react";
import Image from "next/image";
import microscope from "@/public/images/yana/microscope.jpg";
import contentEn from "@/content/data/en/home.json";
import contentRu from "@/content/data/ru/home.json";
import { Lang } from '@/app/[lang]/page'

export default function FeaturesHome({ lang }: { lang: Lang }) {
  const [tab, setTab] = useState<number>(1);
  const content = lang === 'ru' ? contentRu : contentEn;

  return (
    <section className="relative" id="about" data-sb-object-id="content/data/home.json">
      <div
        className="absolute inset-0  pointer-events-none mb-64 md:mb-80"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 
              className="h2 font-playfair-display text-slate-600 mb-4"
              data-sb-field-path="header.title"
            >
              {content.header.title}
            </h2>
            <p 
              className="text-xl text-slate-700"
              data-sb-field-path="header.introduction"
            >
              {content.header.introduction}
            </p>

            <div className="my-12 border-t border-slate-200" />
          </div>

          {/* 1st Segment */}
          <div className="flex flex-col-reverse md:flex-row-reverse md:items-center gap-12">
            {/* Content */}
            <div className="" data-aos="fade-left">
              <h2 
                className="h3 md:text-4xl font-playfair-display mb-4"
                data-sb-field-path="story.title"
              >
                {content.story.title}
              </h2>
              {content.story.content.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-lg text-slate-700 ${index > 0 ? 'mt-4' : ''}`}
                  data-sb-field-path={`story.content[${index}]`}
                >
                  {paragraph}
                </p>
              ))}
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
