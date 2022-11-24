import React from "react";
import { Helmet } from "react-helmet";
import Phone from "../../images/intro/phone.png";
import Grow from "../../images/intro/grow.png";
import Button from "../../components/Button";
import styled from "styled-components";

export const StatsOne = ({ index, setIndex }) => {
  return (
    <>
      <Helmet>
        <title>Why Accessibility Matters</title>
      </Helmet>
      <Wrapper>
        <Header>
          <h1>Why Accessibility Matters</h1>
        </Header>
        <Content>
          <Text space="6">
            According to the World Health Organsation, around 15% of the world
            population has a disability. That means there's a huge portion of
            the world that may need some accommodations to access online
            content. That also means you could be excluding potential clients,
            consumers, and followers because your social media isn't
            accessibile.
          </Text>
          <Facts>
            <Text>
              <Span>15%</Span> of the world population has a disability
            </Text>
            <Text>
              <Span>$8T</Span> total global purchasing power of disabled people
            </Text>
            <Text>
              <Span>$34B</Span> lost by businesses every year by ignoring
              accessibility needs
            </Text>
          </Facts>
        </Content>
        <ImageContainer>
          <Img src={Phone} alt="" />
        </ImageContainer>
        <NavPanel>
          <Button
            fontSize="1"
            className="pulse-grow-on-hover"
            onClick={() => setIndex(index + 1)}
          >
            Continue
          </Button>
          <Button
            fontSize="1"
            className="pulse-grow-on-hover"
            onClick={() => setIndex(index - 1)}
          >
            Go Back <span>&#8592;</span>
          </Button>
        </NavPanel>
      </Wrapper>
    </>
  );
};

export const StatsTwo = ({ index, setIndex }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <h1>Why Accessibility Matters</h1>
        </Header>
        <Content>
          <Text>
            In addition to being a smart business decision, accessibility and
            inclusion can help boost your reputation. Millenials and Gen Z care
            deeply about the values of the brands and companies they’re
            purchasing from - about 68% of millennials and Gen Zers said they
            shop based on values.
          </Text>
          <Text>
            And most imortantly, accessibility benefits us all. Everyone at some
            point or another will be disabled, either through age, illness, or
            injury. But even if you’re currently a non-disabled person, you
            still benefit from accessibility. For example, curb cuts were first
            designed for wheelchair users, but people who use baby strollers,
            shopping carts, or luggages all find them useful. Closed captions
            were meant for those with hearing disabilities, but people who don’t
            know the language, people with learning disabilities, and more.
            Thus, we should aim to make our social media as accessible as
            possible - it benefits everyone.
          </Text>
        </Content>
        <ImageContainer>
          <Img src={Grow} alt="" />
        </ImageContainer>
        <NavPanel>
          <Button
            fontSize="1"
            className="pulse-grow-on-hover"
            onClick={() => setIndex(index + 1)}
          >
            Continue
          </Button>
          <Button
            fontSize="1"
            className="pulse-grow-on-hover"
            onClick={() => setIndex(index - 1)}
          >
            Go Back <span>&#8592;</span>
          </Button>
        </NavPanel>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div(
  ({ theme, colOne, colTwo }) => `
      display: grid;
      align-items: center;
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: minmax(125px, auto);
      grid-gap: 0.5rem;
      grid-template-areas:
      "hd hd hd hd hd hd hd hd hd hd hd hd"
      "main main main main main main main main img img img img"
      ". . nav nav nav nav . . . . . .";

      @media (max-width: 768px){
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(25px, auto);
        grid-template-areas:
          "hd hd hd"
          "main main main"
          "img img img"
          "nav nav nav"
      }
      `
);
const Header = styled.div`
  grid-area: hd;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  grid-area: main;
  margin-left: 2rem;
  margin-bottom: 0.25rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const NavPanel = styled.div`
  grid-area: nav;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
const ImageContainer = styled.div`
  grid-area: img;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 4rem;
    margin-right: 2rem;
    margin-top: 0rem;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Facts = styled.div`
  display: flex;
  margin-top: 2rem;
  > * {
    flex: 0 1 27%;
    margin: 1rem 1rem 1rem 0rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Span = styled.span(
  ({ theme }) => `
    display: block;
    font-size: ${theme.fontSizes[5]};
    font-weight: ${theme.fontWeights.xtra};

    @media (max-width: 768px){
      font-size: ${theme.fontSizes[1]};
    }
  `
);

const Text = styled.p(
  ({ theme, space }) => `
  max-width: 680px;
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights.body};
  margin-bottom: 1rem;
  @media (max-width: 768px){
    font-size: ${theme.fontSizes[0]};
  }
  `
);
