import TwitterBE1 from "../../../images/twitter/images/screen-reader-1.png";
import TwitterBE2 from "../../../images/twitter/images/screen-reader-2.png";
import TwitterGE from "../../../images/twitter/images/screen-reader-3.png";
import FacebookBE1 from "../../../images/facebook/images/tts-1.png";
import FacebookBE2 from "../../../images/facebook/images/tts-2.png";
import FacebookGE from "../../../images/facebook/images/tts-3.png";
import InstagramGE from "../../../images/instagram/images/screen-reader-1.png";
import InstagramGE2 from "../../../images/instagram/images/screen-reader-2.png";

import { ImgContainer, TwoColumns } from "../styling";

export const InstagramExamples = ({ answer }) => (
  <>
    <p>
      Your posts should NOT look like this one by Orly. These emoji line breaks
      are not effective and the screenreader will reveal that.{" "}
      {answer === "yes"
        ? `
        You should also not use alternative characters or “special” fonts like
        what they used for “BANANAS.”
        `
        : `And these special characters will not read as "BANANAS" - it'll read as
        "mathematical symbol italics bold B, mathematical symbol italics bold
        A..." and so on. Annoying, right?`}
    </p>

    <ImgContainer>
      <img src={InstagramGE} alt="" />
    </ImgContainer>
    <p>
      If you're going to use emojis - keep it limited and use it at the end
      only. Also don't use emoticons. Don't use special alternative characters.
      Stick to the default font. Here’s a good example of a post from Lego that
      keeps emojis at the end and when needed.
    </p>
    <ImgContainer>
      <img src={InstagramGE2} alt="" />
    </ImgContainer>
    {answer === "no" ? (
      <p>
        If you want to learn more,{" "}
        <a href="https://www.accessible-social.com/copy-and-formatting">
          Accessible Social goes in further details on what to avoid in copy and
          formatting.
        </a>{" "}
        Additionally,{" "}
        <a href="https://uxdesign.cc/just-not-my-type-bb33eb8183c7">
          Alexa Heinrich explains why using fancy fonts on social media is bad
          idea.
        </a>
      </p>
    ) : null}
  </>
);
export const FacebookExamples = () => (
  <>
    <p>
      Your posts should NOT look like{" "}
      <a href="https://www.facebook.com/EMCosmetics/photos/a.4226438437369108/5718316878181249">
        the one below by EM Cosmetics.
      </a>{" "}
      Using emojis as break lines are not effective and reading this through the
      screenreader will reveal that.
    </p>
    <ImgContainer>
      <img src={FacebookBE1} alt="" />
    </ImgContainer>
    <p>
      Also, you should avoid using special fonts that can be occasionally seen
      on Facebook. The “funky” font seen in the post below will not be read
      smoothly if you use a screenreader or a TTS program.
    </p>
    <ImgContainer>
      <img src={FacebookBE2} alt="" />
    </ImgContainer>
    <p>
      If you're going to use emojis - keep it limited and use it at the end
      only. Also don't use emoticons. Don't use special alternative characters.
      Stick to the default font.{" "}
      <a href="https://www.facebook.com/LEGO/photos/a.10150175674793403/10159209917393403/">
        Here’s a good example of post from Lego that keeps emojis at the end and
        when needed.
      </a>
      <ImgContainer>
        <img src={FacebookGE} alt="" />
      </ImgContainer>
    </p>
  </>
);

export const TwitterExamples = () => (
  <>
    <p>
      What we’re trying to avoid are Tweets that uses an excessive amount of
      emojis and Tweets with special fonts, as shown below.{" "}
      <a href="https://twitter.com/HashtagHeyAlexa/status/1318655972521529347?s=20&t=IsbTtcGBr7P8xOhm-cDzxQ">
        You can view this Twitter video from Alexa to hear how the Halloween
        tweet sounds through a TTS program.
      </a>
    </p>
    <TwoColumns>
      <img src={TwitterBE1} alt="bad example" />
      <img src={TwitterBE2} alt="bad example" />
    </TwoColumns>
    <p>
      If you're going to use emojis - keep it limited and use it at the end
      only. Also don't use emoticons. Don't use special alternative characters.
      Stick to the default font. Here’s a good example of Tweet from the 15 out
      of 10 Foundation that keeps emojis at the end and when needed.
    </p>
    <ImgContainer>
      <img src={TwitterGE} alt="good example" />
    </ImgContainer>
    <p>
      If you want to learn more,{" "}
      <a href="https://www.accessible-social.com/copy-and-formatting">
        Accessible Social goes in further details on what to avoid in copy and
        formatting.
      </a>{" "}
      Additionally,{" "}
      <a href="https://uxdesign.cc/just-not-my-type-bb33eb8183c7">
        Alexa Heinrich explains why using fancy fonts on social media is bad
        idea.
      </a>
    </p>
  </>
);
