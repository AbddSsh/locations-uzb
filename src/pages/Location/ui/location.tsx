import { useGetLocationInfoQuery } from "@entities/location";
import { locationInfoMock } from "@shared/config";
import { LocationContent } from "@widgets/location-content";
import { useParams } from "react-router-dom";
import { Loader } from "@shared/ui";

export const LocationPage = () => {
  const { id } = useParams<{ id: string }>();
  // const {data: location, isLoading, isFetching} = useGetLocationInfoQuery(
  //   { id: id || "" },
  //   {
  //     skip: !id,
  //   }
  // );
  const location = locationInfoMock;
  const isLoading = false;

  return (
    <>{isLoading ? <Loader /> : <LocationContent location={location} />}</>
  );
};
