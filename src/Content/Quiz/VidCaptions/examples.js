import React from "react";
import { SocialMediaExample } from "./links";
import { Columns } from "../../../theme/extra";
import styled from "styled-components";
import TwClosedCapts from "../../../images/twitter/video/vidCapts.png";
import TwOpenCapts from "../../../images/twitter/video/vidCapts-2.png";
import TTOpenCapts2 from "../../../images/tiktok/IMG_1228 2 1.png";
import FBClosedCapts from "../../../images/facebook/video/fb4.png";
import FBOpenCapts from "../../../images/facebook/video/fb3.png";
import IgGE from "../../../images/instagram/video/insta2.png";
import IgBE from "../../../images/instagram/video/insta3.png";
import YTBadExample from "../../../images/youtube/youtube3.png";
import YTGoodExample1 from "../../../images/youtube/youtube5.png";
import YTGoodExample2 from "../../../images/youtube/youtube4.png";
import IgAuto from "../../../images/instagram/video/insta4.png";
import { TwitterGoodExample } from "../VidText/links";

const Text = styled.p(
  ({ theme }) => `
  max-width: 29rem;
  font-size:  ${theme.fontSizes[1]};
  margin-bottom: ${theme.space[0]};
  font-style: italic;
  
`
);

export const Examples = ({ platform }) => (
  <Columns>
    <Text>
      Here's an example of a video with closed captions on {platform} (can be
      toggled on and off with the CC button):
    </Text>
    {platform === "twitter" ? (
      <>
        <SocialMediaExample img={TwClosedCapts} alt={"example from Twitter"} />
      </>
    ) : platform === "facebook" ? (
      <>
        <SocialMediaExample img={FBClosedCapts} alt={"example from Twitter"} />
      </>
    ) : platform === "instagram" ? (
      <>
        <SocialMediaExample img={IgGE} alt={"example from Twitter"} />
      </>
    ) : platform === "tiktok" ? (
      <>
        <SocialMediaExample img={TTOpenCapts2} alt={"example from Twitter"} />
      </>
    ) : platform === "youtube" ? (
      <>
        <SocialMediaExample img={YTGoodExample1} alt={"example from Twitter"} />
      </>
    ) : null}
    <Text>
      Here's an example of a video with open captions on {platform} (while still
      following the brand's style):
    </Text>
    {platform === "twitter" ? (
      <>
        <SocialMediaExample img={TwOpenCapts} alt={"example from Twitter"} />
      </>
    ) : platform === "facebook" ? (
      <>
        <SocialMediaExample img={FBOpenCapts} alt={"example from Twitter"} />
      </>
    ) : platform === "instagram" ? (
      <>
        <SocialMediaExample img={IgGE} alt={"example from Twitter"} />
      </>
    ) : platform === "tiktok" ? (
      <>
        <SocialMediaExample img={TTOpenCapts2} alt={"example from Twitter"} />
      </>
    ) : platform === "youtube" ? (
      <>
        <SocialMediaExample img={YTGoodExample1} alt={"example from Twitter"} />
      </>
    ) : null}
  </Columns>
);

export default Examples;
