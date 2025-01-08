import { FC } from "react";
import { LocationPreview } from "../types";
import { Link } from "react-router-dom";
import { paths } from "@shared/routing";

interface LocationCardProps {
  location: LocationPreview;
}

export const LocationCard: FC<LocationCardProps> = ({ location }) => {
  return (
    <Link
      to={`${paths.location}/${location?.id}`}
      className="cursor-pointer [&>div>img]:hover:scale-[1.01] [&>div>img]:hover:rounded-[0px] grid grid-rows-[auto,1fr] gap-2"
    >
      <div className="w-full h-full md:max-h-[20vw] mobile-xl:max-h-[40vw] max-h-[50vw]">
        <img
          src={location?.image_url}
          alt="location image"
          className="w-full h-full object-cover transition-all duration-500 rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-main-blue text-base md:text-xl">
          {location?.title}
        </h3>
        <p className="font-light text-main-grey text-xs md:text-sm">
          {location?.date}
        </p>
        <p className="font-medium text-white text-sm md:text-base line-clamp-4">
          {location?.description}
        </p>
      </div>
    </Link>
  );
};
