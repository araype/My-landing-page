import React from "react";
import { motion } from "framer-motion";

const stepsData = [
  {
    number: "1",
    title: "Completa el\nformulario",
    description: (
      <>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          Ingresa información sobre t
        </span>
        <span className="font-bold">
          u terreno, presupuesto y necesidades de espacio.
        </span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          {"  "}Nuestra plataforma analiza tus respuestas y comienza a
          seleccionar el modelo ideal para ti.
        </span>
      </>
    ),
    image: "/figmaAssets/imagen-step-1.png",
    imageWidth: "w-[304px]",
    imageHeight: "h-[323px]",
    textAlign: "text-left",
    layout: "left",
    descriptionWidth: "w-[311px]",
    hasLink: false,
  },
  {
    number: "2",
    title: "Recibe tu\nmodelo",
    description: (
      <>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          En segundos,{" "}
        </span>
        <span className="font-bold">
          nuestra app te sugiere el modelo de vivienda
        </span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          {" "}
          que mejor se adapta a ti. Podrás explorar tu vivienda en un visor 3D y
          los
        </span>
        <span className="font-bold"> planos por etapas</span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          , desde el primer piso hasta las expansiones futuras
        </span>
      </>
    ),
    image: "/figmaAssets/imagen-step-2.png",
    imageWidth: "w-[413px]",
    imageHeight: "h-[266px]",
    textAlign: "text-right",
    layout: "right",
    descriptionWidth: "w-[275px]",
    hasLink: false,
  },
  {
    number: "3",
    title: "Te cotizamos y\nfinanciamos",
    description: (
      <>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          Obtén tu{" "}
        </span>
        <span className="font-bold">cotización por etapas</span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          : primer piso, expansiones o vivienda completa.{"  "}
        </span>
        <span className="font-bold">Te guiamos para acceder a un crédito</span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          {" "}
          o plan de ahorro que te permita empezar tu proyecto de manera segura y
          progresiva
        </span>
      </>
    ),
    image: "/figmaAssets/imagen-step-3.png",
    imageWidth: "w-[289px]",
    imageHeight: "h-[401px]",
    textAlign: "text-left",
    layout: "left",
    descriptionWidth: "w-[311px]",
    hasLink: false,
  },
  {
    number: "4",
    title: "Construimos tu\nvivienda",
    description: (
      <>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          Hacemos realidad tu proyecto con un{" "}
        </span>
        <span className="font-bold">sistema mixto estructural</span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          : estructura metálica, muros de fibrocemento, tabiquería en drywall y
          losas colaborantes. Un
        </span>
        <span className="font-bold">
          {" "}
          sistema resistente, duradero y preparado para crecer contigo
        </span>
        <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0]">
          .
        </span>
      </>
    ),
    image: "/figmaAssets/imagen-step-4.png",
    imageWidth: "w-[162px]",
    imageHeight: "h-[281px]",
    textAlign: "text-right",
    layout: "right",
    descriptionWidth: "w-[291px]",
    hasLink: true,
    linkText: "Saber más →",
    linkUrl:
      "https://www.figma.com/design/DlH7H0Kn3jPBC6xg6BhQNb?node-id=14-4862",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-6 md:gap-8 bg-white py-12 md:py-20 px-4 md:px-8">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-center"
      >
        <h2 className="[font-family:'Instrument_Sans',Helvetica] font-bold text-black text-3xl md:text-5xl text-center tracking-[-1.20px] leading-tight md:leading-[52.8px]">
          ¿Cómo funciona?
        </h2>
      </motion.header>

      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[1200px] mx-auto">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex flex-col md:flex-row items-center w-full ${step.layout === "left" ? "md:gap-6" : "md:gap-8"} gap-4 relative`}
          >
            {step.layout === "right" && (
              <img
                className="hidden md:block w-[132px] h-[482px] object-cover flex-shrink-0"
                alt="Imagen vectorizada"
                src="/figmaAssets/imagen-vectorizada-peque-a-3.png"
              />
            )}

            <img
              className={`md:hidden w-full max-w-[250px] h-auto object-cover`}
              alt={`Imagen step ${step.number}`}
              src={step.image}
            />

            {step.layout === "right" && (
              <img
                className={`hidden md:block ${step.imageWidth} ${step.imageHeight} object-cover flex-shrink-0`}
                alt={`Imagen step ${step.number}`}
                src={step.image}
              />
            )}

            <div className="relative w-full md:w-[502px] md:h-[333px] flex-shrink-0">
              <div className="flex flex-col md:block w-full md:w-auto">
                <div className="flex w-16 h-14 md:w-[84px] md:h-[77px] items-center justify-center md:px-[17px] md:py-[15px] md:absolute md:top-[26px] md:left-0 relative mb-4 md:mb-0">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Ellipse"
                    src="/figmaAssets/menu.png"
                  />
                  <div className="relative [font-family:'Instrument_Sans',Helvetica] font-bold text-white text-2xl md:text-4xl tracking-[0] leading-[normal] flex items-center justify-center z-10">
                    {step.number}
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-[501px] items-start gap-4 md:gap-[41px] md:absolute md:top-1.5 md:left-[102px]">
                  <h3 className="w-full md:w-[464px] [font-family:'Instrument_Sans',Helvetica] font-bold text-black text-2xl md:text-[32px] tracking-[0] leading-[normal] whitespace-pre-line">
                    {step.title}
                  </h3>

                  <div className="flex flex-col w-full gap-2.5">
                    <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-[normal]">
                      {step.description}
                    </div>
                    {step.hasLink && (
                      <a
                        className="w-full md:w-[284px] [font-family:'Instrument_Sans',Helvetica] font-normal text-black text-base md:text-lg text-left md:text-right tracking-[0] leading-[normal] underline"
                        href={step.linkUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {step.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {step.layout === "left" && (
              <img
                className={`hidden md:block ${step.imageWidth} ${step.imageHeight} -ml-0.5 object-cover flex-shrink-0`}
                alt={`Imagen step ${step.number}`}
                src={step.image}
              />
            )}

            {step.layout === "left" && (
              <img
                className="hidden md:block w-[132px] h-[482px] -ml-0.5 object-cover flex-shrink-0"
                alt="Imagen vectorizada"
                src="/figmaAssets/imagen-vectorizada-peque-a-3.png"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
