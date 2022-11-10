import WheelOfTime from "../../../images/twitter/vidText-1.png";
import WheelOfTime2 from "../../../images/twitter/vidText-2.png";
import DescriptiveText from "../../../images/twitter/vidText-3.png";

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

export const DesText = () => (
  <StyledImage>
    <img src={DescriptiveText} alt="twitter example of descriptive text" />
  </StyledImage>
);
