import React from "react";
import { Columns } from "../../../theme/extra";
import styled from "styled-components";
import { SocialMediaExample } from "../styling";
import TwClosedCapts from "../../../images/twitter/video/vidCapts.png";
import TwOpenCapts from "../../../images/twitter/video/vidCapts-2.png";
import TTOpenCapts2 from "../../../images/tiktok/IMG_1228 2 1.png";
import FBClosedCapts from "../../../images/facebook/video/fb3.png";
import FBOpenCapts from "../../../images/facebook/video/fb4.png";
import IgGE from "../../../images/instagram/video/insta2.png";
 import IgBE from "../../../images/instagram/video/insta3.png";
// import YTBadExample from "../../../images/youtube/youtube3.png";
import YTGoodExample1 from "../../../images/youtube/youtube5.png";
// import YTGoodExample2 from "../../../images/youtube/youtube4.png";
// import IgAuto from "../../../images/instagram/video/insta4.png";
// import { TwitterGoodExample } from "../VidText/links";

const Text = styled.p`
  margin-bottom: -1rem;
  font-style: italic;
`;

export const Examples = ({ platform }) => (
  <Columns>
    <Text>
      Here's an example of a video with closed captions on {platform} (can be
      toggled on and off with the CC button):
    </Text>
    {platform === "twitter" ? (
      <SocialMediaExample
        img={TwOpenCapts}
        alt={"example from Twitter"}
        link="https://twitter.com/Disney/status/1551003504889761792?s=20&t=HONcEcZCqBqJjfuoJsLocg"
      />
    ) : platform === "facebook" ? (
      <>
        <SocialMediaExample
          img={FBClosedCapts}
          alt={"a Disney example from Facebook with closed captions"}
          link="https://www.facebook.com/watch/?v=794324005264010&ref=sharing"
        />
      </>
    ) : platform === "instagram" ? (
      <>
        <SocialMediaExample
          img={IgGE}
          alt={"example from Twitter"}
          link="https://www.instagram.com/reel/CgmxYicJdZ8/"
        />
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
      Here's an example of a video with open captions on {platform}{" "}
      {platform === "facebook"
        ? `(while still
      following the style of Stranger Things)`
        : `(while still
        following the brand's style)`}
      :
    </Text>
    {platform === "twitter" ? (
      <SocialMediaExample
        link="https://twitter.com/McDonalds/status/1358447477272301569?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1358447477272301569%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.accessible-social.com%2Faudio-and-video%2Fcaptions"
        img={TwClosedCapts}
        alt={"example from Twitter"}
      />
    ) : platform === "facebook" ? (
      <>
        <SocialMediaExample
          img={FBOpenCapts}
          link="https://www.facebook.com/watch/?v=720918092323566&ref=sharing"
          alt={"example from Twitter"}
        />
      </>
    ) : platform === "instagram" ? (
      <>
        <SocialMediaExample
          img={IgBE}
          alt={"example from Twitter"}
          link="https://www.instagram.com/tv/CgnRmxhpiEa/?utm_source=ig_web_copy_link"
        />
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
