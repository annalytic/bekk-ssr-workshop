import React, { useState, useEffect } from "react";
import moment from "moment";
import { Wrap, Card } from "@vygruppen/spor-react";
import { Header } from "./components/Header";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const cardColors = [
    "white",
    "grey",
    "blue",
    "green",
    "teal",
    "yellow",
    "orange",
  ];

  const getRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10"
      );
      const characters = await resp.json();
      setCharacters(characters);
    };
    fetchData();
  }, []);

  console.log("characters", characters);

  return (
    <AppContainer>
      <Header />
      <main className="app-main">
        <Wrap gap={3} justify="center">
          {characters.map((character) => (
            /* Dette må burde flyttes inn i en Card komponent */
            <Card
              key={character.id}
              colorScheme={getRandom(cardColors)}
              p={4}
              size="lg"
              width="fit-content"
            >
              <figure key={character.id}>
                <img
                  id={character.id}
                  src={character.image}
                  alt={character.name}
                  width="400px"
                  height="400px"
                />
                <figcaption>{character.name}</figcaption>
              </figure>
              <span>{`Dagens dato: ${moment().format("LL")}`}</span>
            </Card>
          ))}
        </Wrap>
      </main>
    </AppContainer>
  );
}

export default App;
