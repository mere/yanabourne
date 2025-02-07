"use client";

import Image from 'next/image';

interface PortfolioItem {
  id: number;
  src: string;
  width: number;
  height: number;
}

export default function Gallery({ items }: { items: PortfolioItem[] }) {
  return (
    <section className="relative " id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          
          {/* Masonry grid */}
          <div className={`columns-1 ${items.length > 1 ? 'sm:columns-2 lg:columns-3' : ''} gap-4 space-y-4`}>
            {items.map((item) => (
              <div 
                key={item.id} 
                className="break-inside-avoid"
                data-aos="fade-up"
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
