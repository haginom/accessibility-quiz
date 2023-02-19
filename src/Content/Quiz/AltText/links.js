import TwitterGE from "../../../images/twitter/images/alt-text-1.png";
import TwitterGE2 from "../../../images/twitter/images/alt-text-2.png";
import TwitterGE3 from "../../../images/twitter/images/alt-text-3.png";
import TwitterGE4 from "../../../images/twitter/images/alt-text-4.png";
import FacebookGE from "../../../images/facebook/images/alt-text-1.png";
import FacebookGE2 from "../../../images/facebook/images/alt-text-2.png";
import InstagramGE from "../../../images/instagram/images/alt-text-1.png";
import InstagramGE2 from "../../../images/instagram/images/alt-text-2.png";
import {
  ImgContainer,
  TwoColumns,
  StyledContainer,
  StyledNB,
  TwoEqualColumns,
  SocialMediaExample,
} from "../styling";
import { Columns } from "../../../theme/extra";

export const TwitterAltText = () => (
  <>
    <ImgContainer>
      <img src={TwitterGE} alt="alt" />
    </ImgContainer>
    <p>
      When you click on the “ALT” button, you can see the image description.
      Below is the alt text for the second photo (the photo on the right).
    </p>
    <ImgContainer>
      <img src={TwitterGE2} alt="Pop up tagged as description" />
    </ImgContainer>
  </>
);

export const TwitterHowTo = () => (
  <>
    <TwoEqualColumns>
      <div>
        <StyledContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.twitter.com/en/using-twitter/write-image-descriptions"
          >
            Read Twitter’s tips on how to write alt text
          </a>
        </StyledContainer>
        <StyledNB>
          Here's an example of a Tweet with alt text from the Invincible HQ
          Twitter account:
        </StyledNB>
        <ImgContainer>
          <img
            src={TwitterGE4}
            alt="Invincible HQ Admin Official Power Scale Tweet"
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src={TwitterGE3}
            alt="The description text says Graphic showing Invicible, Atom Eve, Battle Beast, omni Man and Debbie from left to right, with a scale underneath showing Debbie as the strongest"
          />
        </ImgContainer>
      </div>
      <div>
        <StyledContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.accessible-social.com/images-and-visuals/alt-text-writing-tips"
          >
            Read Accessible Social’s guide on how to write alt text
          </a>
        </StyledContainer>
        <StyledNB>
          Here's an example of a Tweet from WeRateDogs with alt text, while
          still keeping it in the brand’s voice:
        </StyledNB>
        <ImgContainer>
          <img
            src={TwitterGE}
            alt="Invincible HQ Admin Official Power Scale Tweet"
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src={TwitterGE2}
            alt="The description text says Graphic showing Invicible, Atom Eve, Battle Beast, omni Man and Debbie from left to right, with a scale underneath showing Debbie as the strongest"
          />
        </ImgContainer>
      </div>
    </TwoEqualColumns>
  </>
);

export const FacebookAltText = () => (
  <Columns>
    <div>
      <SocialMediaExample
        img={FacebookGE}
        alt="an example of the the alt text in a img tag (within the code)"
      />
    </div>
    <div className="align-end">
      <SocialMediaExample
        img={FacebookGE2}
        link="https://www.facebook.com/WeRateDogs/photos/a.1977294168998463/5507208606006984/"
        alt="Facebook post from We Rate Dogs and large image of a black and tan dachshund puppy"
      />
      <p className="mt-normal">
        The alt text of the photo is: “a little black and tan dachshund puppy
        stands poolside. he’s wearing a tiny teal hawaiian shirt with a white
        and pink floral print. the sun looks warm on his face, and the water is
        a picturesque shade of blue. someone please get him a coconut-shaped
        water bowl.”
      </p>
    </div>
  </Columns>
);

export const FacebookHowTo = () => (
  <>
    <StyledContainer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.accessible-social.com/images-and-visuals/alt-text-writing-tips"
      >
        Read Accessible Social's guide on how to write alt text
      </a>
    </StyledContainer>
    <Columns>
      <div>
        <SocialMediaExample
          img={FacebookGE}
          link="https://www.facebook.com/WeRateDogs/photos/a.1977294168998463/5507208606006984/"
          alt="Facebook post from We Rate Dogs and large image of a black and tan dachshund puppy"
        />
      </div>
      <div>
        <p className="mt-extra">
          Here's an example of a post from WeRateDogs with alt text, while still
          keeping it in the brand’s voice. The ChromeVox screenreader extension
          will read exactly this.{" "}
        </p>
        <SocialMediaExample
          img={FacebookGE2}
          link="https://www.facebook.com/WeRateDogs/photos/a.1977294168998463/5507208606006984/"
          alt="an example of the the alt text in a img tag (within the code)"
        />
        <p className="mt-normal">
          The alt text of the photo is: “a little black and tan dachshund puppy
          stands poolside. he’s wearing a tiny teal hawaiian shirt with a white
          and pink floral print. the sun looks warm on his face, and the water
          is a picturesque shade of blue. someone please get him a
          coconut-shaped water bowl.”
        </p>
      </div>
    </Columns>
  </>
);

export const InstagramAltText = () => (
  <TwoColumns>
    <div>
      <img src={InstagramGE} alt="alt" />
    </div>
    <div>
      <img src={InstagramGE2} alt="alt" />
      <p>
        The alt text of the photo is: “a little black and tan dachshund puppy
        stands poolside. he’s wearing a tiny teal hawaiian shirt with a white
        and pink floral print. the sun looks warm on his face, and the water is
        a picturesque shade of blue. someone please get him a coconut-shaped
        water bowl.”
      </p>
    </div>
  </TwoColumns>
);
