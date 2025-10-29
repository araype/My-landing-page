import React from "react";
import { motion } from "framer-motion";

export const PartnersSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-black text-xl md:text-2xl text-center tracking-[-0.5px] leading-[normal] mb-8 md:mb-12"
        >
          Nuestros aliados
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center overflow-x-auto"
        >
          <img
            src="/figmaAssets/logos.svg"
            alt="Nuestros aliados: Citi Foundation, VTG Ventures, UTEC, La Maculadura"
            className="w-full max-w-[800px] md:max-w-4xl h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      </div>
    </section>
  );
};
