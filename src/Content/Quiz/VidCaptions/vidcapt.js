import React from "react";
import TwClosedCapts from "../../../images/twitter/video/vidCapts.png";
import TwOpenCapts from "../../../images/twitter/video/vidCapts-2.png";
import TTOpenCapts from "../../../images/tiktok/IMG_0974 1.png";
import TTClosedCapts from "../../../images/tiktok/IMG_0980 1.png";
import FBClosedCapts from "../../../images/facebook/video/fb1.png";
import FBOpenCapts from "../../../images/facebook/video/fb2.png";
import YTClosedCapts from "../../../images/youtube/youtube1.png";
import YTOpenCapts from "../../../images/youtube/youtube2.png";
import IgExample from "../../../images/instagram/video/insta1.png";
import Examples from "./examples";
import Button from "../../../components/Button";
import {
  Section,
  StyledTitle,
  ButtonPanel,
  QuizHeaders,
  TwoEqualColumns,
  SocialMediaExample,
} from "../styling";
import Continue from "../../../components/Continue";
import {
  TwitterInstructions,
  FacebookInstructions,
  InstagramInstructions,
  YouTubeInstructions,
  TikTokInstructions,
} from "./links";

export const VidCapt = ({ index, setIndex, platform, post, content }) => {
  console.log(platform, post, content, "platform, content and post");

  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Captions</StyledTitle>
      {answer === "" ? (
        <VidCaptQ platform={platform} answer={answer} setAnswer={setAnswer} />
      ) : answer === "yes" ? (
        <Yes
          platform={platform}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        >
          Yes
        </Yes>
      ) : (
        <No
          platform={platform}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        >
          No
        </No>
      )}
    </Section>
  );
};

const VidCaptQ = ({ setAnswer, answer, platform }) => {
  return (
    <>
      <QuizHeaders>
        Does your video have captions (either closed or open)?
      </QuizHeaders>
      {platform === "insta" ? (
        <p>
          Adding captions to your Reels is important for accessibility. Most of
          these captions will be considered open captions, which are captions
          that are permanently embedded on the video. Closed captions can be
          toggled on and off, but Instagram currently doesn’t have the option to
          upload your own closed captions. Regardless, captions helps those with
          hearing disabilities, those with learning disabilities, and those who
          just don't have their headphones with them.
        </p>
      ) : (
        <p>
          Closed captions are captions that can be toggled on or off. Open
          captions are permanently embedded on the video and cannot be toggled
          on and off. Captions are important for accessibility. It helps those
          with hearing disabilities, those with learning disabilities, and those
          who just don’t have their headphones with them.
        </p>
      )}
      {platform === "twitter" ? (
        <TwoEqualColumns>
          <SocialMediaExample
            img={TwClosedCapts}
            alt={"example of twitter open captions"}
          />
          <SocialMediaExample
            img={TwOpenCapts}
            alt={"example of twitter open captions"}
          />
        </TwoEqualColumns>
      ) : platform === "facebook" ? (
        <TwoEqualColumns>
          <SocialMediaExample
            img={FBOpenCapts}
            alt={"a Disney Facebook post with open captions 'no woman no cry'"}
          />
          <SocialMediaExample
            img={FBClosedCapts}
            alt={
              "a Disney closed captions with captions reading 'As somebody who's a huge lover of entertainment...'"
            }
          />
        </TwoEqualColumns>
      ) : platform === "instagram" ? (
        <TwoEqualColumns>
          <SocialMediaExample
            img={IgExample}
            alt={"example of Instagram captions"}
          />
        </TwoEqualColumns>
      ) : platform === "youtube" ? (
        <TwoEqualColumns>
          <SocialMediaExample
            img={YTOpenCapts}
            alt={"example of YouTube captions"}
          />
          <SocialMediaExample
            img={YTClosedCapts}
            alt={"example of YouTube captions"}
          />
        </TwoEqualColumns>
      ) : platform === "tiktok" ? (
        <TwoEqualColumns>
          <SocialMediaExample
            img={TTOpenCapts}
            alt={"example of YouTube captions"}
          />
          <SocialMediaExample
            img={TTClosedCapts}
            alt={"example of YouTube captions"}
          />
        </TwoEqualColumns>
      ) : null}
      <p>
        According to{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.3playmedia.com/blog/verizon-media-and-publicis-media-find-viewers-want-captions/"
        >
          a 2019 study from Verizon Media and Publicis Media
        </a>
        , 69% of people watch videos without sound in public place. Even in
        private places, one in every four watch videos without sound. So, if
        your content doesn’t have captions, they’ll probably scroll on by.
      </p>
      <p>
        Now that you know more about captions and its benefits, does your video
        have either closed or open captions?
      </p>
      <ButtonPanel>
        <Button fontSize="1" onClick={() => setAnswer("yes")}>
          Yes
        </Button>
        <Button fontSize="1" onClick={() => setAnswer("no")}>
          No
        </Button>
      </ButtonPanel>
    </>
  );
};

const Yes = ({ index, setIndex, setAnswer, platform }) => {
  return (
    <>
      <QuizHeaders>Fantastic</QuizHeaders>
      <p>
        Below are some good examples of captioned videos on {platform}. If your
        captioned video look like this, you're good to go!
      </p>
      <Examples platform={platform} />
      {platform === "twitter" || platform === "facebook" ? (
        <Continue
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
          pages={1}
        />
      ) : (
        <Continue
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
          pages={2}
        />
      )}
    </>
  );
};

const No = ({ index, setIndex, setAnswer, platform }) => {
  return (
    <>
      <QuizHeaders>Let's add those captions!</QuizHeaders>
      <p>
        Unless you're posting a video with absolutely zero sound, you should
        have captions (closed or open) with your videos.
        {platform === "instagram"
          ? ` Instagram currently has limited capabilities for closed captions, so we strongly recommend adding open captions to your videos.`
          : null}
      </p>
      {platform === "twitter" ? (
        <>
          <TwitterInstructions />
        </>
      ) : platform === "facebook" ? (
        <>
          <FacebookInstructions />
        </>
      ) : platform === "instagram" ? (
        <>
          <InstagramInstructions />
        </>
      ) : platform === "youtube" ? (
        <>
          <YouTubeInstructions />
        </>
      ) : platform === "tiktok" ? (
        <>
          <TikTokInstructions />
        </>
      ) : null}

      <Examples platform={platform} />

      <h2>How to Write Great Captions:</h2>
      <p>
        So, now you know how to add captions, but how do we write great
        captions? Here are a few things to keep in mind:
      </p>
      <ol>
        <li>
          Readability - Take into consideration the size, color, background,
          font, and case of your captions.
        </li>
        <li>
          Accuracy - Captions should correctly capture everything that’s said
          word-for-word.
        </li>
        <li>
          Synchronization - Make sure the captions are synchronized at the right
          time!
        </li>
        <li>
          Length - Don’t caption one word at a time, but also don’t make
          captions four lines long.
        </li>
      </ol>
      <p>
        To learn more about how to write great captions, visit{" "}
        <a
          className="usefulLinks"
          href="https://meryl.net/captioned-videos-complete-guide/#Caption10_Guidelines_Create_Great_Captioned_Videos"
        >
          this article written by an actual Deaf person who uses captions.
        </a>
      </p>
      {platform === "twitter" || platform === "facebook" ? (
        <Continue
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
          pages={1}
        />
      ) : (
        <Continue
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
          pages={2}
        />
      )}
    </>
  );
};

export default VidCapt;
