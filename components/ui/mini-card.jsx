import { ExternalLink } from "lucide-react";

import Paragraph from "./paragraph";
import Tools from "./tools";

export default function MiniCard({ title, description, tools, demo }) {
  return (
    <a
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      className="
      py-4 px-6
      border-2 border-gray-100
      rounded-md shadow-md transition cursor-pointer 
      dark:border-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800
      hover:bg-gray-100 hover:-translate-y-1"
    >
      <article className="flex flex-col gap-2">
        <header className="flex justify-between">
          <h3 className="font-bold text-xl dark:text-white">{title}</h3>
          <ExternalLink className="text-emerald-500" />
        </header>
        <Paragraph className="text-sm">{description}</Paragraph>
        <Tools array={tools} />
      </article>
    </a>
  );
}
