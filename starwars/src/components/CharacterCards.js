import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
  console.log(swData);
  return <div></div>;
}

export default CharacterCards;
