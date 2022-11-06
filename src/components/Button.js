import styled from "styled-components";

const Button = styled.button(
  ({ theme, secondary, error, fontSize }) => `
  appearance: none;
  background-color: ${
    error
      ? theme.colors.error
      : secondary
      ? theme.colors.nav
      : theme.colors.primary
  };
  color: ${!secondary ? "#fff" : theme.colors.text};
  border: 0;
  border-radius: ${theme.radii[2]};
  padding: ${theme.space[4]} ${theme.space[5]};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[fontSize]} ;
  cursor: pointer;

  @media (max-width: 768px){
    font-size:  ${theme.fontSizes[1]};
  }
`
);

export default Button;
