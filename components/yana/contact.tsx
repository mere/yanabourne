'use client';

import Logo from "../ui/logo";
import { useState } from "react";
import Image from "next/image";
import contactDataEn from "@/content/data/en/contact-section.json";
import contactDataRu from "@/content/data/ru/contact-section.json";
import { Link } from '@/components/utils/link'
import { Lang } from '@/app/[lang]/page'

export default function Contact({ lang = 'en' }: { lang?: Lang }) {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const contactContent = lang === 'ru' ? contactDataRu : contactDataEn;

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target as HTMLFormElement;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  return (
    <section 
      className="bg-slate-900" 
      id="contact" 
      data-sb-object-id={`content/data/${lang}/contact-section.json`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative max-w-5xl mx-auto">
            {/* Grid container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {status === 'ok' ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  <h3 className="font-bold" data-sb-field-path="form.successMessage.title">{contactContent.form.successMessage.title}</h3>
                  <p data-sb-field-path="form.successMessage.description">{contactContent.form.successMessage.description}</p>
                </div>
              ) : (
                <form 
                  name="contact-form"
                  onSubmit={handleFormSubmit}
                  className="w-full"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-left text-slate-300 text-sm font-medium mb-1"
                        htmlFor="name"
                        data-sb-field-path="form.name.label"
                      >
                        {contactContent.form.name.label} <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 text-white placeholder-slate-500"
                        placeholder={contactContent.form.name.placeholder}
                        required={contactContent.form.name.required}
                        data-sb-field-path="form.name.placeholder"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-left text-slate-300 text-sm font-medium mb-1"
                        htmlFor="email"
                        data-sb-field-path="form.email.label"
                      >
                        {contactContent.form.email.label} <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 text-white placeholder-slate-500"
                        placeholder={contactContent.form.email.placeholder}
                        required={contactContent.form.email.required}
                        data-sb-field-path="form.email.placeholder"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-left text-slate-300 text-sm font-medium mb-1"
                        htmlFor="message"
                        data-sb-field-path="form.message.label"
                      >
                        {contactContent.form.message.label} <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="form-textarea w-full bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 text-white placeholder-slate-500"
                        placeholder={contactContent.form.message.placeholder}
                        required={contactContent.form.message.required}
                        data-sb-field-path="form.message.placeholder"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        disabled={status === 'pending'}
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full disabled:opacity-50"
                      >
                        {status === 'pending' ? contactContent.form.submitButton.loadingText : contactContent.form.submitButton.text}
                      </button>
                    </div>
                  </div>
                  
                  {status === 'error' && (
                    <div className="mt-4 text-red-500 text-sm" data-sb-field-path="form.errorMessage">
                      {contactContent.form.errorMessage}
                      
                    </div>
                  )}
                </form>
              )}

              {/* Text content */}
              <div>
                <h2 className="text-4-5xl flex text-slate-100 mb-4 relative" data-sb-field-path="heading">
                  {contactContent.heading}
                  <div className="fill-slate-300 -mt-5 hidden lg:block" aria-hidden="true">
                    <svg className="fill-slate-600" width="56" height="43">
                      <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
                    </svg>
                  </div>
                </h2>

                <p className="text-xl text-slate-400" data-sb-field-path="description">
                  {contactContent.description}
                </p>
                <div className="relative w-42 h-42 mx-auto my-4">
                  <Image 
                    src={contactContent.image.src}
                    alt={contactContent.image.alt}
                    width={contactContent.image.width}
                    height={contactContent.image.height}
                    className="rounded-full object-cover w-full h-full border-4 border-slate-600"
                    data-sb-field-path="image"
                  />
                  <Logo
                    lang={lang}
                    title="Yana"
                    className="text-4xl w-full text-center"
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
