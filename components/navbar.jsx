import { Menu } from "lucide-react";
import ThemeChanger from "./theme-changer";

export default function Navbar() {
  return (
    <nav
      className="
      max-w-3xl mx-auto pt-4 pr-4 
      backdrop-blur-md bg-inherit
      flex items-center justify-end "
      // sticky top-0 z-10
    >
      <ThemeChanger />
      {/* TODO MENU AND MOBILE MENU */}
      {/* <span className="border border-zinc-600 h-7"></span>
      <Menu /> */}
    </nav>
  );
}
