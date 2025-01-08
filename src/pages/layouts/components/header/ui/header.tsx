import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { paths } from "@shared/routing";
import { SocialMediaLinks } from "@shared/config";

export const Header = () => {
  return (
    <header className="p-[12px] md:p-[30px]">
      <section className="grid grid-flow-col gap-4 justify-center items-center">
        <Link
          to={paths.home}
          className="flex justify-start items-center gap-2 cursor-pointer"
        >
          <MapPin className="w-6 h-6" />
          <p className="font-semibold text-base md:text-xl">Locations Uzb</p>
        </Link>
        <div className="grid grid-flow-col gap-2 items-center">
          <Link
            to={SocialMediaLinks.instagram}
            target="_blank"
            className="block w-[26.5px] h-[26.5px] hover:scale-[1.1] duration-500"
          >
            <img
              src="/instagram.svg"
              alt="telegram icon"
              className="w-[26.5px] h-[26.5px]"
            />
          </Link>
          <Link
            to={SocialMediaLinks.telegram}
            target="_blank"
            className="block w-8 h-8 hover:scale-[1.1] duration-500"
          >
            <img src="/telegram.svg" alt="telegram icon" className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </header>
  );
};
