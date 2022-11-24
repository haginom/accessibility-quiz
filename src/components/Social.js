import styled from "styled-components";

const SocialButton = ({
  setPlatform,
  index,
  setIndex,
  value,
  image,
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPlatform("");
    setPlatform(e.target.value);
    setIndex(index + 1);
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
  color: var(--${value});
  border: 0;
  border-radius: ${theme.radii[2]};
  padding: ${theme.space[5]} ${theme.space[5]};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.mid};
  cursor: pointer;
  margin:  ${theme.space[6]} ${theme.space[4]};
  min-width: 12rem;

  @media (max-width: 768px){
    margin:  ${theme.space[3]} ${theme.space[1]};
  }
`
);

export default SocialButton;
