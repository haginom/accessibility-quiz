import React from "react";
import { Helmet } from "react-helmet";
import Sapiens from "../../images/intro/sapiens.png";
import styled from "styled-components";
import Button from "../../components/Button";
import { ButtonContainer } from "../../theme/extra";

const Welcome = ({ index, setIndex }) => {
  return (
    <>
      <Helmet>
        <title>Welcome Page</title>
      </Helmet>
      <Layout>
        <img alt="" src={Sapiens} />
        <div>
          <Heading>Hi!</Heading>
          <SubHeading>
            Welcome to the Social Media Accessibility Checklist!
          </SubHeading>
          <ButtonContainer>
            <Button
              fontSize="2"
              className="pulse-grow-on-hover"
              onClick={() => setIndex(index + 1)}
            >
              Get started <span>&#8594;</span>
            </Button>
          </ButtonContainer>
        </div>
      </Layout>
    </>
  );
};

const Heading = styled.h1(
  ({ theme }) => `
    font-size: ${theme.fontSizes[9]};
    font-weight: ${theme.fontWeights.heading};
    text-align: left;

    @media (max-width: 768px){
      font-size:  ${theme.fontSizes[6]};
      text-align: center;
    }

  `
);

const SubHeading = styled.p(
  ({ theme }) => `
    font-size: ${theme.fontSizes[5]};
    font-weight: ${theme.fontWeights.heading};
    line-height: 1;

    @media (max-width: 768px){
      font-size:  ${theme.fontSizes[2]};
      text-align: center;
    }
  `
);

const Layout = styled.div(
  ({ theme }) => `
  margin: 0;
  position: absolute;
  top: 45%;
  -ms-transform: translateY(-45%);
  transform: translateY(-45%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img:first-child {
    flex: 0 0 45%;
    max-width: 45%;
    min-width: 300px;
    height: auto;
    
  }
  div:last-child {
    flex: 0 0 45%;
    max-width: 45%;
  }

  @media (max-width: 768px){
    top: 25%;
    -ms-transform: translateY(-25%);
    transform: translateY(-25%);
    
    img:first-child {
      flex: 0 0 85%;
      max-width: 85%;
      min-width: 300px;
      height: auto;
      
    }
    div:last-child {
      flex: 0 0 85%;
      max-width: 100%;
      justify-content: center;
    }
  }
`
);

export default Welcome;
