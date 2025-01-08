import { FC } from "react";

interface LocationContentTextProps {
  content: string;
}

export const LocationContentText: FC<LocationContentTextProps> = ({
  content,
}) => {
  return (
    <div>
      <p className="text-xs md:text-base font-normal">{content}</p>
    </div>
  );
};
