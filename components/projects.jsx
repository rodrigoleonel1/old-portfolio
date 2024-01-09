import { FEATURED_PROJECTS, PROJECTS } from "@/constants";
import Card from "./ui/card";
import Container from "./ui/container";
import Title from "./ui/title";
import MiniCard from "./ui/mini-card";

export default function Projects() {
  return (
    <Container>
      <Title name="Projectos" id="Projects" />
      <section className="mx-auto flex flex-col justify-center place-items-center gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            img={project.img}
            tools={project.tools}
            repo={project.repo}
            demo={project.demo}
          />
        ))}
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <MiniCard
            key={project.title}
            title={project.title}
            description={project.description}
            img={project.img}
            tools={project.tools}
            repo={project.repo}
            demo={project.demo}
          />
        ))}
      </section>
    </Container>
  );
}
