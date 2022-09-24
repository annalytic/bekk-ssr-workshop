import React, { useState, useEffect } from "react";
import { Wrap } from "@vygruppen/spor-react";
import { Header } from "./components/Header";
import { ShowCard } from "./components/Card";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
`;

function App() {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Fikk en status kode ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCharacters(data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  if (characters.length === 0) return <h1>Loading characters...</h1>

  return (
    <AppContainer>
      <Header />
      <main className="app-main">
        <Wrap gap={3} justify="center">
          {characters.map((character) => 
                <ShowCard character={character} key={character.name}/>
          )}
        </Wrap>
      </main>
    </AppContainer>
  );
}

export default App;
