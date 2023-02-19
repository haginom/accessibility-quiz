import React from "react";
import Tw1 from "../../../images/twitter/video/vidText-1.png";
import Tw2 from "../../../images/twitter/video/vidText-2.png";
import Tw3 from "../../../images/twitter/video/vidText-3.png";
import Fb1 from "../../../images/facebook/video/fb5.png";
import Fb2 from "../../../images/facebook/video/fb6.png";
import Fb3 from "../../../images/facebook/video/fb7.png";
import Button from "../../../components/Button";
import {
  Section,
  StyledTitle,
  ButtonPanel,
  QuizHeaders,
  SocialMediaExample,
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
  margin-bottom: 2.5rem;

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
      {platform === "twitter" ? (
        <SocialMediaExample
          img={Tw1}
          altText={
            "A good example of a photo tweet that has an image description added so the content is accessible to more people."
          }
        />
      ) : platform === "facebook" ? (
        <SocialMediaExample
          idName="mw-none"
          img={Fb1}
          altText={"A facebook example of descriptive text"}
        />
      ) : null}
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
        <SocialMediaExample
          img={Tw2}
          link="https://twitter.com/TheWheelOfTime/status/1475858812221280258"
          alt="A good twitter example of descriptive text"
        />
      </>
    ) : platform === "facebook" ? (
      <>
        <p>Here is the video on Facebook (bonus: it has closed captions!) </p>
        <SocialMediaExample
          img={Fb3}
          link="https://www.facebook.com/watch/?v=1189681685124452&ref=sharing"
        />
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
    {platform === "twitter" ? (
      <UnEqualColumns>
        <SocialMediaExample
          img={Tw3}
          link="https://twitter.com/TheWheelOfTime/status/1475858818533707779?s=20&t=RpyjPXodEcjMRLiN4BA9sw"
          altText="The First Descriptive Text from this Tweet reads: Open on Logain in his cage as the Prime Video logo appears in front of him. The entire video is captioned with the words beig spoken. Cut to a closeup of Logain's face just before his cage explodes with his channeling, knocking Aes Sedai to the ground."
        />
        <div>
          <p>
            A good way to test if the description is good or not is to get
            someone to read it aloud, close your eyes, and see if the text still
            is able to convey the most crucial scenes of the video well.
          </p>
          <p>
            In addition, avoid any emojis or emoticons in your descriptive text.
            It doesn’t translate well through screen readers or text-to-speech
            programs.
          </p>
        </div>
      </UnEqualColumns>
    ) : (
      <>
        <p className="mt-small">
          A good way to test if the description is good or not is to get someone
          to read it aloud, close your eyes, and see if the text still is able
          to convey the most crucial scenes of the video well.
        </p>
        <p>
          In addition, avoid any emojis or emoticons in your descriptive text.
          It doesn’t translate well through screen readers or text-to-speech
          programs.
        </p>
        <SocialMediaExample
          idName="mw-none"
          img={Fb1}
          alt="The Wheel of Time Video with DESCRIPTIVE TEXT: Behind the scenes footage from the set of season two including shots of cast and crew at a table read, talent in character filming on set, artists working on sculpts, actors ride on horses in the desert and a stuntman being flipped ov.."
        />
      </>
    )}
    {platform === "facebook" ? <></> : null}
    <p className="mt-extra">
      If you want to learn more about written descriptive text or other similar
      accommodations (like audio descriptions),{" "}
      <a
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.accessible-social.com/audio-and-video/video-descriptions"
      >
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

      {platform === "twitter" ? (
        <Columns>
          <Text>
            Here is the original {post} with the trailer (bonus: it has open
            captions!):
          </Text>
          <SocialMediaExample
            img={Tw2}
            link="https://twitter.com/TheWheelOfTime/status/1475858812221280258"
            alt="A good twitter example of descriptive text"
          />
          <Text>
            And this is the accompanying thread of {post}s that describes what’s
            happening in the trailer:
          </Text>
          <SocialMediaExample
            img={Tw3}
            link="https://twitter.com/TheWheelOfTime/status/1475858818533707779?s=20&t=RpyjPXodEcjMRLiN4BA9sw"
            altText="The First Descriptive Text from this Tweet reads: Open on Logain in his cage as the Prime Video logo appears in front of him. The entire video is captioned with the words beig spoken. Cut to a closeup of Logain's face just before his cage explodes with his channeling, knocking Aes Sedai to the ground."
          />
        </Columns>
      ) : platform === "facebook" ? (
        <SocialMediaExample
          img={Fb2}
          link="https://www.facebook.com/watch/?v=1189681685124452&ref=sharing"
        />
      ) : null}

      <p>
        If you want to learn more about written descriptive text or other
        similar accommodations (like audio descriptions),{" "}
        <a
          className="link"
          href="https://www.accessible-social.com/audio-and-video/video-descriptions"
        >
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
