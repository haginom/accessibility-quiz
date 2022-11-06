import React from "react";
import SocialButton from "../../components/Social";
import Button from "../../components/Button";
import Facebook from "../../images/intro/facebook.png";
import Twitter from "../../images/intro/twitter.png";
import Insta from "../../images/intro/insta.png";
import TikTok from "../../images/intro/tiktok.png";
import YouTube from "../../images/intro/youtube.png";
import { Layout, Text, Heading, Container } from "../../theme/extra";

const Platform = ({ index, setIndex, setPlatform }) => {
  return (
    <>
      <Heading>What Platform are you creating content for?</Heading>
      <Text>
        If the social media platform is not listed on here, please choose the
        option that is the most similar.
      </Text>
      <Container>
        <SocialButton
          image={Twitter}
          value="twitter"
          setPlatform={setPlatform}
          setIndex={setIndex}
          index={index}
        >
          Twitter
        </SocialButton>
        <SocialButton
          image={Facebook}
          value="facebook"
          setPlatform={setPlatform}
          setIndex={setIndex}
          index={index}
        >
          Facebook
        </SocialButton>
        <SocialButton
          image={Insta}
          value="instagram"
          setPlatform={setPlatform}
          setIndex={setIndex}
          index={index}
        >
          Instagram
        </SocialButton>
        <SocialButton
          image={YouTube}
          value="youtube"
          setPlatform={setPlatform}
          setIndex={setIndex}
          index={index}
        >
          YouTube
        </SocialButton>
        <SocialButton
          image={TikTok}
          value="tiktok"
          setPlatform={setPlatform}
          setIndex={setIndex}
          index={index}
        >
          TikTok
        </SocialButton>
      </Container>
      <Layout>
        <Button fontSize="1" onClick={() => setIndex(index - 1)}>
          Go Back <span>&#8592;</span>
        </Button>
      </Layout>
    </>
  );
};

export default Platform;
