const Circle = ({
  height = 100,
  width = 100,
  color = "bright",
  moreStyle = {},
}) => {
  return (
    <div
      className="decoration"
      style={{
        borderRadius: "50%",
        backgroundColor: `var(--${color})`,
        width: `${width}px`,
        height: `${height}px`,
        ...moreStyle,
      }}
    ></div>
  );
};
const Rectangle = ({ height = 100, width = 100, color = "bright" }) => {
  return (
    <div
      className="decoration"
      style={{
        borderRadius: "50%",
        backgroundColor: `var(--${color})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></div>
  );
};

export { Circle, Rectangle };
