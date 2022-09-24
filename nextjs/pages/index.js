import React, { useState, useEffect } from "react";
import { Wrap } from "@vygruppen/spor-react";
import { Header } from "../src/components/Header";
import { ShowCard } from "../src/components/Card";
import styled from "@emotion/styled";
import { SporProvider, Language } from "@vygruppen/spor-react";

const AppContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
`;

const App = ({ data }) => {
  return (
    <SporProvider language={Language.English}>
      <AppContainer>
        <Header />
        <main className="app-main">
          <Wrap gap={3} justify="center">
            {data.results.map((episode) => (
              <>
                {episode.characters.map((url, key) => (
                  <ShowCard key={key} url={url} episode={episode} />
                ))}
              </>
            ))}
          </Wrap>
        </main>
      </AppContainer>
    </SporProvider>
  );
};

export async function getServerSideProps() {
  const resp = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await resp.json();
  return { props: { data } };
}

export default App;
