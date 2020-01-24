import React from "react";
import styled from "styled-components";

const SwFooter = styled.footer`
  background: black;
  color: white;
`;

function Footer() {
  return (
    <SwFooter>
      <p>2020 Copyright: STARWARS</p>
    </SwFooter>
  );
}

export default Footer;
