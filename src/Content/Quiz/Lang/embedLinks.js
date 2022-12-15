import TwitterGE from "../../../images/twitter/video/vidLang-1.png";
import TwitterBE from "../../../images/twitter/video/vidLang-2.png";
import { ImgContainer } from "../styling";

export const TwitterGoodExample = () => (
  <ImgContainer>
    <img src={TwitterGE} alt="example of closed captions" />
  </ImgContainer>
);

export const TwitterBadExample = () => (
  <ImgContainer>
    <img src={TwitterBE} alt="example of closed captions" />
  </ImgContainer>
);
