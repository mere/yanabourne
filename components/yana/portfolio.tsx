"use client";

import Image from 'next/image';

export default function Portfolio() {
  // Array of placeholder images with varying heights
  const portfolioItems = [
    { id: 1, src: 'https://placehold.co/600x400', width: 600, height: 400 },
    { id: 2, src: 'https://placehold.co/600x600', width: 600, height: 600 },
    { id: 3, src: 'https://placehold.co/600x500', width: 600, height: 500 },
    { id: 4, src: 'https://placehold.co/600x700', width: 600, height: 700 },
    { id: 5, src: 'https://placehold.co/600x450', width: 600, height: 450 },
    { id: 6, src: 'https://placehold.co/600x550', width: 600, height: 550 },
    { id: 7, src: 'https://placehold.co/600x650', width: 600, height: 650 },
    { id: 8, src: 'https://placehold.co/600x400', width: 600, height: 400 },
    { id: 9, src: 'https://placehold.co/600x500', width: 600, height: 500 },
    { id: 10, src: 'https://placehold.co/600x600', width: 600, height: 600 },
    { id: 11, src: 'https://placehold.co/600x450', width: 600, height: 450 },
    { id: 12, src: 'https://placehold.co/600x700', width: 600, height: 700 }
  ];

  return (
    <section className="relative" id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Portfolio</h2>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioItems.map((item) => (
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
                  <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-40 transition duration-700 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
