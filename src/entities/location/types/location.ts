export interface LocationPreview {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string;
}

export interface LocationPageContent {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string;
  content: {
    id?: number;
    type: LocationContentType;
    content: string;
  }[];
}

export enum LocationContentType {
  photo = "photo",
  video = "video",
  text = "text",
}
