import React from "react";

const ContentTwo = ({index, setIndex, platform, setContent, setPlatform, setSection}) => {
  const handleClick = (e) => { 
    e.preventDefault();
    setContent(e.target.value)
    setIndex(0)
  }
  const handlePlatformChange = (e) => {
    e.preventDefault();
    setPlatform("")
    setSection("intro")
    setIndex(3)
  }
return (
  <>
    <h1>What other type of content are you creating?</h1>
    <p>If it’s mixed media or you will be posting more than one type, please just choose one for now.</p>
    <button value="video" onClick={handleClick}>
      Video
    </button>
    { platform !== "TikTok" && platform !== "YouTube" ? 
    <button value="photo" onClick={handleClick}>
    Photo </button> : ""
    }
    { platform !== "TikTok" && platform !== "YouTube" && platform !== "Instagram" ? 
      <button value="text" onClick={handleClick}>
        Text
      </button>: ""
    }
    <button value="text" onClick={handlePlatformChange}>
      Different Platform
    </button>
    <button value="text" onClick={() => setIndex(index+1)}>
      None
    </button>

    <button onClick={() => setIndex(index - 1)}>
        Go Back <span>&#8592;</span>
    </button>
  </>
)
}

export default ContentTwo