import {
  ImgContainer,
  LinkContainer,
  SocialMediaExample,
  StyledLink,
  TwoColumns,
} from "../styling";
import YTBadExample from "../../../images/youtube/youtube3.png";
import YTGoodExample1 from "../../../images/youtube/youtube5.png";
import YTGoodExample2 from "../../../images/youtube/youtube4.png";
import IgAuto from "../../../images/instagram/video/insta4.png";

export const TwitterInstructions = () => (
  <>
    <p>
      Adding closed captions on Twitter is simple. When you upload a video,
      there will be an option to upload the caption file (.srt) below the video.
      Click on it and upload the correct file, and you’re done! If you are still
      unsure, you can visit
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://help.twitter.com/en/using-twitter/upload-caption-srt-file"
      >
        {" "}
        the Twitter Help page on adding captions to Tweets.
      </a>
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
    <LinkContainer>
      <StyledLink href="https://www.facebook.com/business/help/1675722002698686?id=603833089963720">
        <p>How to add closed captions to a Facebook Video Ad</p>
      </StyledLink>
      <StyledLink href="https://www.facebook.com/help/509746615868430">
        <p>How to add closed captions to a video from your Facebook Page </p>
      </StyledLink>
    </LinkContainer>
    <p className="mt-normal">
      Adding open captions is done while editing the actual video itself. Open
      captions are directly embedded on the video. You cannot add open captions
      through Facebook.
    </p>
  </>
);
export const InstagramInstructions = () => (
  <>
    <TwoColumns>
      <div className="align-end">
        <p>
          As mentioned earlier, Instagram doesn't have an option to upload your
          own closed captions, it only offers auto-generated closed captions.{" "}
        </p>
        <p>
          If you want to learn more about how to access this, you can read
          Instagram’s article on watching a Reel with their auto-generated
          captions.
        </p>
        <p>
          Otherwise, we do not recommend settling for Instagram’s auto-generated
          captions.
        </p>
      </div>
      <SocialMediaExample
        img={IgAuto}
        alt="instagram example of auto-generated closed captions"
        link="https://help.instagram.com/225479678901832"
      />
    </TwoColumns>
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
    <ImgContainer>
      <img src={YTBadExample} alt="bad example of closed captions" />
    </ImgContainer>
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
    <ImgContainer>
      <img src={YTGoodExample1} alt="bad example of closed captions" />
    </ImgContainer>
    <ImgContainer>
      <img src={YTGoodExample2} alt="bad example of closed captions" />
    </ImgContainer>
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
