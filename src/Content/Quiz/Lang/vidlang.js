import React from "react";
import Button from "../../../components/Button";
import { Section, StyledTitle, ButtonPanel } from "../styling";
import Continue from "../../../components/Continue";
import { TwitterGoodExample, TwitterBadExample } from "./embedLinks";

export const VidLang = ({ index, setIndex, platform }) => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Section>
      <StyledTitle>Language</StyledTitle>
      {answer === "" ? (
        <VidLangQ platform={platform} answer={answer} setAnswer={setAnswer} />
      ) : answer === "yes" ? (
        <Yes
          platform={platform}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        >
          Yes
        </Yes>
      ) : answer === "no" ? (
        <No
          platform={platform}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        >
          No
        </No>
      ) : answer === "unsure" ? (
        <Unsure index={index} setIndex={setIndex} setAnswer={setAnswer} />
      ) : (
        "null"
      )}
    </Section>
  );
};

const VidLangQ = ({ setAnswer }) => {
  return (
    <>
      <h1>
        Does the language in your video or accompanying your video mention
        disabled people or disability-related issues?
      </h1>
      <p>
        Does your video feature disabled people? Does your copy or narration
        talk about disabled people? Does your video talk about
        disability-related issue or topics that may be relevant to the
        disability community? For example: is your social media content related
        to Disability Pride Month? Are you highlighting DEI initiatives that
        your brand is doing? If so, you'll want to double check the language
        that you use.
      </p>
      <TwitterGoodExample />
      <TwitterBadExample />
      <p>
        Knowing this, do you think your video contains language about disabled
        people or disability? Are you confident that you are using the language
        and terms that the disabled community actually prefers?
      </p>
      <ButtonPanel>
        <Button onClick={() => setAnswer("yes")}>Yes</Button>
        <Button onClick={() => setAnswer("unsure")}>Unsure</Button>
        <Button onClick={() => setAnswer("no")}>No</Button>
      </ButtonPanel>
    </>
  );
};

const Yes = ({ index, setIndex, setAnswer }) => {
  return (
    <>
      <h1>Awesome</h1>
      <p>
        We love that you’re including disabled people and/or the issues that
        impact them. Because of that, you should double check that your language
        isn't ableist or offensive to disabled people. If your video features
        disabled people, you should ask the person being featured in the video
        how they’d like to be identified.
      </p>
      <p>
        While every disabled person will have their own opinion on language,
        here are some general guidelines when talking to or about the disabled
        community.
      </p>
      <ol>
        <li>Use identity-first language.</li>
        <ul>
          <li>
            Do say: “disabled person,” “autistic person,” or “wheelchair user.”
          </li>
          <li>
            Don’t say: “person with a disability,” “person with autism,” or
            “user bound to a wheelchair.”
          </li>
        </ul>
        <li>Avoid infantilizing language.</li>
        <ul>
          <li>
            Don’t say “person with special needs” or “differently abled”. Just
            say “disabled person.”
          </li>
          <li>
            When you can, ask the disabled person directly or consult the
            community!
          </li>
        </ul>
      </ol>
      <p>
        If you’re looking for a more comprehensive list, check out this list of
        ableist language that a disabled person compiled and organized.
      </p>
      <Continue index={index} setIndex={setIndex} setAnswer={setAnswer} />
    </>
  );
};

const No = ({ index, setIndex, setAnswer }) => {
  return (
    <>
      <h1>Sounds good!</h1>
      <p>
        In the future, if you do have a video that contains language relating to
        disability or disabled people, you can check out the resource below.
      </p>
      <p>
        It’s a compiled list of ableist language that one should keep in mind
        that was put together by a disabled person, Lydia X. Z. Brown.
      </p>
      <Continue index={index} setIndex={setIndex} setAnswer={setAnswer} />
    </>
  );
};

const Unsure = ({ index, setIndex, setAnswer }) => {
  return (
    <>
      <h1>That’s okay! Let’s learn more!</h1>
      <p>
        Learning about the respectful way to address the disability community
        can be difficult at first, especially since so many online resources are
        outdated. Ableism (discrimination against disabled people) is very much
        ingrained in our everyday language and it can be difficult to notice or
        root them out. As long as you do your best and learn from feedback from
        actually disabled people, you’ll be good!
      </p>
      <h2>General Tips on Language:</h2>
      <ol>
        <li>Use identity-first language.</li>
        <li>Avoid infantilizing language</li>
        <li>When you can, ask the community</li>
      </ol>
      <Continue index={index} setIndex={setIndex} setAnswer={setAnswer} />
    </>
  );
};

export default VidLang;
