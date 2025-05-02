"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import tutor1 from "../../../public/tutor1.png";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Adoro trazer meu cachorro aqui! O atendimento é incrível e os banhos deixam ele cheiroso por dias.",
    author: "Carlos Silva",
    role: "Tutor do Thor (Pastor Alemão)",
    image: tutor1,
  },
  {
    content:
      "Minha gata é bastante arisca, mas a equipe do pet shop sabe como lidar com ela com muita paciência.",
    author: "Ana Oliveira",
    role: "Tutora da Luna (Siamês)",
    image: tutor1,
  },
  {
    content:
      "Como veterinária, recomendo este pet shop pelos altos padrões de higiene e profissionalismo.",
    author: "Dra. Fernanda Costa",
    role: "Veterinária do Rex (Bulldog Francês)",
    image: tutor1,
  },
  {
    content:
      "O serviço de tosa é perfeito! Meu poodle sempre volta com o corte exatamente como eu pedi.",
    author: "Roberto Santos",
    role: "Tutor do Max (Poodle Toy)",
    image: tutor1,
  },
  {
    content:
      "Trabalho aqui há 3 anos e amo ver a satisfação dos clientes e seus pets após nossos serviços.",
    author: "Juliana Alves",
    role: "Tosadora do Bento (Coelho Lionhead)",
    image: tutor1,
  },
  {
    content:
      "A loja tem uma variedade incrível de produtos. Sempre encontro o que preciso para meu furão.",
    author: "Mariana Lima",
    role: "Tutora do Loki (Furão)",
    image: tutor1,
  },
  {
    content:
      "Nosso diferencial é tratar cada animal como se fosse nosso próprio pet, com amor e atenção.",
    author: "Dr. Marcelo Vieira",
    role: "Veterinário da Maya (Calopsita)",
    image: tutor1,
  },
  {
    content:
      "O hotel para pets salvou minhas férias! Sabia que meu jabuti estava em boas mãos.",
    author: "Pedro Henrique",
    role: "Tutor do Sheldon (Jabuti-Piranga)",
    image: tutor1,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className=" bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">
          Depoimentos dos Nossos Clientes
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 ">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <p className="text-gray-200">{item.content}</p>

                     <div>
                     <p className="font-bold ">{item.author}</p>
                     <p className="text-gray-200 ">{item.role}</p>
                     </div>

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
