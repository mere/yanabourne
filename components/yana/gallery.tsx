"use client";

import Image from 'next/image';
import { Link } from '@/components/utils/link'
import { Lang } from '@/app/[lang]/page'
import galleryDataEn from "@/content/data/en/gallery-section.json";
import galleryDataRu from "@/content/data/ru/gallery-section.json";

interface PortfolioItem {
  id: number;
  src: string;
  width: number;
  height: number;
}

export default function Gallery({ 
  items,
  fieldPath,
  lang
}: { 
  items: PortfolioItem[];
  fieldPath: string;
  lang: Lang;
}) {
  const data = lang === 'ru' ? galleryDataRu : galleryDataEn;

  return (
    <section className="relative" id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          
          {/* Masonry grid */}
          <div className={`columns-1 ${items.length > 1 ? 'sm:columns-2 lg:columns-3' : ''} gap-4 space-y-4`}>
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="break-inside-avoid"
                data-aos="fade-up"
                data-sb-field-path={`${fieldPath}.images.${index}`}
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={`Portfolio item ${item.id}`}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
