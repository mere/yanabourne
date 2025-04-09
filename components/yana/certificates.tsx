import Image from "next/image";
import { Link } from "@/components/utils/link";
import { Lang } from "@/app/[lang]/page";
import certificatesDataEn from "@/content/data/en/certificates-section.json";
import certificatesDataRu from "@/content/data/ru/certificates-section.json";
import LightBoxHelper from "../utils/LightBoxHelper";

export default function Certificates({ lang }: { lang: Lang }) {
  const data = lang === "ru" ? certificatesDataRu : certificatesDataEn;

  return (
    <section className="bg-slate-50" id="certificates">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              {data.heading}
            </h2>
          </div>
          {/* Testimonials container */}
          <div
            className="max-w-sm mx-auto sm:max-w-none columns-3 lg:columns-4 gap-4 md:gap-8 mb-12 md:mb-16"
            data-aos-id-testimonials
          >
            {data.certificates.map((certificate, index) => (
              <article
                key={index}
                className={`flex flex-col rounded-lg overflow-hidden shadow-xl bg-slate-100 ring-4 md:ring-8 mb-4 md:mb-8 ring-slate-200 ${
                  index === 1 ? "lg:break-after-column" : ""
                }`}
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-testimonials]"
                data-sb-field-path={`certificates.${index}`}
              >
                <a
                  href={certificate.src}
                  className="lightbox"
                  data-group="certificates"
                >
                  <Image
                    src={certificate.src}
                    alt={certificate.title}
                    className="w-full h-auto"
                    width={300}
                    height={100}
                  />
                </a>
                {(certificate.title || certificate.date) && (
                  <footer className="text-sm font-medium p-2 text-center">
                    <div
                      className="text-slate-500"
                      data-sb-field-path={`certificates.${index}.title`}
                    >
                      {certificate.title}
                    </div>
                    <div
                      className="text-slate-800"
                      data-sb-field-path={`certificates.${index}.date`}
                    >
                      {certificate.date}
                    </div>
                  </footer>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
      <LightBoxHelper />
    </section>
  );
}
