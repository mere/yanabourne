import Image from "next/image";
import locationsDataEn from "@/content/data/en/locations-section.json";
import locationsDataRu from "@/content/data/ru/locations-section.json";
import { Link } from '@/components/utils/link'
import { Lang } from '@/app/[lang]/page'

export default function Locations({ lang }: { lang: Lang }) {
  const data = lang === 'ru' ? locationsDataRu : locationsDataEn;

  return (
    <section className="bg-slate-100" id="locations" data-sb-object-id="content/data/locations-section.json">
      <div className="max-w-3xl mx-auto text-center pt-24 mb-6">
        <h2 className="h2 font-playfair-display text-slate-800" data-sb-field-path="heading">{data.heading}</h2>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          {/* Locations */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-20 md:grid-cols-2 items-start mb-12 md:mb-20">
            {data.locations.map((location, index) => (
              <div
                key={location.city}
                className="h-full flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index === 0 ? 300 : 100}
                data-sb-field-path={`locations.${index}`}
              >
                <div className="inline-flex w-[62px] h-[62px] mb-4">
                  <Image
                    src={location.icon}
                    alt={`${location.city} office`}
                    width={62}
                    height={62}
                    className="fill-blue-600"
                    data-sb-field-path=".icon"
                  />
                </div>
                <h4 className="h4 font-playfair-display text-slate-800 mb-2" data-sb-field-path=".city">
                  {location.city}
                </h4>
                <div className="font-sm font-medium text-slate-800" data-sb-field-path=".role">
                  {location.role}
                </div>
                <div className="font-sm font-medium text-slate-600 mb-4" data-sb-field-path=".experience">
                  {location.experience}
                </div>
                <div className="grow text-slate-500 mb-2">
                  {location.description.map((paragraph, pIndex) => (
                    <p key={pIndex} data-sb-field-path={`.description.${pIndex}`}>
                      {paragraph}
                      {pIndex < location.description.length - 1 && <br />}
                      <br />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
