import React from "react";
import { Section, StyledTitle, ButtonPanel } from "../styling";
import Continue from "../../../components/Continue";
import Button from "../../../components/Button";
import { TwitterBadExample, TwitterGoodExample } from "./links";

export const Hashtag = ({ index, setIndex, platform, post }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Hashtag</StyledTitle>
      {answer === "" ? (
        <HashtagQ setAnswer={setAnswer} platform={platform} />
      ) : answer === "yes" ? (
        <Yes
          post={post}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        >
          Yes
        </Yes>
      ) : (
        <No post={post} index={index} setIndex={setIndex} setAnswer={setAnswer}>
          No
        </No>
      )}
    </Section>
  );
};

const HashtagQ = ({ setAnswer, platform }) => {
  return (
    <>
      <h1>
        If you are using a hashtag, did you capitalize the first letter in each
        word?
      </h1>
      <p>
        This kind of capitalization style is called Title Case, Pascal Case, or
        Camel Case.
      </p>
      <p>
        The capital letters help a screen reader identify each word, increasing
        the chances of it pronouncing the hashtag correctly. This is one of the
        easiest accessibility practices to follow. In general, Camel Case
        formatting is easier for everyone to read, no matter the ability of
        their vision, because it’s easier for our eyes to track.
      </p>
      <p> Knowing this, is the hashtag in your {platform} accessible?</p>
      <ButtonPanel>
        <Button onClick={() => setAnswer("yes")}>Yes</Button>
        <Button onClick={() => setAnswer("no")}>No</Button>
      </ButtonPanel>
    </>
  );
};

const Yes = ({ index, setIndex, post, setAnswer }) => {
  return (
    <>
      <h1>Perfect!</h1>
      <p>
        {" "}
        Just to double check, your hashtags should look something like the
        following Disney {post} about Disability Pride Month:
      </p>
      <TwitterGoodExample />
      <Continue index={index} setIndex={setIndex} setAnswer={setAnswer} />
    </>
  );
};

const No = ({ index, setIndex, post, setAnswer }) => {
  return (
    <>
      <h1>Let’s fix it!</h1>
      <p>
        This is one of the easiest fixes you can make that can greatly improve
        your {post}’s accessibility to users.
      </p>
      <p>
        What we’re trying to avoid are bad hashtags caused by misreading where
        one word stops and begins. Like the infamous Susan Boyle’s album party
        hashtag as seen in George Takei’s {post}.
      </p>
      <TwitterBadExample />
      <p>
        And instead, we're looking for hashtags (especially longer ones like the
        Disney {post} shown belown) that are easier to read. By capitalizing the
        first word in each word in the hashtag, we make it clear what the
        hashtag says.
      </p>
      <TwitterGoodExample />
      <p>
        You can even test it for yourself - compare how you read
        #ReimagineTomorrowTogether versus how you read
        #reimaginetomorrowtogether. Camel case makes it easier, right? So, be
        sure that your hashtags are accessible!
      </p>
      <p>
        (Note: the Disney example {post} is a good example of having good
        hashtags, but the attached photos do not have alt text, so please keep
        that in mind.)
      </p>
      <Continue index={index} setIndex={setIndex} setAnswer={setAnswer} />
    </>
  );
};

export default Hashtag;
