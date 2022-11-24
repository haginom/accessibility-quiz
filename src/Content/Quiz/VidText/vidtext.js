import React from "react";
import {
  TwitterExample,
  TwitterGoodExample,
  DesText,
  FacebookGoodExample,
  FacebookGoodExample1,
} from "./links";
import Button from "../../../components/Button";
import { Section, StyledTitle, ButtonPanel } from "../styling";
import Continue from "../../../components/Continue";

export const VidText = ({ index, setIndex, platform, post }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Descriptive</StyledTitle>
      {answer === "" ? (
        <VidTextQ platform={platform} answer={answer} setAnswer={setAnswer} />
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

export const VidTextQ = ({ setAnswer, platform }) => {
  return (
    <>
      <h1>Do you have descriptive text accompanying the video?</h1>
      <p>
        Another option for making the visual elements of your video more
        accessible for blind and low vision users is to create a written
        description and have it available as readable text with your video. This
        is helpful for blind and low vision users to get a sense of what is
        happening in your video or if your video simply doesn’t load for the
        user for whatever reason.
      </p>
      {platform === "twitter" ? (
        <TwitterExample />
      ) : platform === "facebook" ? (
        <>
          <FacebookGoodExample1 />
        </>
      ) : null}

      <p>
        Now that you know more about descriptive text and its benefits, does
        your video have descriptive text?
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

const No = ({ index, setIndex, setAnswer, platform, post }) => {
  return (
    <>
      <h1>No worries!</h1>
      <p>
        Below is a good example of what descriptive text of a video on{" "}
        {platform} can look like! The screenreader or the text-to-speech program
        will read the thread, so keep that in mind when writing!
      </p>
      <p>
        Here is the original {post} with the trailer (bonus: it has open
        captions!):
      </p>
      {platform === "twitter" ? (
        <TwitterGoodExample />
      ) : platform === "facebook" ? (
        <FacebookGoodExample />
      ) : null}

      <p>
        The accompanying thread is the descriptive text that describes the key
        details and parts of the trailer. You only need to describe the most
        important details. Since this will be read aloud, being too lengthy or
        wordy is not helpful.
      </p>
      <DesText />
      <p>
        A good way to test if the description is good or not is to get someone
        to read it aloud, close your eyes, and see if the text still is able to
        convey the most crucial scenes of the video well.
      </p>
      <p>
        In addition, avoid any emojis or emoticons in your descriptive text. It
        doesn’t translate well through screen readers or text-to-speech
        programs.
      </p>
      <p>
        If you want to learn more about written descriptive text or other
        similar accommodations (like audio descriptions), this article gives a
        good overview of the various video descriptions available.
      </p>
      <Continue
        pages={1}
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
      />
    </>
  );
};
const Yes = ({ index, setIndex, setAnswer, platform, post }) => {
  return (
    <>
      <h1>Love to see it!</h1>
      <p>
        Below is a good example of what descriptive text of a video on{" "}
        {platform} can look like! If your descriptive text looks similar to the
        example below, you’re set!
      </p>
      <p>
        Here is the original {post} with the trailer (bonus: it has open
        captions!):
      </p>
      <TwitterGoodExample />
      <p>
        And this is the accompanying thread of {post}s that describes what’s
        happening in the trailer:
      </p>
      <DesText />
      <p>
        If you want to learn more about written descriptive text or other
        similar accommodations (like audio descriptions), this article gives a
        good overview of the various video descriptions available.
      </p>
      <Continue
        pages={1}
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
      />
    </>
  );
};

export default VidText;
