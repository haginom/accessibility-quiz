import styled from "styled-components";

export const QuizHeaders = styled.h1(
  ({ theme }) => `
    font-size:  ${theme.fontSizes[5]};
    margin-bottom: 3rem;

    @media (max-width: 768px){
      font-size: ${theme.fontSizes[3]};
    }
  `
);
export const LeftText = styled.p`
  margin-left: 2.6rem;
`;

export const TwoColumns = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  > * {
    flex: 0 0 50%;
    margin: 0 2rem 0 2rem;
    max-width: 400px;
  }
`;

export const ImgContainer = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  > img {
    max-width: 520px;
    width: 100%;
  }
`;

export const Section = styled.section`
  display: block;
  position: relative;
  margin-left: 10.9rem;
  margin-right: 3rem;
`;

export const StyledTitle = styled.div(
  ({ theme }) => `
  font-family: ${theme.fonts.decorative};
  text-transform: uppercase;
  transform: rotate(180deg) translate(-4px);
  transform-origin: 0 180;
  writing-mode: vertical-lr;
  text-align: center;
  font-size: 9.5rem;
  font-style: normal;
  color: ${theme.colors.background};
  position: absolute;
  top: 0;
  left: -18.4rem;
  z-index: 1;
  -webkit-text-stroke: 0.1rem #4851f4;
  background: #4851f4;
  overflow: auto;
  min-height: 100% !important;
  text-align: right;
  padding-bottom: 1rem;
`
);

export const StyledLink = styled.a(
  ({ theme }) => `
  background: ${theme.colors.border};
  text-align: center;
  flex: 0 0 30%;
  border-bottom: none;
  box-shadow: none;
  padding: 1rem;
  border-radius: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  p{
    border-bottom: .05em solid ${theme.colors.primary};
    box-shadow: inset 0 -0.05em 0 ${theme.colors.primary};
    color: inherit;
    transition: background-color .25s cubic-bezier(.33, .66, .66, 1);
    display:inline;
  }
`
);
export const LinkContainer = styled.div(
  ({ theme }) => `
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  
`
);

export const ButtonPanel = styled.div(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
    padding-top: 3rem;
    > * {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `
);

export const StyledContainer = styled.div(
  ({ theme }) => `
  background: ${theme.colors.border};
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem auto ;
  max-width: 1000px;
  text-align: center;


  > p, a{
    font-size: ${theme.fontSizes[1]};
    margin-top: 1rem;
  }
)
`
);

export const StyledNB = styled.p`
  font-style: italic;
`;

export const StyledText = styled.p`
  margin-bottom: 3rem;
`;
