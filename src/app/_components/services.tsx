"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos especificos para cada tipo de pelagem dos animais, corte de unhas, linpezas de orelhas e tosas personalizadas(Higienica ou Estilizada)",
    duration: "1h.",
    price: "R$ 50,00",
    icon: <Scissors />,
    linkText: "Olá vi no site sobre banho e tosa e gostarias de saber mais.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendiento clinico ou especializado para ciudar da saude do animal. Inclui diagnostico de doenças, aplicação de vacinas.",
    duration: "1h",
    price: "R$ 45,00",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre consulta veterinária e gostaria de saber mais.",
  },
  {
    title: "Taxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets ao petshop, clinica veterinaria ou outros locais, Ideal para tutores que não tem tempo ou transporte adequado para locomover os animais",
    duration: "2h",
    price: "R$ 80,00",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre taxi pet e gostaria de saber mais.",
  },
  {
    title: "Hotel Pet",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisem viajar ou se ausentar por algns dias. Os pets ficam acomaodados em espaços seguros, confortaveis",
    duration: "1h",
    price: "R$ 60,00",
    icon: <Hotel />,
    linkText: "Olá, vi no site sobre hotel pet e gostaria de saber mais.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-2">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1 -mt-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        href={`https://wa.me/5541999999999?text=Olá, acessei o site e gostaria de mais informações sobre ${item.title}.`}
                        target="_blank"
                        className="text-white flex items-center justify-center gap-1 hover:bg-green-500 duration-300 rounded-sm px-4 py-1"
                      >
                        <WhatsappLogo className="text-white  w-5 h-5" />
                        Entrar em Contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className=" bg-white flex items-center justify-center rounded-full shadow-ld w-10 h-10 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={scrollNext}
            className=" bg-white flex items-center justify-center rounded-full shadow-ld w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
