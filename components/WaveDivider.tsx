type Props = {
  fill?: string;
  flip?: boolean;
  className?: string;
  variant?: "gentle" | "deep" | "sharp";
};

const paths = {
  gentle: "M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,80 L0,80 Z",
  deep:   "M0,20 C180,70 360,0 540,45 C720,80 900,10 1080,50 C1260,80 1380,18 1440,38 L1440,80 L0,80 Z",
  sharp:  "M0,55 C120,10 300,70 480,35 C660,0 840,65 1020,30 C1200,0 1350,55 1440,40 L1440,80 L0,80 Z",
};

export default function WaveDivider({
  fill = "#110B06",
  flip = false,
  className = "",
  variant = "gentle",
}: Props) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-16"
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
