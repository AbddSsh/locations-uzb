export interface LocationPreview {
  title: string;
  description: string;
  date: string;
  id: string;
  image_url: string;
}

export interface LocationPageContent {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string;
  content: {
    type: LocationContentType;
    content: string;
  }[];
}

export enum LocationContentType {
  photo = "photo",
  video = "video",
  text = "text",
}
