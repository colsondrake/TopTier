import * as React from "react";
import { MenuItem } from "./MenuItem";

export interface MenuItemData {
  id: string;
  icon: string;
  label: string;
}

interface MenuProps {
  items: MenuItemData[];
  onSelect: (label: string) => void;
}

function Menu({ items, onSelect }: MenuProps) {
  return (
    <nav className="border-2 border-solid border-[#D4AF37] mx-auto max-w-[320px] w-full px-2 pt-2 pb-[712px] overflow-hidden">
      <header className="overflow-hidden px-4 pt-2 pb-1 w-full text-base font-semibold leading-snug text-white">
        <h2>My Games</h2>
      </header>
      <div className="flex flex-col justify-center px-4 py-2 w-full">
        <hr className="flex w-full bg-zinc-300 min-h-px" />
      </div>
      <section className="overflow-hidden w-full text-base leading-snug rounded-lg text-white flex flex-col gap-1">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            onClick={() => onSelect(item.label)}
          />
        ))}
      </section>
    </nav>
  );
}

export default Menu;
