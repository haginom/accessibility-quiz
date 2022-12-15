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
  padding: ${theme.space[3]} ${theme.space[4]};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[1]} ;
  cursor: pointer;
  min-width: 8rem;
  margin-top: 1rem;

  @media (max-width: 768px){
    font-size:  ${theme.fontSizes[1]};
    padding: ${theme.space[3]} ${theme.space[3]};
  }
`
);

export default Button;
