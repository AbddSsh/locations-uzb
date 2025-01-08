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
        url: `/auth/register`,
        method: `GET`,
      }),
    }),
    getLocationInfo: build.query<getLocationInfoRes, getLocationInfoReq>({
      query: (params) => ({
        url: `/auth/register`,
        method: `GET`,
        params,
      }),
    }),
  }),
});
export const { useGetLocationsQuery, useGetLocationInfoQuery } = locationAPI;
