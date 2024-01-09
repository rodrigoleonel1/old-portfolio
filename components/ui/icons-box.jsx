import { GithubIcon, Linkedin, Mail } from "lucide-react";
import IconClipboard from "./icon-clipboard";

export default function IconsBox() {
  return (
    <article className="py-2 gap-4 flex text-emerald-400">
      <a
        href="https://github.com/rodrigoleonel1"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <GithubIcon
          size={32}
          className="cursor-pointer hover:text-black/80 dark:hover:text-white/80"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigoalarc%C3%B3n/"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <Linkedin size={32} className="cursor-pointer hover:text-sky-600" />
      </a>
      <IconClipboard
        text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
      />
    </article>
  );
}
