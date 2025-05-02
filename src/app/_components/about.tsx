import Image from "next/image";

import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check } from "lucide-react";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16 text-white">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"  >
          <div className="relative">
            <div className="relative w-full h-[400px] rounded overflow-hidden">
              <Image
                className="object-cover hover:scale-110 duration-300"
                src={about1Img}
                alt="dog"
                fill
                quality={100}
                priority
              />
            </div>

            <div className="absolute w-40 h-40 rounded-lg border-3 border-white right-3 -bottom-6 overflow-hidden">
              <Image src={about2Img} alt="cat" fill quality={100} priority />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold text-black">Sobre</h2>

            <p className="text-black">
              Nossa equipe é formada por profissionais apaixonados por animais,
              prontos para atender com carinho e expertise. Desde banhos e tosas
              relaxantes até consultas veterinárias e uma seleção premium de
              rações e acessórios, tudo é pensado para proporcionar o melhor
              cuidado ao seu amigo de quatro patas.
            </p>
            <ul>
              <li className="text-black flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="text-black flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinarios
              </li>
              <li className="text-black flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade no atendimento é nossa prioridade
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#e84c3d] text-white  flex items-center justify-center w-fit px-4 py-2 rounded-md gap-2"
              >
                <WhatsappLogo className="h-5 w-5 text-white" />
                Contato via Whatsapp
              </a>
              <a
                href="#"
                className="text-black flex items-center justify-center w-fit px-4 py-2 rounded-md gap-2"
              >
                <MapPin className="h-5 w-5 text-black" />
                Localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
