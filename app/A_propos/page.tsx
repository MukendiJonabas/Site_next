import Image from "next/image";
import photo from "../public/dev.jpg";
import Tec from '../public/Tec.jpg'
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

      <div className=" flex flex-col items-start justify-center h-full lg:px-48  text-left W-3">
        <h1 className="text-5xl font-bold text-green-300">DiKININIc</h1>
        <h2 className="text-4xl font-semibold text-green-400">Bienvenu(e)</h2>
      </div>

      <div className=" bg-[#106A39] flex flex-col items-start justify-center h-full lg:px-48 text-white font-extrabold pt-10 W-3 py-4 px-3 text-left ">
        <p>
        Digi Public est une société spécialisée dans les solutions digitales innovantes, dédiée à accompagner les entreprises dans leur transformation numérique. Nous proposons une gamme complète de services, allant du développement d'applications web et mobiles à la gestion de projets de transformation digitale. <br /> <br /> Grâce à une équipe d'experts passionnés, nous créons des expériences utilisateur uniques, optimisées pour stimuler la croissance et améliorer l’efficacité opérationnelle. Notre approche est centrée sur l'innovation, la personnalisation et l’adaptabilité, afin de répondre aux besoins spécifiques de chaque client.
        </p>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

{/* Colonne de gauche (texte) */}
<div className="md:w-1/2 bg-lime-400 text-green-900 p-10">
  <h1 className="text-2xl md:text-3xl font-bold mb-4">
    Aussi longtemps que l'injustice durera.
  </h1>
  <p className="text-lg md:text-xl font-semibold">
    Nous multiplierons des gestes d'amour pour sauver des vies.
  </p>
</div>

{/* Colonne de droite (image) */}
<div className="md:w-1/2">
  <Image
    src={Tec}  // Remplacer avec le chemin correct de votre image
    width={500}
    height={500}
    objectFit="cover"
    alt="Image de l'injustice"
  />
</div>
</div>
      <p>Avec nous, bénéficiez d’un service informatique fiable, proactif et centré sur la satisfaction client.</p>
      </div>
    
    </div>
  );
}
