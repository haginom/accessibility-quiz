export const Yes = ({index, setIndex, setAnswer, platform, post}) => {
  return(
  <>
      <h1>Love to see it!</h1>
      <p>
        Below is a good example of what descriptive text of a video on {platform} can look like! If your descriptive text looks similar to the example below, you’re set!
      </p>
      <p>
        Here is the original {post} with the trailer (bonus: it has open captions!):
      </p>
      <p>
        And this is the accompanying thread of {post}s that describes what’s happening in the trailer:
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
    </>
    )
}

export default Yes;