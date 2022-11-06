import React from "react";
import {
  TwitterOpenCaptions,
  TwitterClosedCaptions,
  FacebookOpenCaptions,
  FacebookClosedCaptions,
  TwitterInstructions,
  FacebookInstructions,
} from "./embedLinks";
import Button from "../../../components/Button";
import { Layout, Columns } from "../../../theme/extra";
import StyledTitle from "../../../components/title";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const Section = styled.section`
  margin-top: 2rem;
  margin-left: 6rem;
  > * {
    margin-top: 2rem;
  }
`;

export const VidCapt = ({ index, setIndex, platform, post }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <>
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
    </>
  );
};

const VidCaptQ = ({ setAnswer, answer, platform }) => {
  return (
    <>
      <Section>
        <h1>Does your video have captions (either closed or open)?</h1>
        <p>
          Closed captions are captions that can be toggled on or off. Open
          captions are permanently embedded on the video and cannot be toggled
          on and off. Captions are important for accessibility. It helps those
          with hearing disabilities, those with learning disabilities, and those
          who just don’t have their headphones with them.
        </p>
        {platform === "twitter" ? (
          <Flex>
            <TwitterOpenCaptions />
            <TwitterClosedCaptions />
          </Flex>
        ) : platform === "facebook" ? (
          <Flex>
            <FacebookOpenCaptions />
            <FacebookClosedCaptions />
          </Flex>
        ) : null}
        <p>
          According to a 2019 study from Verizon Media and Publicis Media, 69%
          of people watch videos without sound in public place. Even in private
          places, one in every four watch videos without sound. So, if your
          content doesn’t have captions, they’ll probably scroll on by.
        </p>
        <p>
          Now that you know more about captions and its benefits, does your
          video have either closed or open captions?
        </p>
      </Section>
      <Layout>
        <Button fontSize="1" onClick={() => setAnswer("yes")}>
          Yes
        </Button>
        <Button fontSize="1" onClick={() => setAnswer("no")}>
          No
        </Button>
      </Layout>
    </>
  );
};

const Yes = ({ index, setIndex, setAnswer, platform }) => {
  return (
    <Section>
      <h1>Fantastic</h1>
      <p>
        Below are some good examples of captioned videos on {platform}. If your
        captioned video look like this, you're good to go!
      </p>
      <Columns>
        <div>
          <p>
            Here's an example of a video with closed captions on {platform}(can
            be toggled on and off with the CC button):
          </p>
          {platform === "twitter" ? (
            <>
              <TwitterClosedCaptions />
            </>
          ) : platform === "facebook" ? (
            <>
              <FacebookClosedCaptions />
            </>
          ) : null}
        </div>
        <div>
          <p>
            Here's an example of a video with open captions on {platform} (while
            still following the brand's style):
          </p>
          {platform === "twitter" ? (
            <>
              <TwitterOpenCaptions />
            </>
          ) : platform === "facebook" ? (
            <>
              <FacebookOpenCaptions />
            </>
          ) : null}
        </div>
      </Columns>
      <Layout>
        <Button fontSize="1" onClick={() => setIndex(index + 1)}>
          Continue
        </Button>
        <Button fontSize="1" onClick={() => setAnswer("")}>
          Go Back <span>&#8592;</span>
        </Button>
      </Layout>
    </Section>
  );
};

const No = ({ index, setIndex, setAnswer, platform }) => {
  return (
    <Section>
      <h1>Let's add those captions</h1>
      <p>
        Unless you're posting a video with absolutely zero sound, you should
        have captions (closed or open) with your videos.
      </p>
      {console.log(platform)}
      {platform === "twitter" ? (
        <>
          <TwitterInstructions />
        </>
      ) : platform === "facebook" ? (
        <>
          <FacebookInstructions />
        </>
      ) : null}
      <p>
        Here's an example of a video with closed captions on {platform}(can be
        toggled on and off with the CC button):
      </p>
      {platform === "twitter" ? (
        <>
          <TwitterClosedCaptions />
        </>
      ) : platform === "facebook" ? (
        <>
          <FacebookClosedCaptions />
        </>
      ) : null}
      <p>
        Here's an example of a video with open captions on {platform} (while
        still following the brand's style):
      </p>
      {platform === "twitter" ? (
        <>
          <TwitterOpenCaptions />
        </>
      ) : platform === "facebook" ? (
        <>
          <FacebookOpenCaptions />
        </>
      ) : null}
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
        To learn more about how to write great captions, visit this article
        written by an actual Deaf person who uses captions.
      </p>
      <Layout>
        <Button fontSize="1" onClick={() => setIndex(index + 1)}>
          Continue
        </Button>
        <Button fontSize="1" onClick={() => setAnswer("")}>
          Go Back <span>&#8592;</span>
        </Button>
      </Layout>
    </Section>
  );
};

export default VidCapt;
