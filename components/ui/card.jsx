import Image from "next/image";
import IconLink from "./icon-link";
import { Github, Link } from "lucide-react";
import Tools from "./tools";
import Paragraph from "./paragraph";

export default function Card({ img, title, description, tools, repo, demo }) {
  return (
    <article className="
        p-6 flex flex-col place-items-center gap-6 
        border-2 border-gray-100 rounded-md shadow-md  
        sm:flex-row
        dark:bg-zinc-900 dark:border-zinc-900">
      <Image
        className="h-48 w-1/2 hidden object-cover rounded-md sm:block"
        width={544}
        height={300}
        src={img}
        alt={title}
      />
      <main className="flex flex-col justify-start gap-2 sm:w-1/2">
        <h3 className="font-semibold text-2xl dark:text-white">{title}</h3>
        <Image
          className="h-48 object-cover rounded-md sm:hidden"
          width={544}
          height={300}
          src={img}
          alt={title}
        />
        <Paragraph className="text-sm">
          {description}
        </Paragraph>
        <Tools array={tools}/>
        <footer className="flex items-center gap-2">
          <IconLink
            href={repo}
            target={"_blank"}
            rel={"noreferrer"}
            icon={Github}
            type="Repo"
            className="hover:text-black/80 dark:hover:text-white/80"
          />
          {demo && (
            <IconLink
              href={demo}
              target={"_blank"}
              rel={"noreferrer"}
              icon={Link}
              type="Demo"
              className="hover:text-blue-500"
            />
          )}
        </footer>
      </main>
    </article>
  );
}
