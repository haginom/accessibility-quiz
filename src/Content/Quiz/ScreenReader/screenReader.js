import React from "react";
import Button from "../../../components/Button";
import { Section, StyledTitle, ButtonPanel, QuizHeaders } from "../styling";
import Continue from "../../../components/Continue";
import { FacebookExamples, InstagramExamples, TwitterExamples } from "./link";

export const ScreenReader = ({ index, setIndex, platform }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Copy</StyledTitle>
      {answer === "" ? (
        <ScreenReaderQ setAnswer={setAnswer} />
      ) : answer === "yes" ? (
        <Yes
          answer={answer}
          platform={platform}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        >
          Yes
        </Yes>
      ) : (
        <No
          answer={answer}
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

export const ScreenReaderQ = ({ setAnswer }) => {
  return (
    <>
      <QuizHeaders>
        Have you run your copy through a screen reader or text-to-speech
        program?
      </QuizHeaders>
      <p>
        Running your copy through a screen reader or text-to-speech (TTS)
        program is good practice to make sure that your posts still makes sense
        to blind/low vision people.
      </p>
      <p>
        Because of this, try not to use alternative characters (such as fancy
        styling), use an excessive amount of emojis, or do a ton of ASCII art in
        your posts. We understand that joining in on trendy memes are important,
        but if you're going to participate in a meme that is not
        screenreader-friendly, be sure to include a description of the meme in
        the comment or in the photo caption so everyone is included.
      </p>
      <p>
        With those reminders, have you run your copy through a screen reader or
        TTS program?
      </p>

      <ButtonPanel>
        <Button onClick={() => setAnswer("yes")}>Yes</Button>
        <Button onClick={() => setAnswer("no")}>No</Button>
      </ButtonPanel>
    </>
  );
};

const Yes = ({ index, setIndex, setAnswer, platform, answer }) => {
  return (
    <>
      <QuizHeaders>Great</QuizHeaders>
      <p>
        Based on how it sounds to you, please make the appropriate adjustments.
      </p>
      <p>
        {" "}
        Try to avoid using a ton of emojis in your posts and leave them at the
        end if possible. Try not to use alternative characters (like tiny font
        generators). And try to avoid doing memes with ASCII art (or provide a
        description in the photo caption or comments).
      </p>
      {console.log(platform)}
      {platform === "twitter" ? (
        <TwitterExamples />
      ) : platform === "facebook" ? (
        <FacebookExamples />
      ) : platform === "instagram" ? (
        <InstagramExamples answer={answer} />
      ) : null}

      <Continue
        pages={1}
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
      />
    </>
  );
};

const No = ({ index, setIndex, setAnswer, platform, answer }) => {
  return (
    <>
      <QuizHeaders>Here's how to get started!</QuizHeaders>
      <p>
        There are plenty of free TTS programs that you can download or that come
        with your laptop or phone.
      </p>
      <p>
        For PCs: Download{" "}
        <a href="https://www.nvaccess.org/download/">
          NVDA (Non-Visual Desktop Access)
        </a>
      </p>
      <p>
        For Apple:{" "}
        <a href="https://www.apple.com/accessibility/vision/">
          VoiceOver is already built in
        </a>{" "}
        and can be turned on in Accessibility settings.
      </p>
      <p>
        Also, if you use Chrome as your browser, you can get get{" "}
        <a href="https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en">
          the ChromeVox extension.
        </a>
      </p>
      <p>
        In general, most computers and phones have an option to turn text into
        speech (you can highlight the text and select the "Speech" option) or
        you can use <a href="https://ttsreader.com/">this TTS website.</a>
      </p>
      {platform === "twitter" ? (
        <TwitterExamples />
      ) : platform === "facebook" ? (
        <FacebookExamples />
      ) : platform === "instagram" ? (
        <InstagramExamples answer={answer} />
      ) : null}
      <Continue
        pages={1}
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
      />{" "}
    </>
  );
};

export default ScreenReader;
