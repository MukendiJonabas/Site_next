import Image from "next/image";

import Syc from "../app/public/Sycamore.jpg";
export default function Home() {
  return (
    <div className="absolute inset-0">
      <Image
        src={Syc}
        layout="fill"
        objectFit="cover"
        alt="image"
        quality={100}
      />
    </div>
  );
}
