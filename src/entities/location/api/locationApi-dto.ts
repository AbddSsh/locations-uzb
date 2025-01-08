import { LocationPageContent, LocationPreview } from "../types/location";

export type getLocationsRes = LocationPreview[];

export type getLocationInfoRes = LocationPageContent;

export type getLocationInfoReq = {
  id: string;
};
