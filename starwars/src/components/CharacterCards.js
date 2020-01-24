import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const OuterBoxDiv = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 95%;
`;

const TheCardDiv = styled.div`
  background: grey;
  border: none;
  width: 20%;
  margin: 5%;
  padding: 1%;
  border-radius: 10px;
`;

function CharacterCards() {
  const [swData, setSwData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then((res) => {
        console.log(`API success! ${res.data.results}`);
        setSwData(res.data.results);
      })
      .catch((err) => {
        console.log(`API error: ${err}`);
      });
  }, []);

  return (
    <OuterBoxDiv>
      {swData.map((item) => {
        return (
          <TheCardDiv>
            <h2>{item.name}</h2>
            <p>
              Height: {item.height}cm | Weight: {item.mass}kg
            </p>
            <p>Gender: {item.gender}</p>
            <p>Birth Year: {item.birth_year}</p>
          </TheCardDiv>
        );
      })}
    </OuterBoxDiv>
  );
}

export default CharacterCards;
