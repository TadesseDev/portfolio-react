import hide from "../../icon/directions/hide.png";
import more from "../../icon/directions/more.svg";
import DirectionContainer from "./styles/direction.styled";
const Direction = ({ icon, toggle = () => {}, style = {} }) => {
  let iconMap = new Map([
    ["hide", hide],
    ["show", "./"],
    ["more", more],
    ["les", "./"],
  ]);
  return (
    <DirectionContainer
      className="direction"
      onClick={() => toggle((old) => !old)}
      style={style}
    >
      <img src={iconMap.get(icon)} alt={icon} />
    </DirectionContainer>
  );
};

export default Direction;
