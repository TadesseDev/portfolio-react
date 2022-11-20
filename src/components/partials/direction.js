import hide from "../../icon/directions//hide.svg";
import more from "../../icon/directions/more.svg";
import DirectionContainer from "./styles/direction.styled";
const Direction = ({ icon }) => {
  let iconMap = new Map([
    ["hide", hide],
    ["show", "./"],
    ["more", more],
    ["les", "./"],
  ]);
  return (
    <DirectionContainer className="direction">
      <img src={iconMap.get(icon)} alt={icon} />
    </DirectionContainer>
  );
};

export default Direction;
