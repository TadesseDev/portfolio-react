import hide from "../../icon/directions/hide.png";
import more from "../../icon/directions/more.png";
import show from "../../icon/directions/show.png";
import less from "../../icon/directions/less.png";
import DirectionContainer from "./styles/direction.styled";
const Direction = ({ icon, toggle = () => {}, style = {} }) => {
  let iconMap = new Map([
    ["hide", hide],
    ["show", show],
    ["more", more],
    ["les", less],
  ]);
  return (
    <DirectionContainer className="direction" onClick={toggle} style={style}>
      <img src={iconMap.get(icon)} alt={icon} />
    </DirectionContainer>
  );
};

export default Direction;
