import ShineSvg from "../svg/shine-svg";

export default function Title({ name, id }) {
  return (
    <h2
      id={id}
      className={`text-3xl font-semibold mb-6 flex place-items-center gap-2 `}
    >
      <ShineSvg/>
      {name}
    </h2>
  );
}
