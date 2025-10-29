import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const footerLinks = [
  "¿Quiénes somos?",
  "¿Cómo funciona?",
  "Financiamiento",
  "Preguntas frecuentes",
];

const contactInfo = [
  "+ 51 920 046 753",
  "ventures@utec.edu.pe",
  "Jr. Medrano Silva 165, Barranco, Lima , Perú.",
];

const socialIcons = [
  { Icon: FacebookIcon, key: "facebook" },
  { Icon: InstagramIcon, key: "instagram" },
  { Icon: TwitterIcon, key: "twitter" },
  { Icon: LinkedinIcon, key: "linkedin" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 px-6 md:px-16 pt-10 md:pt-20 pb-10 md:pb-[76px]"
    >
      <div className="flex flex-col gap-8 md:gap-[35px] border-t border-[#0000001a]">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[47px] pt-10 md:pt-20">
          <div className="w-full md:w-[521px] flex flex-col items-start gap-6 md:gap-[34px]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px] h-[28px] md:w-[31px] md:h-[35.6px]"
                  alt="Group"
                  src="/figmaAssets/group-1140-1.png"
                />
                <div className="flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-xl text-center tracking-[-0.40px] leading-[29px]">
                  La Mezcladora Home
                </div>
              </div>
              <p className="w-full max-w-[410px] [font-family:'Inter',Helvetica] font-medium text-white text-sm md:text-base tracking-[-0.08px] leading-[23.2px]">
                Democratizando el acceso a una vivienda digna y progresiva en
                Latinoamérica.
              </p>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              {socialIcons.map(({ Icon, key }) => (
                <div
                  key={key}
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[161px] flex-1 w-full">
            <nav className="flex flex-col items-start gap-2 w-full md:w-[174px]">
              <div className="flex items-start pt-0 pb-2 md:pb-4 px-0 w-full">
                <h3 className="flex items-center justify-center w-fit [font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-lg md:text-xl tracking-[-0.10px] leading-[29px] whitespace-nowrap">
                  Enlaces
                </h3>
              </div>
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-start w-full [font-family:'Inter',Helvetica] font-medium text-white text-sm md:text-base tracking-[-0.08px] leading-[23.2px] hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-start gap-2 w-full md:w-auto">
              <div className="flex items-start pt-0 pb-2 md:pb-4 px-0 w-full">
                <h3 className="flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-xl tracking-[-0.10px] leading-[29px] whitespace-nowrap">
                  Contacto
                </h3>
              </div>
              {contactInfo.map((info, index) => (
                <p
                  key={index}
                  className="flex items-center justify-start [font-family:'Inter',Helvetica] font-medium text-white text-sm md:text-base tracking-[-0.08px] leading-[23.2px]"
                >
                  {info}
                </p>
              ))}
            </div>

            <div className="hidden md:flex flex-col items-start gap-[18px] w-[130px]">
              <div className="flex items-start pt-0 pb-4 px-0 w-full">
                <h3 className="flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[-0.10px] leading-[29px] whitespace-nowrap">
                  Síguenos
                </h3>
              </div>
              <div className="flex items-center gap-4">
                {socialIcons.map(({ Icon, key }) => (
                  <div
                    key={key}
                    className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <Button className="w-full h-[45px] bg-white text-[#1519fa] hover:bg-white/90 rounded-lg border border-[#1519fa] [font-family:'Instrument_Sans',Helvetica] font-bold text-base text-center tracking-[-0.08px] leading-[23.2px]">
                Cotizar ahora
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-8 md:gap-[47px] pt-6 md:pt-[35px] border-t border-white">
          <div className="w-full flex flex-col items-start gap-4 md:gap-[34px]">
            <p className="flex items-center justify-start md:justify-center w-full [font-family:'Inter',Helvetica] font-medium text-white text-xs md:text-base tracking-[-0.08px] leading-[23.2px]">
              © 2025 La Mezcladora Home. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
