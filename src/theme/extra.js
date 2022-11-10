import styled from "styled-components";

export const Heading = styled.h1(
  ({ theme }) => `
    font-size:  ${theme.fontSizes[6]};
  `
);

export const ButtonContainer = styled.div(
  ({ theme }) => `
    margin-top: ${theme.space[5]};
    margin-left: 0.5rem;

    @media (max-width: 768px){
      text-align: center;
    }
  `
);

export const Columns = styled.div(
  ({ theme }) => `
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    > * {
      flex: 0 1 0;
      margin-left: 3rem;
      margin-right: 3rem;

      > * 
      {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  `
);

export const ContainerThree = styled.div(
  ({ theme, platform }) => `
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-auto-rows: 1fr;
    margin-top: 2rem;
    max-width: 900px;
  `
);

export const ContainerFive = styled.div(
  ({ theme, platform }) => `
    grid-template-columns: repeat(5, 1fr);
    display: grid;
    grid-auto-rows: 1fr;
    margin-top: 2rem;
  `
);

export const Text = styled.p(
  ({ theme }) => `
  font-size:  ${theme.fontSizes[1]};
  margin-top: ${theme.space[3]};
  text-align: center;
`
);

export const Layout = styled.div(
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
