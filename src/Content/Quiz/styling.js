import styled from "styled-components";

export const Section = styled.section`
  margin-top: 2rem;
  margin-left: 6rem;
  margin-right: 2rem;
  > * {
    margin-top: 2rem;
  }
`;

export const StyledTitle = styled.div(
  ({ theme, value }) => `
  text-transform: uppercase;
  transform: rotate(180deg) translate(-4px);
  writing-mode: vertical-lr;
  text-align: center;
  font-size: 8.5rem;
  font-style: normal;
  color: ${theme.colors.background};
  position: absolute;
  top: 0;
  left: -3rem;
  z-index: 1;
  -webkit-text-stroke: 0.1rem ${theme.colors.text};
`
);

export const ButtonPanel = styled.div(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    > * {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `
);
