import { FC } from "react";
import Autoplay from "embla-carousel-autoplay";
import { LocationPreview } from "@entities/location";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@shared/ui";
import { Link } from "react-router-dom";
import { paths } from "@shared/routing";

interface MainSliderProps {
  locations: LocationPreview[];
}

export const MainSlider: FC<MainSliderProps> = ({ locations }) => {
  return (
    <Carousel
      className="w-full mx-auto mb-10 mobile-xl:mb-[60px] md:mb-[80px] lg:mb-[120px]"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {locations?.map((location, index) => (
          <CarouselItem key={index}>
            <Link
              to={`${paths.location}/${location?.id}`}
              className="block w-[100vw] md:h-[80svh] mobile-xl:h-[60svh] h-[40svh]"
            >
              <img
                src={location?.image_url}
                alt="location image"
                className="w-full h-full object-cover"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
