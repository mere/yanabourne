import Image from "next/image";
import TeamImage01 from "@/public/images/team-01.jpg";
import TeamImage02 from "@/public/images/team-02.jpg";
import TeamImage03 from "@/public/images/team-03.jpg";
import LondonIcon from "@/public/images/yana/london.svg";
import MoscowIcon from "@/public/images/yana/moscow.svg";

export default function Locations() {
  return (
    <section className="bg-slate-100" id="locations">
      <div className="max-w-3xl mx-auto text-center pt-24 mb-6">
        <h2 className="h2 font-playfair-display text-slate-800">Locations</h2>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          {/* Locations */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-20 md:grid-cols-2 items-start mb-12 md:mb-20">
            {/* Location - Moscow */}
            <div
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="inline-flex w-[62px] h-[62px] mb-4">
                <Image
                  src={MoscowIcon}
                  alt="Moscow office"
                  width={62}
                  height={62}
                  className="fill-blue-600"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">
                Moscow
              </h4>
              <div className="font-sm font-medium text-slate-800">
                General Dentist & Endodontist
              </div>
              <div className="font-sm font-medium text-slate-600 mb-4">
                18 Years of experience
              </div>
              <div className="grow text-slate-500 mb-2">
                <p>
                  Throughout my career in Moscow, I have maintained a commitment
                  to continuous professional development, attending numerous
                  international dental conferences and specialized training
                  programs.
                </p>
                <br />
                <p>
                  My work focused on advanced endodontic procedures,
                  microscope-assisted dentistry, and the latest techniques in
                  dental therapy. I've participated in workshops and seminars
                  across Europe and Russia, staying at the forefront of dental
                  innovations and best practices. This dedication to learning
                  has enabled me to provide comprehensive, state-of-the-art
                  dental care while adapting to evolving industry standards.
                </p>
              </div>
            </div>

            {/* Location - London */}
            <div
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="inline-flex w-[62px] h-[62px] mb-4">
                <Image
                  src={LondonIcon}
                  alt="London office"
                  width={62}
                  height={62}
                  className="fill-blue-600"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">
                London
              </h4>
              <div className="font-sm font-medium text-slate-800">
                Dental Therapist
              </div>
              <div className="font-sm font-medium text-slate-600 mb-4">
                Starting my registration in 2025
              </div>
              <div className="grow text-slate-500 mb-2">
                Having recently relocated to London, I bring nearly two decades
                of advanced dental expertise from Moscow, specializing in modern
                general dentistry and endodontics. My practice incorporates
                cutting-edge techniques and the latest dental technologies.
                <br />
                <br />
                As I complete my UK dental registration, I'm excited to serve
                London patients as a Dental Therapist before I become a Dentist.
                Drawing on 20 years of experience, I remain committed to
                providing exceptional dental care while staying at the forefront
                of dental innovations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
