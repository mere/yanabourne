"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function LanguageSelector() {
  const pathname = usePathname();
  const languages = [
    { code: "en", name: "en", flag: "/images/flags/en.svg" },
    { code: "ru", name: "ru", flag: "/images/flags/ru.svg" },
  ];

  const currentLang = pathname.startsWith("/ru") ? "ru" : "en";
  const [selected, setSelected] = useState(currentLang === "en");

  // Create new path by replacing language code
  const getNewPath = (langCode: string) => {
    return (
      pathname.replace(/^\/(en|ru)/, `/${langCode}`) + window.location.hash
    );
  };

  // Change language
  const changeLanguage = (langCode: string) => {
    if (langCode !== currentLang) {
      window.location.href = getNewPath(langCode);
    }
  };

  const toggleLanguage = async () => {
    const newLang = selected ? "ru" : "en";
    setSelected(!selected);
    await new Promise(resolve => setTimeout(resolve, 150));
    changeLanguage(newLang);
  };

  return (
    <div className="w-full max-w-sm flex flex-col mx-auto text-center text-sm ">
      <div className="relative w-full rounded-md border py-1 bg-gray-200 h-8">
        <div className=" w-full h-full flex items-center">
          <div
            onClick={toggleLanguage}
            className="w-full flex justify-center text-gray-400 cursor-pointer items-center px-2"
          >
            <Image src={languages[0].flag} alt={languages[0].name} width={24} height={12} className="h-[12px] w-[24px]" />
            
          </div>
          <div
            onClick={toggleLanguage}
            className="w-full flex justify-center text-gray-400 cursor-pointer items-center px-2"
          >
            <Image src={languages[1].flag} alt={languages[1].name} width={24} height={12} className="h-[12px] w-[24px] " />
          </div>
        </div>

        <span
          className={`bg-white top-0.5 bottom-0.5 text-gray-800 font-semibold shadow text-sm flex items-center justify-center rounded transition-all duration-150 ease-linear absolute mix-blend-overlay ${
            selected
              ? "left-0.5 right-1/2"
              : "left-1/2 right-0.5 "
          }`}
        >
          
          
        </span>
      </div>
    </div>
  );
}
