import Image from "next/image";
import photo from "../app/public/dev.jpg";
export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={photo}
          layout="fill"
          objectFit="cover"
          alt="Image de fond"
          quality={100}
        />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full lg:px-48  text-left W-3">
        <h1 className="text-5xl font-bold text-green-300">DigiPublic</h1>
        <h2 className="text-4xl font-semibold text-green-400">Bienvenu(e)</h2>
      </div>

      <div className=" bg-[#106A39] relative z-10 flex flex-col items-start justify-center h-full lg:px-48 text-white font-extrabold text-left W-3">
        <p>
          Congolicious Foundation est une organisation non gouvernementale
          Congolaise qui lutte contre la faim en République Démocratique du
          Congo. Nos actions se concen- trent sur la promotion des acteurs
          alimentaires locaux et l’assistance alimentaire pour assurer la
          prospérité de ceux qui se relèvent d’un conﬂit ou subissent les effets
          des inégalités. <br/> <br /> Notre association humanitaire apporte son expertise
          dans le domaine de la nutrition et de la sécurité alimentaire en
          soutenant des agriculteurs, artisans, producteurs ali- mentaires
          locaux, en autonomisant les femmes victimes d’un conﬂit et en ouvrant
          des cantines où sont servis des repas chauds et équilibrés aux
          nécessiteux.euses.
        </p>
      </div>
    </div>
  );
}
