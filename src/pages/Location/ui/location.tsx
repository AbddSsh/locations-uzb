import {
  LocationPageContent,
  useGetLocationInfoQuery,
} from "@entities/location";
import { LocationContent } from "@widgets/location-content";
import { useParams } from "react-router-dom";
import { Loader } from "@shared/ui";

export const LocationPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: location,
    isLoading,
    isFetching,
  } = useGetLocationInfoQuery(
    { id: id || "" },
    {
      skip: !id,
    }
  );

  return (
    <>
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <LocationContent location={location as LocationPageContent} />
      )}
    </>
  );
};
