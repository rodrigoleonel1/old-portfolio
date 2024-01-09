import Image from "next/image";

export default function Badge({ skill }) {
  return (
    <article
      key={skill.name}
      className="
      py-2 px-3 sm:px-6 
      flex items-center justify-between 
      rounded-md shadow-md
      hover:bg-gray-50 border-2 border-gray-100
      dark:hover:border-zinc-700 dark:hover:bg-zinc-800 
      dark:bg-zinc-900  dark:border-zinc-900"
    >
      <Image
        width={100}
        height={100}
        className={`${skill?.invert ? "dark:invert" : ""} h-8 w-8 rounded-md`}
        src={skill.src}
        alt={skill.name}
      />
      <span className="font-medium text-sm text-teal-600 dark:text-white">
        {skill.name}
      </span>
    </article>
  );
}
