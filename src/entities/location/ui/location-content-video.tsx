import { FC } from "react";

interface LocationContentVideoProps {
  content: string;
}

export const LocationContentVideo: FC<LocationContentVideoProps> = ({
  content,
}) => {
  return (
    <video src={content} controls width="100%">
      <source src={content} type="video/mp4" />
      Ваш браузер не поддерживает воспроизведение видео.
    </video>
  );
};
