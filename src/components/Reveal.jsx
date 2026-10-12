import useInView from "./useInView";

// Fades/slides its children in the first time they scroll into view.
// variant: "up" | "left" | "right" | "scale"
export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${seen ? " in" : ""}${className ? " " + className : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
