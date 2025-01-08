import { FC } from "react";

interface LocationContentImageProps {
  content: string;
}

export const LocationContentImage: FC<LocationContentImageProps> = ({
  content,
}) => {
  return (
    <div className="w-full h-full">
      <img src={content} alt="location image" className="w-full h-full" />
    </div>
  );
};
