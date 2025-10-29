import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navigationLinks = [
  {
    label: "¿Quiénes somos?",
    href: "https://www.figma.com/design/DlH7H0Kn3jPBC6xg6BhQNb?node-id=13-3656",
    underline: true,
  },
  {
    label: "¿Cómo funciona?",
    href: null,
    underline: false,
  },
  {
    label: "Sobre la casa",
    href: "https://www.figma.com/design/DlH7H0Kn3jPBC6xg6BhQNb?node-id=14-4862",
    underline: true,
  },
  {
    label: "Financiamiento",
    href: null,
    underline: false,
  },
];

export const IntroductionSection = (): JSX.Element => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white sticky top-0 z-50"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center justify-between px-3 md:px-4 py-2 rounded-2xl backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] [background:url(/figmaAssets/menu.png)_50%_50%_/_cover]">
          <div className="flex items-center gap-2">
            <img
              className="w-[24px] h-[28px] md:w-[31px] md:h-[35.6px]"
              alt="La Mezcladora Logo"
              src="/figmaAssets/group-1140.png"
            />
            <span className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.32px] leading-[22.4px]">
              La Mezcladora home
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link, index) =>
              link.href ? (
                <a
                  key={index}
                  className={`[font-family:'Instrument_Sans',Helvetica] font-medium text-white text-base text-center tracking-[-0.08px] leading-[23.2px] whitespace-nowrap ${
                    link.underline ? "underline" : ""
                  }`}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={index}
                  className="[font-family:'Instrument_Sans',Helvetica] font-medium text-white text-base text-center tracking-[-0.08px] leading-[23.2px] whitespace-nowrap cursor-pointer"
                >
                  {link.label}
                </span>
              ),
            )}

            <Button className="h-auto px-3 py-2 bg-white rounded-lg border border-solid border-[#1519fa] hover:bg-white/90">
              <span className="[font-family:'Instrument_Sans',Helvetica] font-bold text-[#1519fa] text-base text-center tracking-[-0.08px] leading-[23.2px] whitespace-nowrap">
                Cotizar mi proyecto
              </span>
            </Button>
          </div>

          <Button className="flex md:hidden h-auto px-3 py-2 bg-white rounded-lg border border-solid border-[#1519fa] hover:bg-white/90">
            <span className="[font-family:'Instrument_Sans',Helvetica] font-bold text-[#1519fa] text-sm text-center tracking-[-0.08px] leading-[20px] whitespace-nowrap">
              Cotizar
            </span>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};
