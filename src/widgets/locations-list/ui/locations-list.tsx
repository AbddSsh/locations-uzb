import { LocationCard, LocationPreview } from "@entities/location";
import { FC } from "react";

interface LocationsListProps {
  locations: LocationPreview[];
}

export const LocationsList: FC<LocationsListProps> = ({ locations }) => {
  return (
    <section className="container">
      <div className="grid gap-6 lg:gap-8 grid-cols-1 mobile-xl:grid-cols-2">
        {locations?.map((location) => (
          <LocationCard location={location} key={location?.id} />
        ))}
      </div>
    </section>
  );
};
