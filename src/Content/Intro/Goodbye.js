import React from "react";
import { Helmet } from "react-helmet";
import ByeImage from "../../images/intro/goodbye.png";

const Goodbye = () => {
  return (
    <>
      <Helmet>
        <title>Goodbye Page</title>
      </Helmet>
      <h1>Thank you for checking the accessibility of your content</h1>
      <img src={ByeImage} alt="Cartoon character with thumbs up" />
    </>
  );
};

export default Goodbye;
