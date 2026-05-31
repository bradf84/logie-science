import atomSvg from '../assets/animated-atom-refined.svg';

export function AnimatedAtom({ size = 48 }: { size?: number }) {
  return (
    <img
      src={atomSvg}
      alt="Animated atom"
      width={size}
      height={size}
      className="atom-spin"
    />
  );
}
