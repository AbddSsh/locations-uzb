import { LocationPreview, useGetLocationsQuery } from "@entities/location";
import { LocationsList } from "@widgets/locations-list";
import { MainSlider } from "@widgets/main-slider";
import { Loader } from "@shared/ui";
import { locationsMock } from "@shared/config";

export const MainPage = () => {
  // const {data: locations, isLoading, isFetching} = useGetLocationsQuery()
  const locatios: LocationPreview[] = locationsMock;
  const isLoading = false;
  return (
    <section className="">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainSlider locations={locatios} />
          <LocationsList locations={locatios} />
        </>
      )}
    </section>
  );
};
