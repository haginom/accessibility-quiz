import ClosedCaptions from "../../../images/twitter/vidCapts.png";
import OpenCaptions from "../../../images/twitter/vidCapts-2.png";
import TTOpenCaptions from "../../../images/tiktok/IMG_0974 1.png";
import TTOpenCaptions2 from "../../../images/tiktok/IMG_1228 2 1.png";
import TTClosedCaptions from "../../../images/tiktok/IMG_0980 1.png";
import FBOpenCaptions from "../../../images/facebook/video/fb1.png";
import FBOpenCaptions2 from "../../../images/facebook/video/fb4.png";

import FBClosedCaptions from "../../../images/facebook/video/fb2.png";
import FBClosedCaptions2 from "../../../images/facebook/video/fb3.png";
import YTClosedCaptions from "../../../images/youtube/youtube1.png";
import YTOpenCaptions from "../../../images/youtube/youtube2.png";
import YTBadExample from "../../../images/youtube/youtube3.png";
import YTGoodExample1 from "../../../images/youtube/youtube5.png";
import YTGoodExample2 from "../../../images/youtube/youtube4.png";
import InstaExample from "../../../images/instagram/video/insta1.png";
import IgGE from "../../../images/instagram/video/insta2.png";
import IgBE from "../../../images/instagram/video/insta3.png";
import IgAuto from "../../../images/instagram/video/insta4.png";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 350px;
`;

export const TwitterClosedCaptions = () => (
  <StyledImage src={ClosedCaptions} alt="example of closed captions" />
);
export const TwitterOpenCaptions = () => (
  <StyledImage src={OpenCaptions} alt="example of closed captions" />
);

export const FacebookOpenCaptions = () => (
  <StyledImage src={FBOpenCaptions} alt="example of closed captions" />
);
export const FacebookOpenCaptions2 = () => (
  <StyledImage src={FBOpenCaptions2} alt="example of closed captions" />
);
export const FacebookClosedCaptions = () => (
  <StyledImage src={FBClosedCaptions} alt="example of closed captions" />
);
export const FacebookClosedCaptions2 = () => (
  <StyledImage src={FBClosedCaptions2} alt="example of closed captions" />
);

export const InstagramExample = () => (
  <StyledImage src={InstaExample} alt="example of closed captions" />
);
export const InstaGE = () => (
  <StyledImage src={IgGE} alt="example of closed captions" />
);
export const InstaBE = () => (
  <StyledImage src={IgBE} alt="example of closed captions" />
);

export const YouTubeOpenCaptions = () => (
  <StyledImage src={YTOpenCaptions} alt="example of closed captions" />
);
export const YouTubeClosedCaptions = () => (
  <StyledImage src={YTClosedCaptions} alt="example of closed captions" />
);

export const TikTokClosedCaptions = () => (
  <StyledImage src={TTClosedCaptions} alt="example of closed captions" />
);
export const TikTokOpenCaptions = () => (
  <StyledImage src={TTOpenCaptions} alt="example of closed captions" />
);
export const TikTokOpenCaptions2 = () => (
  <StyledImage src={TTOpenCaptions2} alt="example of closed captions" />
);

export const TwitterInstructions = () => (
  <>
    <p>
      Adding closed captions on Twitter is simple. When you upload a video,
      there will be an option to upload the caption file (.srt) below the video.
      Click on it and upload the correct file, and you’re done! If you are still
      unsure, you can visit the Twitter Help page on adding captions to Tweetss.
    </p>
    <p>
      Adding open captions is done while editing the actual video itself. The
      captions are directly embedded on the video. You cannot add open captions
      through Twitter.
    </p>
  </>
);
export const FacebookInstructions = () => (
  <>
    <p>
      Adding closed captions on Facebook differs based on if you’re adding
      captions to a Video Ad or a video from your Facebook Page.
    </p>
    <a href="https://www.facebook.com/business/help/1675722002698686?id=603833089963720">
      How to add closed captions to a Facebook Video Ad
    </a>
    <a href="https://www.facebook.com/help/509746615868430">
      How to add closed captions to a video from your Facebook Page
    </a>

    <p>
      Adding open captions is done while editing the actual video itself. Open
      captions are directly embedded on the video. You cannot add open captions
      through Facebook.
    </p>
  </>
);
export const InstagramInstructions = () => (
  <>
    <p>
      As mentioned earlier, Instagram doesn't have an option to upload your own
      closed captions, it only offers auto-generated closed captions.{" "}
    </p>
    <p>
      If you want to learn more about how to access this, you can read
      Instagram’s article on watching a Reel with their auto-generated captions.
    </p>
    <p>
      Otherwise, we do not recommend settling for Instagram’s auto-generated
      captions.
    </p>
    <StyledImage src={IgAuto} alt="example of closed captions" />
    <p>
      While their auto-generated captions are better than no captions, you
      should consider adding open captions to your Reels. It’ll be more accurate
      and easier to read. There are several great mobile apps or website
      available for creating open captions including:
    </p>
    <ul>
      <li>Veed.io</li>
      <li>AutoCap</li>
      <li>MixCaptions</li>
      <li>Clipomatic</li>
      <li>Kapwing</li>
    </ul>
    <p>
      These apps/websites make it easy and inexpensive to add open captions to
      your videos, and some of them even allow you to download your finished
      captions as an SRT file.
    </p>
    <p>Here's an example of a video with open captions on Instagram:</p>
    <StyledImage src={IgGE} alt="example of closed captions" />

    <p>
      Here's an example of a video with captions on Instagram that is still in
      accordance with the Stranger Things’ style:
    </p>
    <StyledImage src={IgBE} alt="example of closed captions" />
  </>
);
export const YouTubeInstructions = () => (
  <>
    <p>
      Fortunately, YouTube makes it quite easy to upload captions. It also can
      auto-generate captions, but it's best to take those auto-generated
      captions and edit them so that they're accurate. This can all be done
      through the YouTube Studio. For more details, please refer to YouTube’s
      instructions on how to add closed captions or how to edit closed captions.{" "}
    </p>
    <p>
      Adding open captions is done while editing the actual video itself. The
      captions are directly embedded on the video. You cannot add open captions
      through YouTube.
    </p>
    <StyledImage src={YTBadExample} alt="bad example of closed captions" />
    <p>
      This is an example of video with auto-generated captions. While it’s
      better than nothing, it can be inaccurate and incorrectly formatted, as
      shown in this particular Last Week Tonight’s episode uploaded on YouTube.
    </p>
    <p>
      The proper closed caption would be: “Note to self: Don’t fuck Egypt - too
      old.” But the auto-generated caption failed to pick that up.
    </p>
    <p>
      On your laptop or desktop, you can easily tell if a video has closed
      captions (and not just auto-generated ones) because you will see a CC icon
      below the video.
    </p>
    <StyledImage src={YTGoodExample1} alt="bad example of closed captions" />
    <StyledImage src={YTGoodExample2} alt="bad example of closed captions" />
  </>
);
export const TikTokInstructions = () => (
  <>
    <p>
      TikTok doesn't have an option to upload your own closed captions, but it
      offers auto-generated captions that you can edit. It's crucial you go
      through the auto-generated captions and clean and edit them so that
      they're accurate to the audio. If you want to learn more, you can read
      more about TikTok’s auto-generated captions here.
    </p>
    <p>
      If you don't want to use that, there are several great mobile apps or
      website available for creating open captions including:
    </p>
    <ul>
      <li>Veed.io</li>
      <li>AutoCap</li>
      <li>MixCaptions</li>
      <li>Clipomatic</li>
      <li>Kapwing</li>
    </ul>
    <p>
      {" "}
      These apps/websites make it easy and inexpensive to add open captions to
      your videos, and some of them even allow you to download your finished
      captions as an SRT file.
    </p>
  </>
);
