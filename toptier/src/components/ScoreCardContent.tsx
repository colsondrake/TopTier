import React from "react";

interface ScoreCardContentProps {
  title: string;
  description: string;
}

export const ScoreCardContent: React.FC<ScoreCardContentProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full max-md:max-w-full">
      <h2 className="text-2xl font-semibold tracking-tight leading-tight text-stone-900 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-2 text-base leading-snug text-neutral-500 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};
