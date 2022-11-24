import WheelOfTime from "../../../images/twitter/vidText-1.png";
import WheelOfTime2 from "../../../images/twitter/vidText-2.png";
import DescriptiveText from "../../../images/twitter/vidText-3.png";
import FbExm from "../../../images/facebook/video/fb5.png";
import FbGE from "../../../images/facebook/video/fb6.png";
import FbGE2 from "../../../images/facebook/video/fb7.png";

import styled from "styled-components";

const StyledImage = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  > * {
    max-width: 300px;
  }
`;
export const TwitterExample = () => (
  <StyledImage>
    <img src={WheelOfTime} alt="twitter example of descriptive text" />
  </StyledImage>
);

export const TwitterGoodExample = () => (
  <StyledImage>
    <img src={WheelOfTime2} alt="twitter example of descriptive text" />
  </StyledImage>
);

export const FacebookGoodExample1 = () => {
  <StyledImage>
    <p>hello</p>
    <img src={FbExm} alt="twitter example of descriptive text" />
  </StyledImage>;
};
export const FacebookGoodExample = () => {
  <StyledImage>
    <img src={FbGE} alt="twitter example of descriptive text" />
  </StyledImage>;
};
export const FacebookGoodExample2 = () => {
  <StyledImage>
    <img src={FbGE2} alt="twitter example of descriptive text" />
  </StyledImage>;
};

export const DesText = () => (
  <StyledImage>
    <img src={DescriptiveText} alt="twitter example of descriptive text" />
  </StyledImage>
);
