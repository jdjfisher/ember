interface Props {
  clear: () => void;
}

export default function Matched({ clear }: Props) {
  return (
    <div
      className={'absolute backdrop-blur-sm top-0 w-full h-full z-10 left-0'}
      onClick={() => clear()}
    />
  );
}
