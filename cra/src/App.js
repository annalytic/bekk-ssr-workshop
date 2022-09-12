import React, { useState, useEffect } from "react";
import moment from "moment";
import { Wrap, Card } from "@vygruppen/spor-react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
`;

function App() {
  const [cats, setCats] = useState([]);
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
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const cats = await resp.json();
      setCats(cats);
    };
    fetchData();
  }, []);

  return (
    <AppContainer>
      <Navigation />
      <Header />
      <main className="app-main">
        <Wrap gap={4} justify="center">
          {cats.map((cat) => (
            /* Dette må burde flyttes inn i en Card komponent */
            <Card
              key={cat.id}
              colorScheme={getRandom(cardColors)}
              p={4}
              size="lg"
              width="fit-content"
            >
              <figure key={cat.id}>
                <img
                  id={cat.id}
                  src={cat.url}
                  alt={cat.alt}
                  width="400px"
                  height="400px"
                />
                <figcaption>hello</figcaption>
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
