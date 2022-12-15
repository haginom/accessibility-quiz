import React from "react";
import {
  FacebookExample,
  TwitterExample,
  TwitterGoodExample,
  DesText,
  FacebookExample2,
} from "./links";
import Button from "../../../components/Button";
import {
  Section,
  StyledTitle,
  ButtonPanel,
  QuizHeaders,
  ImgContainer,
} from "../styling";
import Continue from "../../../components/Continue";
import { Columns } from "../../../theme/extra";
import styled from "styled-components";

const Text = styled.p(
  ({ theme }) => `
  font-size:  ${theme.fontSizes[1]};
  margin-bottom: ${theme.space[1]};
  margin-top: 1rem;
`
);

const UnEqualColumns = styled.div(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  div:first-child{
    flex: 0 0 60%;
  }
  div:last-child{
    flex: 0 0 25%;
    margin-right: 4rem;
    margin-left: 2rem;

    > * {
      margin-top: 1rem;
      margin-bottom: .5rem;
    }
  }

`
);

const InlineText = styled.p`
  display: inline;
  margin-top: 1rem;
`;

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
          post={post}
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
      <QuizHeaders>
        Do you have descriptive text accompanying the video?
      </QuizHeaders>
      <p>
        Another option for making the visual elements of your video more
        accessible for blind and low vision users is to create a written
        description and have it available as readable text with your video. This
        is helpful for blind and low vision users to get a sense of what is
        happening in your video or if your video simply doesn’t load for the
        user for whatever reason.
      </p>
      <ImgContainer>
        {platform === "twitter" ? (
          <TwitterExample />
        ) : platform === "facebook" ? (
          <FacebookExample />
        ) : null}
      </ImgContainer>
      <p className="mt-extra">
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

const No = ({ index, setIndex, setAnswer, platform, post }) => (
  <>
    <QuizHeaders>No worries!</QuizHeaders>
    <p>
      Below is a good example of what descriptive text of a video on {platform}{" "}
      can look like! The screenreader or the text-to-speech program will read
      the thread, so keep that in mind when writing!
    </p>
    {platform === "twitter" ? (
      <>
        <p>
          Here is the original Tweet with the trailer (bonus: it has open
          captions!):
        </p>
        <ImgContainer>
          <TwitterGoodExample />
        </ImgContainer>
      </>
    ) : platform === "facebook" ? (
      <>
        <p>Here is the video on Facebook (bonus: it has closed captions!) </p>
        <ImgContainer>
          <FacebookExample2 />
        </ImgContainer>
      </>
    ) : null}
    <InlineText>
      The accompanying thread is the descriptive text that describes the key
      details and parts of the trailer.{" "}
    </InlineText>
    {platform === "facebook" ? (
      <InlineText>
        {" "}
        Since Facebook pushes comments written by the author to the top, it
        should still be easily accessible to everyone.{" "}
      </InlineText>
    ) : null}{" "}
    <InlineText>
      You only need to describe the most important details. Since this will be
      read aloud, being too lengthy or wordy is not helpful.
    </InlineText>
    <UnEqualColumns>
      {platform === "twitter" ? <DesText /> : null}
      <div>
        <p>
          A good way to test if the description is good or not is to get someone
          to read it aloud, close your eyes, and see if the text still is able
          to convey the most crucial scenes of the video well.
        </p>
        <p>
          In addition, avoid any emojis or emoticons in your descriptive text.
          It doesn’t translate well through screen readers or text-to-speech
          programs.
        </p>
      </div>
    </UnEqualColumns>
    {platform === "facebook" ? <></> : null}
    <p className="mt-extra">
      If you want to learn more about written descriptive text or other similar
      accommodations (like audio descriptions),{" "}
      <a href="https://www.accessible-social.com/audio-and-video/video-descriptions">
        this article gives a good overview of the various video descriptions
        available.
      </a>
    </p>
    <Continue
      pages={1}
      index={index}
      setIndex={setIndex}
      setAnswer={setAnswer}
    />
  </>
);

const Yes = ({ index, setIndex, setAnswer, platform, post }) => {
  return (
    <>
      <QuizHeaders>Love to see it!</QuizHeaders>
      <p>
        Below is a good example of what descriptive text of a video on{" "}
        {platform} can look like! If your descriptive text looks similar to the
        example below, you’re set!
      </p>
      <Columns>
        <Text>
          Here is the original {post} with the trailer (bonus: it has open
          captions!):
        </Text>
        <ImgContainer>
          {platform === "twitter" ? (
            <TwitterGoodExample />
          ) : platform === "facebook" ? (
            <></>
          ) : null}
        </ImgContainer>

        <Text>
          And this is the accompanying thread of {post}s that describes what’s
          happening in the trailer:
        </Text>
        <ImgContainer>
          <DesText />
        </ImgContainer>
      </Columns>
      <p>
        If you want to learn more about written descriptive text or other
        similar accommodations (like audio descriptions),{" "}
        <a href="https://www.accessible-social.com/audio-and-video/video-descriptions">
          this article gives a good overview of the various video descriptions
          available.
        </a>
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
