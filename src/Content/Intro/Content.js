import React from "react";
import { Text, Layout, ContainerThree } from "../../theme/extra";
import ContentButton from "../../components/Content";
import Button from "../../components/Button";
import IconPhoto from "../../images/intro/icon-photo.png";
import IconVideo from "../../images/intro/icon-video.png";
import IconText from "../../images/intro/icon-text.png";

const Content = ({
  post,
  index,
  setIndex,
  platform,
  content,  
  setContent,
  setSection,
  setPost,
}) => {
  return (
    <>
      <h1>What type of content are you creating?</h1>
      <Text>
        If it’s mixed media or you will be posting more than one type, please
        just choose one for now.
      </Text>
      <ContainerThree platform={platform}>
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
        {platform !== "tiktok" && platform !== "youtube" ? (
          <ContentButton
            setIndex={setIndex}
            setSection={setSection}
            setPost={setPost}
            content={content}
            setContent={setContent}
            image={IconPhoto}
            value="photo"
          >
            Photo{" "}
          </ContentButton>
        ) : (
          ""
        )}
        {platform !== "tiktok" &&
        platform !== "youtube" &&
        platform !== "instagram" ? (
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
      </ContainerThree>
      <Layout>
        <Button fontSize="1" onClick={() => setIndex(index - 1)}>
          Go Back <span>&#8592;</span>
        </Button>
      </Layout>
    </>
  );
};

export default Content;
