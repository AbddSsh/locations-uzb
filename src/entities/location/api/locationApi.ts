import { baseApi } from "@shared/api";
import {
  getLocationInfoReq,
  getLocationInfoRes,
  getLocationsRes,
} from "./locationApi-dto";

export const locationAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<getLocationsRes, void>({
      query: () => ({
        url: `/location/all`,
        method: `GET`,
      }),
    }),
    getLocationInfo: build.query<getLocationInfoRes, getLocationInfoReq>({
      query: (params) => ({
        url: `/location/${params.id}`,
        method: `GET`,
      }),
    }),
  }),
});
export const { useGetLocationsQuery, useGetLocationInfoQuery } = locationAPI;
