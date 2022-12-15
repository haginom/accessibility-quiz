import React from "react";
import Button from "../../../components/Button";
import {
  Section,
  StyledTitle,
  ButtonPanel,
  QuizHeaders,
  TwoColumns,
  StyledContainer,
  StyledText,
  StyledNB,
} from "../styling";
import Continue from "../../../components/Continue";
import { TwitterGoodExample, TwitterBadExample } from "./embedLinks";
import Quote1 from "../../../images/quote1.png";
import Quote2 from "../../../images/quote2.png";

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
        <Unsure
          platform={platform}
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
        />
      ) : (
        "null"
      )}
    </Section>
  );
};

const VidLangQ = ({ setAnswer }) => {
  return (
    <>
      <QuizHeaders>
        Does the language in your video or accompanying your video mention
        disabled people or disability-related issues?
      </QuizHeaders>
      <p>
        Does your video feature disabled people? Does your copy or narration
        talk about disabled people? Does your video talk about
        disability-related issue or topics that may be relevant to the
        disability community? For example: is your social media content related
        to Disability Pride Month? Are you highlighting DEI initiatives that
        your brand is doing? If so, you'll want to double check the language
        that you use.
      </p>
      <TwoColumns>
        <TwitterGoodExample />
        <TwitterBadExample />
      </TwoColumns>
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

const Yes = ({ index, setIndex, setAnswer, platform }) => {
  return (
    <>
      <QuizHeaders>Awesome</QuizHeaders>
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
      <ol className="large-numbers">
        <li>Use identity-first language.</li>
        <p>
          &#9989; Do say: “disabled person,” “autistic person,” or “wheelchair
          user.”
        </p>
        <p>
          &#10060; Don’t say: “person with a disability,” “person with autism,”
          or “user bound to a wheelchair.”
        </p>
        <li>Avoid infantilizing language.</li>
        <p>
          &#10060; Don’t say “person with special needs” or “differently abled”.
          Just say “disabled person.”
        </p>
        <li>
          When you can, ask the disabled person directly or consult the
          community!
        </li>
      </ol>
      <p>
        If you’re looking for a more comprehensive list, check out{" "}
        <a href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">
          this list of ableist language that a disabled person compiled and
          organized.
        </a>
      </p>
      {platform === "youtube" ? (
        <Continue
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
          pages={2}
        />
      ) : (
        <Continue
          index={index}
          setIndex={setIndex}
          setAnswer={setAnswer}
          pages={1}
        />
      )}
    </>
  );
};

const No = ({ index, setIndex, setAnswer, platform }) => (
  <>
    <QuizHeaders>Sounds good!</QuizHeaders>
    <p>
      In the future, if you do have a video that contains language relating to
      disability or disabled people, you can check out the resource below.
    </p>
    <StyledText>
      It’s a{" "}
      <a href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">
        compiled list of ableist language that one should keep in mind
      </a>{" "}
      that was put together by a disabled person, Lydia X. Z. Brown.
    </StyledText>
    {platform === "youtube" ? (
      <Continue
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
        pages={2}
      />
    ) : (
      <Continue
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
        pages={1}
      />
    )}
  </>
);

const Unsure = ({ index, setIndex, setAnswer, platform }) => (
  <>
    <QuizHeaders>That’s okay! Let’s learn more!</QuizHeaders>
    <p>
      Learning about the respectful way to address the disability community can
      be difficult at first, especially since so many online resources are
      outdated. Ableism (discrimination against disabled people) is very much
      ingrained in our everyday language and it can be difficult to notice or
      root them out. As long as you do your best and learn from feedback from
      actually disabled people, you’ll be good!
    </p>
    <h2>General Tips on Language:</h2>
    <ol className="large-numbers">
      <li>Use Identity First Language</li>
      <p>
        Most people in the disabled community prefer to use identity-first
        language (instead of person-first language). They find it to be more
        affirming.
      </p>
      <p>
        &#9989; Do say: “disabled person,” “autistic person,” or “wheelchair
        user.”{" "}
      </p>
      <p>
        &#10060; Don’t say: “person with a disability,” “person with autism,” or
        “person bound to a wheelchair.”
      </p>
      <StyledNB>
        Note: the term “person with a disability” or “individual with a
        disability” is not as bad as the other examples. It’s still used within
        the disability community, but in general, it’s not preferred.
      </StyledNB>
      <TwoColumns>
        <StyledContainer>
          <p>
            Think of it this way: we wouldn't say "a person with a Chinese
            ethnic background," you would just say "a Chinese person." While the
            first option is not technically wrong, it sounds weird and sounds
            like the person can somehow be “without” their ethnicity. We know
            that’s impossible. Their ethnicity informs who they are and their
            culture. It’s the same for disabled people. Most disabled people
            can’t just stop being disabled. There is no “without.”{" "}
          </p>
          <p>
            If you want to learn more about identity-first language, I recommend
            reading{" "}
            <a href="https://www.autistichoya.com/2011/08/significance-of-semantics-person-first.html">
              the blog Autistic Hoya’s post on the topic.
            </a>
          </p>
        </StyledContainer>
        <img src={Quote1} alt="" />
      </TwoColumns>
      <li>Avoid infantilizing language</li>
      <TwoColumns>
        <img
          src={Quote2}
          alt="Quote from Disability Reframed saying 'The Needs of Disabled people are not special. They are not extra, nor are they exceptional. They are human.'"
        />
        <div>
          <p>
            Avoid any language along the lines of "special needs," "special
            abilities," or "differently abled." Just say "disabled." It’s not a
            bad word. Disabled people aren’t children. Disabled people’s needs
            aren’t “special,” they are human.
          </p>
          <StyledContainer>
            <p>
              If you want to learn more about this,{" "}
              <a href="https://eu.usatoday.com/story/life/health-wellness/2021/06/11/disabled-not-special-needs-experts-explain-why-never-use-term/7591024002/">
                this USA Today article does a good job of explaining why
                “special needs” is offensive.
              </a>
            </p>
          </StyledContainer>
        </div>
      </TwoColumns>
      <li>When you can, ask the community!</li>
      <p>
        If you're featuring disabled people in your video, ask how they'd like
        to be identified as. Of course, their views may not be representative of
        their respective community, but at least you can be sure that you are
        addressing the people in your video with the language that prefer. In
        general, when you can, consult with the disabled community.
      </p>
      <StyledContainer>
        <p>
          If you’re looking for a more comprehensive list, check out{" "}
          <a href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">
            this list of ableist language that a disabled person compiled and
            organized.
          </a>
        </p>
      </StyledContainer>
    </ol>
    {platform === "youtube" ? (
      <Continue
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
        pages={2}
      />
    ) : (
      <Continue
        index={index}
        setIndex={setIndex}
        setAnswer={setAnswer}
        pages={1}
      />
    )}
  </>
);

export default VidLang;
