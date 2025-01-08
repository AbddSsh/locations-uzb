import {
  LocationContentImage,
  LocationContentType,
  LocationContentVideo,
  LocationPageContent,
  LocationContentText,
} from "@entities/location";
import { FC } from "react";

interface LocationContentProps {
  location: LocationPageContent;
}

export const LocationContent: FC<LocationContentProps> = ({ location }) => {
  return (
    <section className="container mt-[15px] md:mt-0">
      <div className="grid grid-flow-row md:gap-10 gap-6">
        <div className="block w-full h-full">
          <img
            src={location?.image_url}
            alt="preview"
            className="w-full h-full"
          />
        </div>
        <div className="grid grid-flow-row md:gap-4 gap-2">
          <h1 className="text-lg md:text-3xl font-medium text-main-blue leading-none">
            {location?.title}
          </h1>
          <p className="text-xs md:text-sm text-main-grey md:font-medium font-light">
            {location?.date}
          </p>
          <p className="text-xs md:text-base font-normal">
            {location?.description}
          </p>
        </div>
      </div>
      <div className="mt-[40px] md:mt-[80px] grid grid-flow-row gap-5 md:gap-10">
        {location?.content?.map((content, index) => {
          switch (content.type) {
            case LocationContentType.photo:
              return (
                <LocationContentImage key={index} content={content.content} />
              );
            case LocationContentType.video:
              return (
                <LocationContentVideo key={index} content={content.content} />
              );
            case LocationContentType.text:
              return (
                <LocationContentText key={index} content={content.content} />
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};
