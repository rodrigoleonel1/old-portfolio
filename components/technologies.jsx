import { SKILLS } from "@/constants";
import Container from "./ui/container";
import Title from "./ui/title";
import Badge from "./ui/badge";

export default function Technologies() {
  return (
    <Container>
      <Title name="Tecnologías" id="Tecnologías" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} skill={skill} />
        ))}
      </div>
      <div className="mt-4 text-center text-xl font-semibold md:mt-6">
        ...y muchas otras!
      </div>
    </Container>
  );
}
