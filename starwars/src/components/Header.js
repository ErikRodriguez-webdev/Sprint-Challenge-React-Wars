import React from "react";
import styled from "styled-components";

const SwHeader = styled.header`
  background: tan;
`;

function Header() {
  return (
    <SwHeader>
      <h1 className="Header">STARWARS</h1>
    </SwHeader>
  );
}

export default Header;
