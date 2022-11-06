import React from "react";
import { Helmet } from "react-helmet";
import Grow from "../../images/intro/grow.png";
import Phone from "../../images/intro/phone.png";
import Button from "../../components/Button";
import styled from "styled-components";
import { Layout } from "../../theme/extra";

export const StatsOne = ({ index, setIndex }) => {
  return (
    <>
      <Helmet>
        <title>Why Accessibility Matters</title>
      </Helmet>
      <h1>Why Accessibility Matters</h1>
      <PageLayout colOne="65%" colTwo="40%">
        <div>
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
        </div>
        <img src={Phone} alt="" />
      </PageLayout>
      <Layout>
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
      </Layout>
    </>
  );
};

export const StatsTwo = ({ index, setIndex }) => {
  return (
    <>
      <h1>Why Accessibility Matters</h1>
      <PageLayout colOne="55%" colTwo="40%">
        <div>
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
        </div>
        <img src={Grow} alt="" />
      </PageLayout>
      <Layout>
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
      </Layout>
    </>
  );
};

const PageLayout = styled.div(
  ({ theme, colOne, colTwo }) => `
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    div:first-child{
      flex: 0 0 ${colOne};
      max-width: ${colOne};
    }

    img:last-child{
      flex: 0 0 ${colTwo};
      max-width: ${colTwo};
      min-width: 300px;
      object-fit: contain;
      padding: 1rem;
    }
  `
);

const Facts = styled.div(
  ({ theme }) => `
  display: flex;
  margin: 2rem 2.5rem;

  > * {
    flex: 0 0 26.5%;
    max-width: 26.5%;
    margin: 0 1rem;
  }

`
);

const Span = styled.span(
  ({ theme }) => `
    display: block;
    font-size: ${theme.fontSizes[5]};
    font-weight: ${theme.fontWeights.heading} 
  `
);

const Text = styled.p(
  ({ theme, space }) => `
  max-width: 680px;
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights.body};
  margin-bottom: 1rem;
  
  `
);
