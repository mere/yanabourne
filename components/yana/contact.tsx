import Link from "next/link";
import Logo from "../ui/logo";

export default function CtaDark() {
  return (
    <section className="bg-slate-900" id="contact">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative max-w-5xl mx-auto">
            {/* SVG decoration */}

            {/* Grid container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Form */}
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                action="/thank-you"
                className="w-full"
              >
                {/* Hidden input required for Netlify Forms with JS frameworks */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-left text-slate-300 text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 text-white placeholder-slate-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-left text-slate-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 text-white placeholder-slate-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-left text-slate-300 text-sm font-medium mb-1"
                      htmlFor="message"
                    >
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-textarea w-full bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 text-white placeholder-slate-500"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>

              {/* Text content */}
              <div>
                <h2 className="h2 flex font-playfair-display text-slate-100 mb-4 relative">
                  Get in touch!
                  <div
                    className=" fill-slate-300 -mt-5 hidden lg:block"
                    aria-hidden="true"
                  >
                    <svg className="fill-slate-600" width="56" height="43">
                      <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
                    </svg>
                  </div>
                </h2>

                <p className="text-xl text-slate-400">
                  I'm always happy to connect with new people and discuss
                  potential collaborations. Whether you have questions about my
                  work, want to explore working together, or just want to say
                  hello - I'd love to hear from you!
                </p>
                <Logo
                  title="Yana"
                  className="text-4xl w-full text-right pr-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
