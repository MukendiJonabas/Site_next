import Image from "next/image";
import photo from "../public/photo.jpg";

const Footer = () => (
  <footer className="bg-black text-white py-4 fixed bottom-0 w-full max-w-auto mx-auto p-4">
    <div className="float-left max-w-md">
      <Image
        src={photo}
        alt="votre photo"
        width={200}
        height={200}
        className="hiden md:block"
      />
      <p>+243 997 679 336</p>
      <p>congoliciousfoundation@gmail.com</p>
    </div>
    <div className="float-right max-w-md ">
      <p style={{ padding: 20 }}>
        Congolicious Foundation est une association sans but lucrative régulée
        par les autorités congolaises. Enregistrée au ministère des affaires
        sociales, actions humanitaires et solidarité nationale sous le numéro
        280/0.E/2022 et au ministère du plan et suivi de la mise en œuvre pour
        la révolution de la modernité sous le numéro 2044/PL/DCRE/22
      </p>
      <p style={{ padding: 20 }}>
        &copy; {new Date().getFullYear()} - Congolicious Foundation. Tous les
        droits sont réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
