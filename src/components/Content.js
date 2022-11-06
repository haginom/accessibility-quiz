import styled from "styled-components";

const ContentButton = ({ 
  setIndex,
  value,
  setContent, 
  setSection,
  setPost,
  children,
  image }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case "Twitter":
        return "Tweet";
      case "Facebook":
        return "Facebook post";
      default:
        return param;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setContent(e.target.value);
    setPost(renderSwitch(e.target.value));
    setSection("quiz");
    setIndex(0);
  };
  return (
    <StyledButton
      className="pulse-grow-on-hover"
      value={value}
      onClick={handleClick}
    >
      {children}
      <StyledImg src={image} alt="" />
    </StyledButton>
  );
};

const StyledImg = styled.img`
  max-height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button(
  ({ theme, value }) => `
  appearance: none;
  background-color: #f8f8f8;
  color: var(--contentText);
  border: 0;
  border-radius: ${theme.radii[2]};
  padding: ${theme.space[5]} ${theme.space[5]};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.mid};
  cursor: pointer;
  margin:  ${theme.space[6]} ${theme.space[4]};
  min-width: 12rem;
`
);

export default ContentButton;
