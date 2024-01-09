import { Abril_Fatface } from "next/font/google";

import Avatar from "./avatar";

import Container from "./ui/container";
import Paragraph from "./ui/paragraph";
import IconsBox from "./ui/icons-box";

const AbrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <Container className="grid grid-cols-10 gap-3 items-center">
      <article className="m-auto col-span-10 md:col-span-7">
        <h1
          className={`text-6xl bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent ${AbrilFatface.className} sm:text-[4rem] col-span-10 pb-2`}
        >
          Rodrigo Alarcón.
        </h1>
        <h2 className="text-xl font-semibold md:text-2xl dark:text-zinc-200 ">
          Desarrollador Full-Stack.
        </h2>
        <Paragraph>
          Con enfoque en el desarrollo web, me apasiona la resolución de
          problemas y la creación de aplicaciones con experiencias atractivas y
          funcionales.
        </Paragraph>
        <IconsBox/>
      </article>
      <Avatar />
    </Container>
  );
}
