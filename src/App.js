import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { base, light, dark } from "./theme";
import GlobalStyles from "./theme/globalstyles";
import Welcome from "./Content/Intro/Welcome";
import { StatsOne, StatsTwo } from "./Content/Intro/Statistics";
import Platform from "./Content/Intro/Platform";
import Content from "./Content/Intro/Content";
import Goodbye from "./Content/Intro/Goodbye";
import VidCapt from "./Content/Quiz/VidCaptions/vidcapt";
import VidText from "./Content/Quiz/VidText/vidtext";
import VidLang from "./Content/Quiz/Lang/vidlang";
import Hashtag from "./Content/Quiz/HashTag/hashtag";
import ContentTwo from "./Content/Quiz/content";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Content/Layout";
import "./index.css";
import AltTxt from "./Content/Quiz/AltText/alttxt";
import Descriptive from "./Content/Quiz/Descriptive/descriptive";
import ScreenReader from "./Content/Quiz/ScreenReader/screenReader";

const themesMap = {
  light,
  dark,
};

export const ThemePreferenceContext = React.createContext();

function App() {
  const [index, setIndex] = useState(0);
  const [platform, setPlatform] = useState("");
  const [content, setContent] = useState("");
  const [section, setSection] = useState("intro");
  const [post, setPost] = useState("");
  const [currentTheme, setCurrentTheme] = useState("light");

  const theme = { ...base, colors: themesMap[currentTheme] };

  const handleReset = ({ platform, content, section }) => {
    setPlatform(platform);
    setContent(content);
    setSection(section);
  };

  const introComponents = [
    <Welcome
      index={index}
      setIndex={setIndex}
      setPlatform={setPlatform}
      setPost={setPost}
      setContent={setContent}
    />,
    <StatsOne index={index} setIndex={setIndex} />,
    <StatsTwo index={index} setIndex={setIndex} />,
    <Platform
      platform={platform}
      setPlatform={setPlatform}
      index={index}
      setIndex={setIndex}
      setPost={setPost}
    />,
    <Content
      platform={platform}
      content={content}
      setContent={setContent}
      index={index}
      setIndex={setIndex}
      setSection={setSection}
      post={post}
      setPost={setPost}
    />,
  ];

  const videoComponents = [
    <VidCapt
      content={content}
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <VidText
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <VidLang
      platform={platform}
      index={index}
      setIndex={setIndex}
      content={content}
      post={post}
    />,
    <Hashtag
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
      handleReset={handleReset}
    />,
    <ContentTwo
      platform={platform}
      content={content}
      setContent={setContent}
      setPlatform={setPlatform}
      setSection={setSection}
      index={index}
      setIndex={setIndex}
      setPost={setPost}
    />,
    <Goodbye />,
  ];

  const imageComponents = [
    <AltTxt
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <Descriptive index={index} setIndex={setIndex} />,
    <VidLang
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
      content={content}
    />,
    <ScreenReader
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <Hashtag
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <ContentTwo
      platform={platform}
      content={content}
      setContent={setContent}
      setPlatform={setPlatform}
      setSection={setSection}
      index={index}
      setIndex={setIndex}
      setPost={setPost}
    />,
    <Goodbye />,
  ];

  const textComponents = [
    <VidLang
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
      content={content}
    />,
    <ScreenReader
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <Hashtag
      post={post}
      platform={platform}
      index={index}
      setIndex={setIndex}
    />,
    <ContentTwo
      platform={platform}
      content={content}
      setContent={setContent}
      setPlatform={setPlatform}
      setSection={setSection}
      index={index}
      setIndex={setIndex}
      setPost={setPost}
    />,
    <Goodbye />,
  ];

  return (
    <HelmetProvider>
      <ThemePreferenceContext.Provider
        value={{ currentTheme, setCurrentTheme }}
      >
        <ThemeProvider theme={theme}>
          <Layout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}>
            <GlobalStyles />
            {section === "intro"
              ? introComponents[index]
              : section === "quiz" && content === "video"
              ? videoComponents[index]
              : section === "quiz" && content === "photo"
              ? imageComponents[index]
              : section === "quiz" && content === "text"
              ? textComponents[index]
              : null}
          </Layout>
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </HelmetProvider>
  );
}

export default App;
