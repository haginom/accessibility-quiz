import React from "react";
import {
  Section,
  StyledTitle,
  ButtonPanel,
  QuizHeaders,
  SocialMediaExample,
} from "../styling";
import Continue from "../../../components/Continue";
import Button from "../../../components/Button";
import TwitterBE from "../../../images/twitter/video/hashtag-1.png";
import TwitterGE from "../../../images/twitter/video/hashtag-2.png";
import Fb1 from "../../../images/facebook/video/fb8.png";
import Fb2 from "../../../images/facebook/video/fb9.png";
import TikTokGE from "../../../images/tiktok/IMG_0982 1.png";
import TikTokBE from "../../../images/tiktok/IMG_0984 1.png";
import InstaGE from "../../../images/instagram/video/insta5.png";
import InstaGE2 from "../../../images/instagram/video/insta6.png";
import InstaBE from "../../../images/instagram/video/insta7.png";

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
      <QuizHeaders>
        If you are using a hashtag, did you capitalize the first letter in each
        word?
      </QuizHeaders>
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
      <QuizHeaders>Perfect!</QuizHeaders>
      <p>
        Just to double check, your hashtags should look something like the
        following{" "}
        {platform === "twitter"
          ? `Disney {post} about Disability Pride Month:`
          : platform === "facebook"
          ? `Facebook post made by The Wheel of Time to highlight a character for World Storytelling Day.`
          : platform === "tiktok"
          ? `Tiktok from Netflix promoting a show:`
          : platform === "instagram"
          ? `Disney+ post about an upcoming show:`
          : null}
      </p>
      {platform === "twitter" ? (
        <>
          <SocialMediaExample
            img={TwitterGE}
            link="https://twitter.com/Disney/status/1552005843490639873?s=20&t=HONcEcZCqBqJjfuoJsLocg"
          />
        </>
      ) : platform === "facebook" ? (
        <>
          <SocialMediaExample
            img={Fb1}
            link="https://www.facebook.com/watch/?v=962435564411321&ref=sharing"
          />
        </>
      ) : platform === "tiktok" ? (
        <>
          <SocialMediaExample img={TikTokGE} />
        </>
      ) : platform === "instagram" ? (
        <>
          <SocialMediaExample img={InstaGE} />
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
      <QuizHeaders>Let’s fix it!</QuizHeaders>
      <p>
        This is one of the easiest fixes you can make that can greatly improve
        your {post}’s accessibility to users.
      </p>
      {platform === "twitter" ? (
        <>
          <p>
            What we’re trying to avoid are bad hashtags caused by misreading
            where one word stops and begins. Like the infamous Susan Boyle’s
            album party hashtag as seen in George Takei’s Tweet.{" "}
          </p>
          <SocialMediaExample
            img={TwitterBE}
            alt="Tweet reads `Susan Doyle's PR for her new album could use a second pair of eyes, given the hashtag. Oh myyy. #Susanalbumparty'"
            link="https://twitter.com/GeorgeTakei/status/272831169559674880?s=20&t=LEc6F75ZetPEcU0JLoz-og"
          />
        </>
      ) : platform === "facebook" ? (
        <>
          <p>
            What we’re trying to avoid are bad hashtags caused by misreading
            where one word stops and begins. Like this McDonald’s post where it
            looks like it could be saying McDonald Shacks instead of McDonald's
            Hacks.
          </p>
          <SocialMediaExample
            img={Fb2}
            alt="Tweet"
            link="https://www.facebook.com/watch/?v=4914925538530902&ref=sharing"
          />
        </>
      ) : platform === "instagram" ? (
        <>
          <p>
            What we’re trying to avoid are bad hashtags caused by misreading
            where one word stops and begins.{" "}
          </p>
          <p>
            Like the Teen Vogue post where it looks like it could be saying PLL
            Originals In, instead of PLL Original Sin.
          </p>
          <SocialMediaExample img={InstaBE} />
        </>
      ) : platform === "tiktok" ? (
        <>
          <p>
            What we're trying to avoid is leaving people confused when they read
            the hashtag.
          </p>
          <p>
            The TikTok made by Playstation doesn’t utilize camel case - which is
            fine if you are only using hashtags with only one word like PS4 or
            PS5.
          </p>
          <p>
            But if you didn't know the game, you might not know the hashtag is
            trying to tell you the game is Ghost of Tsushima. If they used camel
            case, the guesswork would be removed.
          </p>
          <p>Also, capitalizing the PLL would help too!</p>
          <SocialMediaExample img={TikTokBE} />
        </>
      ) : null}

      <p>
        And instead, we're looking for hashtags (especially longer ones like{" "}
        {platform === "tiktok" ? (
          `this really long Netflix show title)`
        ) : platform === "facebook" ? (
          `the post shown below`
        ) : platform === "twitter" ? (
          `the Disney tweet shown below)`
        ) : platform === "instagram" ? (
          <>this show's)</>
        ) : null}{" "}
        that are easier to read. By capitalizing the first word in each word in
        the hashtag, we make it clear what the hashtag says.
      </p>

      {platform === "tiktok" ? (
        <SocialMediaExample img={TikTokGE} />
      ) : platform === "facebook" ? (
        <SocialMediaExample
          img={Fb1}
          link="https://www.facebook.com/watch/?v=962435564411321&ref=sharing"
        />
      ) : platform === "twitter" ? (
        <>
          <SocialMediaExample
            img={TwitterGE}
            alt="twitter"
            link="https://twitter.com/Disney/status/1552005843490639873?s=20&t=HONcEcZCqBqJjfuoJsLocg"
          />
        </>
      ) : null}
      {platform === "twitter" ? (
        <>
          <p>
            You can even test it for yourself - compare how you read
            #ReimagineTomorrowTogether versus how you read
            #reimaginetomorrowtogether. Camel case makes it easier, right? So,
            be sure that your hashtags are accessible!
          </p>
          <p className="italic">
            (Note: the Disney example tweet is a good example of having good
            hashtags, but the attached photos do not have alt text, so please
            keep that in mind.)
          </p>
        </>
      ) : platform === "facebook" ? (
        <p>
          You can even test it for yourself - compare how you read
          #WorldStorytellingDay versus how you read #worldstorytellingday. Camel
          case makes it easier, right? So, be sure that your hashtags are
          accessible!
        </p>
      ) : (
        <>
          {" "}
          <p>You can even test it for yourself - compare how you read</p>
          <p>#TheMostHatedManOnTheInternet</p>
          <p>vs. how you read</p>
          <p>#themosthantedmanontheinternet. </p>
          <p>
            Camel case makes it easier, right? So, be sure that your hashtags
            are accessible!
          </p>
        </>
      )}

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
