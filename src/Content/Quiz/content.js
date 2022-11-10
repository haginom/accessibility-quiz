import React from "react";
import { Text, Layout, ContainerFive } from "../../theme/extra";
import ContentButton from "../../components/Content";
import Button from "../../components/Button";
import IconPhoto from "../../images/intro/icon-photo.png";
import IconVideo from "../../images/intro/icon-video.png";
import IconText from "../../images/intro/icon-text.png";

const ContentTwo = ({
  index,
  setIndex,
  platform,
  setContent,
  setPlatform,
  setSection,
  setPost,
}) => {
  return (
    <>
      <h1>What other type of content are you creating?</h1>
      <Text>
        If it’s mixed media or you will be posting more than one type, please
        just choose one for now.
      </Text>
      <Text>Content Two</Text>
      <ContainerFive platform={platform}>
        <ContentButton
          setIndex={setIndex}
          setSection={setSection}
          setPost={setPost}
          setContent={setContent}
          image={IconVideo}
          value="video"
        >
          Video
        </ContentButton>
        {platform !== "TikTok" && platform !== "YouTube" ? (
          <ContentButton
            setIndex={setIndex}
            setSection={setSection}
            setPost={setPost}
            setContent={setContent}
            image={IconPhoto}
            value="photo"
          >
            Photo{" "}
          </ContentButton>
        ) : (
          ""
        )}
        {platform !== "TikTok" &&
        platform !== "YouTube" &&
        platform !== "Instagram" ? (
          <ContentButton
            setIndex={setIndex}
            setSection={setSection}
            setPost={setPost}
            setContent={setContent}
            image={IconText}
            value="text"
          >
            Text
          </ContentButton>
        ) : (
          ""
        )}
        <ContentButton
          setIndex={setIndex}
          setSection={setSection}
          setPost={setPost}
          setPlatform={setPlatform}
          setContent={setContent}
          value="changePlatform"
        >
          Different Platform
        </ContentButton>
        <ContentButton
          index={index}
          setIndex={setIndex}
          setSection={setSection}
          setPlatform={setPlatform}
          setPost={setPost}
          setContent={setContent}
          value="goodbye"
        >
          None
        </ContentButton>
      </ContainerFive>
      <Layout>
        <Button onClick={() => setIndex(index - 1)}>
          Go Back <span>&#8592;</span>
        </Button>
      </Layout>
    </>
  );
};

export default ContentTwo;
