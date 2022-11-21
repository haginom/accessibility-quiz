import TwitterBE from "../../../images/twitter/hashtag-1.png";
import TwitterGE from "../../../images/twitter/hashtag-2.png";
import TikTokGE from "../../../images/tiktok/IMG_0982 1.png";
import TikTokBE from "../../../images/tiktok/IMG_0984 1.png";

export const TwitterGoodExample = () => (
  <img src={TwitterGE} alt="example of closed captions" />
);
export const TwitterBadExample = () => (
  <img src={TwitterBE} alt="example of closed captions" />
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
