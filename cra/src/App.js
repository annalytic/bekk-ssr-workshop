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
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://rickandmortyapi.com/api/episode");
      const episodes = await resp.json();
      setEpisodes(episodes.results);
    };
    fetchData();
  }, []);

  return (
    <AppContainer>
      <Header />
      <main className="app-main">
        <Wrap gap={3} justify="center">
          {episodes.map((episode) => (
            <>
              {episode.characters.map((url) => (
                <ShowCard url={url} episode={episode} />
              ))}
            </>
          ))}
        </Wrap>
      </main>
    </AppContainer>
  );
}

export default App;
