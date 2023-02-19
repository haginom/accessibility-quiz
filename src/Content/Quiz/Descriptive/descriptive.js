import React from "react";
import Button from "../../../components/Button";
import {
  Section,
  StyledTitle,
  ButtonPanel,
  QuizHeaders,
  ImgContainer,
} from "../styling";
import Continue from "../../../components/Continue";
import DescriptiveGE from "../../../images/instagram/images/descriptive-1.png";
import DescriptiveGE2 from "../../../images/instagram/images/descriptive-2.png";

export const Descriptive = ({ index, setIndex }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Image</StyledTitle>
      {answer === "" ? (
        <DescriptiveQ setAnswer={setAnswer} />
      ) : answer === "yes" ? (
        <Yes index={index} setIndex={setIndex} setAnswer={setAnswer}>
          Yes
        </Yes>
      ) : (
        <No index={index} setIndex={setIndex} setAnswer={setAnswer}>
          No
        </No>
      )}
    </Section>
  );
};

export const DescriptiveQ = ({ setAnswer }) => {
  return (
    <>
      <QuizHeaders>Does your photo have an image description?</QuizHeaders>
      <p>
        While alt text on Instagram is good, Instagram is primarily a social
        media platform that people access on their phones (compared to Facebook
        and Twitter). Screen readers are phones can be trickier and people may
        not have the technology on their phone. That's why for Instagram, at
        least, we recommend also including image description with the post.
      </p>
      <p>
        Image descriptions are similar to alt text but can be more detailed. It
        can be in a comment or it can be in the caption.
      </p>
      <ImgContainer>
        <img src={DescriptiveGE} alt="" />
      </ImgContainer>
      <p>
        Now that you know more about image descriptions, does your post on
        Instagram have it?
      </p>
      <ButtonPanel>
        <Button onClick={() => setAnswer("yes")}>Yes</Button>
        <Button onClick={() => setAnswer("no")}>No</Button>
      </ButtonPanel>
    </>
  );
};

const Yes = ({ index, setIndex, setAnswer, platform, post }) => {
  return (
    <>
      <QuizHeaders>Perfect!</QuizHeaders>
      <p>
        Just to double check, it should look something like the posts below! The
        image description can be posted in the caption (like the first post) or
        in the comments (like the second post).
      </p>
      <ImgContainer>
        <img src={DescriptiveGE} alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src={DescriptiveGE2} alt="" />
      </ImgContainer>
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

const No = ({ index, setIndex, setAnswer, platform }) => {
  return (
    <>
      <QuizHeaders>No worries!</QuizHeaders>
      <p>
        Below are some good examples of what image descriptions text on
        Instagram can look like! Even though, image descriptions is slightly
        different from alt text, the same principles apply when it comes to
        writing image descriptions.{" "}
      </p>
      <ImgContainer>
        <img src={DescriptiveGE} alt="" />
      </ImgContainer>
      <ImgContainer>
        <img src={DescriptiveGE2} alt="" />
      </ImgContainer>
      <p>
        The image description can be posted in the caption (like the first post)
        or in the comments (like the second post). You only need to describe the
        most important details. Generally, being too lengthy or wordy is not
        helpful as people have limited time and attention span. In addition,
        avoid any emojis or emoticons in your description.
      </p>
      <p>
        A good way to test if the description is good or not is to get someone
        else to read it aloud, close your eyes, and see if the text still is
        able to convey the most crucial information of the post.
      </p>
      <p>
        If you want to learn more about written descriptive text or other
        similar accommodations (like audio descriptions), this article gives a
        good overview of the various video descriptions available.{" "}
      </p>
      <Continue
        pages={1}
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
      />{" "}
    </>
  );
};

export default Descriptive;
