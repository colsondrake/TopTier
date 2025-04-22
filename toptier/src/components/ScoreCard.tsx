import * as React from "react";
import { ScoreCardContent } from "./ScoreCardContent";

interface ScoreCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <article className="flex flex-wrap gap-6 items-start p-6 w-full bg-white rounded-lg border border-solid border-zinc-300 min-w-60 max-md:px-5 max-md:max-w-full">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain shrink-0 w-40 aspect-square min-h-40 min-w-40"
      />
      <div className="flex-1 shrink basis-0 min-w-40 max-md:max-w-full">
        <ScoreCardContent title={title} description={description} />
      </div>
    </article>
  );
};
