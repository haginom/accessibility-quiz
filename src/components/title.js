import styled from "styled-components";

const StyledTitle = styled.div(
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

export default StyledTitle;
