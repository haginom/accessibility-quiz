import TwitterBE from "../../../images/twitter/video/hashtag-1.png";
import TwitterGE from "../../../images/twitter/video/hashtag-2.png";
import TikTokGE from "../../../images/tiktok/IMG_0982 1.png";
import TikTokBE from "../../../images/tiktok/IMG_0984 1.png";
import InstaGE from "../../../images/instagram/video/insta5.png";
import InstaGE2 from "../../../images/instagram/video/insta6.png";
import InstaBE from "../../../images/instagram/video/insta7.png";

export const TwitterGoodExample = () => (
  <img src={TwitterGE} alt="example of closed captions" />
);
export const TwitterBadExample = () => (
  <img src={TwitterBE} alt="example of closed captions" />
);
export const InstaGoodExample = () => (
  <img src={InstaGE} alt="example of closed captions" />
);
export const InstaGoodExample2 = () => (
  <img src={InstaGE2} alt="example of closed captions" />
);
export const InstaBadExample = () => (
  <img src={InstaBE} alt="example of closed captions" />
);

export const TikTokGoodExample = () => (
  <img src={TikTokGE} alt="example of closed captions" />
);
export const TikTokBadExample = () => (
  <img src={TikTokBE} alt="example of closed captions" />
);
export const TikTokInstructions = () => (
  <>
    <p>
      The TikTok made by Playstation doesn’t utilize camel case - which is fine
      if you are only using hashtags with only one word like PS4 or PS5.
    </p>
    <p>
      But if you didn't know the game, you might not know the hashtag is trying
      to tell you the game is Ghost of Tsushima. If they used camel case, the
      guesswork would be removed.
    </p>
  </>
);
