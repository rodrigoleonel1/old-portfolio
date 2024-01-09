import { ExternalLink } from "lucide-react";

import IconsBox from "./ui/icons-box";

export default function Footer() {
  return (
    <footer className="flex flex-col place-items-center justify-center py-6">
      <IconsBox />
      <a
        href="https://github.com/rodrigoleonel1/portfolio"
        target={"_blank"}
        rel={"noreferrer"}
        className="font-medium dark:text-zinc-400 flex place-items-center gap-1 hover:text-emerald-500 sm:text-lg"
      >
        Desarrollado por Rodrigo Alarcón
        <ExternalLink size={20}/>
      </a>
    </footer>
  );
}
