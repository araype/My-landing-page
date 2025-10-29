import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HomeHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-8 px-4 md:px-8 py-8 md:py-16 max-w-[1440px] mx-auto">
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block relative w-12 md:w-20 h-auto object-cover flex-shrink-0"
        alt="Imagen vectorizada"
        src="/figmaAssets/imagen-vectorizada.png"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full md:max-w-[500px] justify-center gap-6 md:gap-8 flex flex-col items-start"
      >
        <div className="flex-col items-start gap-4 md:gap-6 w-full flex">
          <img
            className="w-full h-auto max-w-[300px] md:max-w-[400px]"
            alt="Tu hogar crece"
            src="/figmaAssets/tu-hogar-crece-contigo.png"
          />

          <p className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-relaxed">
            <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-base md:text-lg tracking-[0]">
              Una{" "}
            </span>
            <span className="font-bold">vivienda permanente con estructura metálica y sistema mixto de drywall y fibrocemento.</span>
            <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-base md:text-lg tracking-[0]">
              {" "}Construye por etapas, amplía cuando quieras y descubre tu modelo ideal en nuestra plataforma digital
            </span>
          </p>
        </div>

        <Button className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 h-auto rounded-xl [background:url(/figmaAssets/menu.png)_50%_50%_/_cover] [font-family:'Inter',Helvetica] font-medium text-white text-base md:text-lg text-center tracking-[-0.09px] leading-[26.1px] whitespace-nowrap hover:opacity-90 transition-opacity">
          Comenzar mi proyecto
        </Button>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full md:flex-1 md:max-w-[600px] h-auto rounded-2xl object-cover shadow-lg"
        alt="Image"
        src="/figmaAssets/image.png"
      />
    </section>
  );
};
