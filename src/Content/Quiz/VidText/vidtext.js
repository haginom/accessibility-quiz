import React from "react";
import Yes from "./yes";
import No from "./no";
import { TwitterExample } from "./embedLinks";
import styled from "styled-components";
import StyledTitle from "../../../components/title";

const Section = styled.section`
  margin-top: 2rem;
  margin-left: 6rem;
  > * {
    margin-top: 2rem;
  }
`;
export const VidText = ({ index, setIndex, platform, post }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <>
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
    </>
  );
};

export const VidTextQ = ({ setAnswer }) => {
  return (
    <Section>
      <h1>Do you have descriptive text accompanying the video?</h1>
      <p>
        Another option for making the visual elements of your video more
        accessible for blind and low vision users is to create a written
        description and have it available as readable text with your video. This
        is helpful for blind and low vision users to get a sense of what is
        happening in your video or if your video simply doesn’t load for the
        user for whatever reason.
      </p>
      <TwitterExample />
      <p>
        Now that you know more about descriptive text and its benefits, does
        your video have descriptive text?
      </p>

      <button onClick={() => setAnswer("yes")}>Yes</button>
      <button onClick={() => setAnswer("no")}>No</button>
    </Section>
  );
};

export default VidText;
