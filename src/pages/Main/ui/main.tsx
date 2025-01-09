import { LocationPreview, useGetLocationsQuery } from "@entities/location";
import { LocationsList } from "@widgets/locations-list";
import { MainSlider } from "@widgets/main-slider";
import { Loader } from "@shared/ui";

export const MainPage = () => {
  const { data: locations, isLoading, isFetching } = useGetLocationsQuery();
  return (
    <section className="">
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <>
          <MainSlider locations={locations as LocationPreview[]} />
          <LocationsList locations={locations as LocationPreview[]} />
        </>
      )}
    </section>
  );
};
