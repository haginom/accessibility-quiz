import React from "react";

const Announce = ({setIndex, index, platform, content, setSection}) => {
  const handleClick = (e) => { 
    e.preventDefault();
    setSection("quiz")
    setIndex(index-3)
  }
  return (  
    <>
      <h1>index= {index}</h1>
      <h1>platform= {platform}</h1>
      <h1>content= {content}</h1>
      <button onClick={handleClick}>Change section </button>
    </> 
  )
}

export default Announce