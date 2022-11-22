import { Download, OverLay } from "./styles/downloadButton.styled";
import downloadIcon from "../../icon/download.svg";
const DownloadButton = ({
  title = "download",
  icon = downloadIcon,
  fontSize = "1.2rem",
  moreStyle = {},
}) => {
  return (
    <Download fontSize={fontSize} style={moreStyle}>
      {title}
      <OverLay>
        <img src={icon} alt="download" />
      </OverLay>
    </Download>
  );
};

export default DownloadButton;
