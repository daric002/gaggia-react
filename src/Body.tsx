import Temperature from "./Temperature";

interface BodyProps {
  name: string;
}

export default function Body(props: BodyProps): JSX.Element {
  return (
    <main>
      <Temperature label="Boiler" temperature="89"></Temperature>
      <Temperature label="Steam" temperature="120"></Temperature>
    </main>
  );
}
