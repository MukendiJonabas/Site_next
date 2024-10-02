// components/ImageComponent.js
import Image from "next/image";
import Sycamore from "../public/Sycamore.jpg";

const ImageComponent = () => {
  return (
    <Image
      src={Sycamore}
      alt="Description de l'image"
      width={500}
      height={500}
      objectFit="cover"
    />
  );
};

export default ImageComponent;
