import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import pedigree from "../../../public/pedigree.png";
import premier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import royal from "../../../public/royal.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Premier", logo: premier },
  { name: "Formula Natural", logo: natural },
  { name: "Wiskas", logo: whiskas },
  { name: "Pedigree", logo: pedigree },
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-center text-3xl font-semibold mb-8">
            Nossos Parceiros
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center object-cover  hover:scale-110 duration-300"
                 
                 data-aos="zoom-in-up"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-on-scroll="true"
                 
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                   
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Pet Shop </h3>
              <p className="mb-4">Cuidando do seu melhor amigo</p>
              <a
                href={`https://wa.me/5541999999999?text=Olá, acessei o site e gostaria de mais informações.`}
                target="_blank"
                className="bg-green-500 px-4 py-2 rounded-md "
              >
                Contato via Whatsapp
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Contatos </h3>
              <p>E-mail: teste@teste.com.br </p>
              <p>Telefone: (00) 0000-0000 </p>
              <p>Endereço: rua teste, nº 0 Cidade-Estado </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Redes Sociais </h3>
              <div className="flex gap-4">
                <a href="#" target="_blank">
                  <FacebookLogo className="w-8 h-8" />
                </a>
                <a href="#" target="_blank">
                  <InstagramLogo className="w-8 h-8" />
                </a>
                <a href="#" target="_blank">
                  <YoutubeLogo className="w-8 h-8" />
                </a>
                <a href="#" target="_blank">
                  <XLogo className="w-8 h-8" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
