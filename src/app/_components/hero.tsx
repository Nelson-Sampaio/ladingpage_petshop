import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";

export function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImg}
          alt="dog"
          className="object-cover opacity-60 lg:hidden"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 ">
            <h1
              className="text-3xl font-bold mb:text-4xl lg:text-x leading-10"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p
              className="lg:text-lg"
              data-aos="fade-up-right"
              data-aos-delay="300"
            >
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade de seu amigo de quatro patas.
            </p>

            <a
              href={`https://wa.me/5541999999999?text=Olá, acessei o site e gostaria de mais informações.`}
              target="_blank"
              className="w-fit bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
              data-aos="zoom-out-left"
              data-aos-delay="400"
            >
              <WhatsappLogo className="w-5 h-5 " />
              Contato via Watsapp
            </a>

            <div className="mt-8 ">
              <p className="text-sm mb-4 ">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de Desconto na primeira compra.
              </p>
              <div className="flex mt-4">
                <div 
                className="w-32 hidden lg:block"
                
                >
                  <Image
                    src={catImg}
                    alt="cat"
                    className="object-fill"
                    quality={100}
                    priority
                    
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="dog"
              className="object-contain"
              fill
              sizes="max-width: 768px 0vw, 50vw"
              quality={100}
              priority
               data-aos="fade-up"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
