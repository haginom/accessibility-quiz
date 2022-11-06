import ClosedCaptions from "../../../images/twitter/vidCapts.png";
import OpenCaptions from "../../../images/twitter/vidCapts-2.png";
import styled from "styled-components";

const StyledImage = styled.img`
 max-width: 350px;
`

export const TwitterClosedCaptions = () => (
  <StyledImage src={ClosedCaptions} alt="example of closed captions" />
);

export const TwitterOpenCaptions = () => (
  <StyledImage src={OpenCaptions} alt="example of closed captions" />
);

export const FacebookOpenCaptions = () => (
  <iframe
    title="FBOpenCaptions"
    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDisney%2Fvideos%2F585700193067008%2F&show_text=true&width=560&t=6"
    width="560"
    height="429"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
  ></iframe>
);
export const FacebookClosedCaptions = () => (
  <iframe
    title="FBClosedCaptions"
    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDisney%2Fvideos%2F794324005264010%2F&show_text=true&width=560&t=32"
    width="560"
    height="429"
    scrolling="no"
    frameBorder="0"
    allowFullscreen="true"
  ></iframe>
);

export const TwitterInstructions = () => (
  <>
    <p>
      Adding closed captions on Twitter is simple. When you upload a video,
      there will be an option to upload the caption file (.srt) below the video.
      Click on it and upload the correct file, and you’re done! If you are still
      unsure, you can visit the Twitter Help page on adding captions to Tweetss.
    </p>
    <p>
      Adding open captions is done while editing the actual video itself. The
      captions are directly embedded on the video. You cannot add open captions
      through Twitter.
    </p>
  </>
);

export const FacebookInstructions = () => (
  <>
    <p>
      Adding closed captions on Facebook differs based on if you’re adding
      captions to a Video Ad or a video from your Facebook Page.
    </p>
    <a href="https://www.facebook.com/business/help/1675722002698686?id=603833089963720">
      How to add closed captions to a Facebook Video Ad
    </a>
    <a href="https://www.facebook.com/help/509746615868430">
      How to add closed captions to a video from your Facebook Page
    </a>
  </>
);
