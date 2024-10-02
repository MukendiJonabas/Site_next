import Link from "next/link";
import logo2 from "../public/logo2.jpeg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-[#106A39] w-full p-5 flex justify-between items-center lg:px-48 text-white text-xs md:text-xl font-extrabold">
      <Link href={"/"}>
        <Image src={logo2} alt="" className="w-20" />
      </Link>
      <div className="flex gap-8">
        <Link href="/A_propos" className="Kanit">
          NOUS DECOUVRIR
        </Link>
        <Link href="/projet">PROJETS & PROGRAMMES</Link>
        <Link href="/don" className="text-lime-300">
          FAIRE UN DON
        </Link>
      </div>
    </div>
  );
}
