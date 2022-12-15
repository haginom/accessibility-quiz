import React from "react";
import styled from "styled-components";

const SLayout = styled.div`
  margin: 0 4rem 0 4rem;
  height: auto !important; /* real browsers */
  min-height: 100%; /* real browsers */
  @media (max-width: 768px) {
    margin: 0 1rem 0 1rem;
  }

  select {
    float: right;
  }
`;

const Layout = ({ currentTheme, setCurrentTheme, children }) => {
  return (
    <SLayout>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </SLayout>
  );
};

export default Layout;
