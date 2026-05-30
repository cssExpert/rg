import { useRef } from "react";

interface Props {
  text: string;
}

const ScrambleText = (props: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const origText = props.text;

  const randomInt = (max: number) => Math.floor(Math.random() * max);
  const randomFromArray = (array: Array<any>) => array[randomInt(array.length)];

  const scramble = (e: React.MouseEvent<HTMLSpanElement>) => {
    const interval = setInterval(() => _scramble(), 30);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      clearTimeout(timeout);

      ref.current!.innerText = origText;
    }, 400);
  };

  const _scramble = () => {
    if (!ref || !ref.current) return;

    const chars = "*?><[]&@#)(.%$-_:/;?!".split("");
    const newText = origText
      .split("")
      .map((x) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
      .join("");

    ref.current.innerText = newText;
  };

  return (
    <span
      className="text"
      onMouseOver={scramble}
      onMouseOut={scramble}
      ref={ref}
    >
      {props.text}
    </span>
  );
};

export default ScrambleText;
