
export const No = ({index, setIndex, setAnswer, platform, post }) => {
  return (
    <>
    <h1>No worries!</h1>
    <p>
      Below is a good example of what descriptive text of a video on {platform}  can look like! The screenreader or the text-to-speech program will read the thread, so keep that in mind when writing!
    </p>
    <p>
      Here is the original {post} with the trailer (bonus: it has open captions!): 
    </p>
    <p>
      The accompanying thread is the descriptive text that describes the key details and parts of the trailer. You only need to describe the most important details. Since this will be read aloud, being too lengthy or wordy is not helpful. 
    </p>
    <p>
      A good way to test if the description is good or not is to get someone to read it aloud, close your eyes, and see if the text still is able to convey the most crucial scenes of the video well. 
    </p>
    <p>
      In addition, avoid any emojis or emoticons in your descriptive text. It doesn’t translate well through screen readers or text-to-speech programs.
    </p>
    <p>
      If you want to learn more about written descriptive text or other similar accommodations (like audio descriptions), this article gives a good overview of the various video descriptions available. 
    </p>
    <>
  <button onClick={() => setIndex(index + 1)}>
    Continue
  </button>
  <button onClick={() => setAnswer("")}>
    Go Back <span>&#8592;</span>
  </button>
</>
  </>)
}

export default No;