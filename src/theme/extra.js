import styled from "styled-components";

export const Heading = styled.h1(
  ({ theme }) => `
    margin-top: 2rem;
    font-size:  ${theme.fontSizes[6]};

    @media (max-width: 768px){
      font-size: ${theme.fontSizes[3]};
    }
  `
);

export const ButtonContainer = styled.div(
  ({ theme }) => `
    margin-top: ${theme.space[3]};
    margin-left: 0.5rem;

    @media (max-width: 768px){
      text-align: center;
    }
  `
);

export const Columns = styled.div(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    max-width: 1100px;
    margin-top: 2rem;
    justify-items: center;

    a:nth-of-type(1){
      order: 2;
    }
    a:nth-of-type(2){
      order: 3;
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
    margin-left: auto;
    margin-right: auto;
}

    @media (max-width: 768px){
      grid-template-columns: repeat(auto-fill, 220px);
      grid-gap: 0rem;
      margin-top: 2rem;
      justify-content: center;
    }
  `
);

export const ContainerFive = styled.div(
  ({ theme, platform }) => `
    grid-template-columns: repeat(5, 1fr);
    display: grid;
    grid-auto-rows: 1fr;


    @media (max-width: 768px){
      grid-template-columns: repeat(auto-fill, 220px);
      grid-gap: 0rem;
      margin-top: 2rem;
      justify-content: center;
    }
  `
);

export const Text = styled.p(
  ({ theme }) => `
  font-size:  ${theme.fontSizes[1]};
  margin-top: ${theme.space[4]};
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
