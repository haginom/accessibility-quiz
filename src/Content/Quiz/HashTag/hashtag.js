import React from "react";
import { Section, StyledTitle, ButtonPanel } from "../styling";
import Continue from "../../../components/Continue";
import Button from "../../../components/Button";
import {
  InstaBadExample,
  InstaGoodExample,
  InstaGoodExample2,
  TikTokBadExample,
  TikTokGoodExample,
  TikTokInstructions,
  TwitterBadExample,
  TwitterGoodExample,
} from "./links";

export const Hashtag = ({ index, setIndex, platform, post }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Hashtag</StyledTitle>
      {answer === "" ? (
        <HashtagQ setAnswer={setAnswer} platform={platform} />
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
          post={post}
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

const Yes = ({ index, setIndex, post, platform, setAnswer }) => {
  return (
    <>
      <h1>Perfect!</h1>
      <p>
        Just to double check, your hashtags should look something like the
        following{" "}
        {platform === "twitter" ? (
          <>Disney {post} about Disability Pride Month:</>
        ) : platform === "tiktok" ? (
          <>Tiktok from Netflix promoting a show:</>
        ) : platform === "instagram" ? (
          <>Disney+ post about an upcoming show:</>
        ) : null}
      </p>
      {platform === "twitter" ? (
        <>
          <TwitterGoodExample />
        </>
      ) : platform === "tiktok" ? (
        <>
          <TikTokGoodExample />
        </>
      ) : platform === "instagram" ? (
        <>
          <InstaGoodExample />
        </>
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

const No = ({ index, setIndex, post, platform, setAnswer }) => {
  return (
    <>
      <h1>Let’s fix it!</h1>
      <p>
        This is one of the easiest fixes you can make that can greatly improve
        your {post}’s accessibility to users.
      </p>
      <p>
        What we're trying to avoid is leaving people confused when they read the
        hashtag.{" "}
      </p>

      {platform === "tiktok" ? (
        <>
          <TikTokInstructions />
          <TikTokBadExample />
        </>
      ) : platform === "twitter" ? (
        <>
          <TwitterBadExample />
        </>
      ) : platform === "instagram" ? (
        <>
          <InstaGoodExample2 />
        </>
      ) : null}
      <p>
        And instead, we're looking for hashtags (especially longer ones like{" "}
        {platform === "tiktok" ? (
          <>this really long Netflix show title)</>
        ) : platform === "twitter" ? (
          <>the Disney {post} shown belown)</>
        ) : platform === "instagram" ? (
          <>this show's)</>
        ) : null}{" "}
        that are easier to read.
      </p>
      <p>
        By capitalizing the first word in each word in the hashtag, we make it
        clear what the hashtag says.
      </p>
      {platform === "tiktok" ? (
        <>
          <TikTokGoodExample />
        </>
      ) : platform === "twitter" ? (
        <>
          <TwitterGoodExample />
        </>
      ) : platform === "instagram" ? (
        <>
          <InstaBadExample />
        </>
      ) : null}
      <p>You can even test it for yourself - compare how you read</p>
      <p>#TheMostHatedManOnTheInternet</p>
      <p>vs. how you read</p>
      <p>#themosthantedmanontheinternet. </p>
      <p>
        Camel case makes it easier, right? So, be sure that your hashtags are
        accessible!
      </p>
      {platform === "twitter" ? (
        <>
          <p>
            (Note: the Disney example {post} is a good example of having good
            hashtags, but the attached photos do not have alt text, so please
            keep that in mind.)
          </p>
        </>
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

export default Hashtag;
