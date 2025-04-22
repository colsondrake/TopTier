import * as React from "react";

interface MenuItemProps {
  icon: string;
  label: string;
}

export function MenuItem({ icon, label }: MenuItemProps) {
  return (
    <button className="flex overflow-hidden gap-3 items-start px-4 py-3 w-full rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <img
        src={icon}
        alt=""
        className="object-contain shrink-0 w-5 aspect-square"
      />
      <div className="flex-1 shrink basis-0">
        <div className="flex justify-between items-center w-full">
          <span className="flex-1 shrink self-stretch my-auto basis-0 text-left">
            {label}
          </span>
          <div className="flex self-stretch my-auto rounded-lg min-h-4" />
        </div>
      </div>
    </button>
  );
}
