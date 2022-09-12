import React, { useState, useEffect } from "react";
import moment from "moment";
import { Heading, Text, Wrap, Card } from "@vygruppen/spor-react";
import "./App.css";
import { color } from "@chakra-ui/react";

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
  function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  console.log(get_random(cardColors));

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

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  return (
    <div className="app">
      <header className="app-header">
        <Heading textStyle="2xl">Velkommen til SSR workshop</Heading>
        <Text textStyle="md" pt={6} pb={8}>
          Denne appen er laget med <b>Create React App</b>. Oppgaven din er å
          migrere den over til <b>Next.js</b>. Oppskrift for hvordan det gjøres
          finner du{" "}
          <a href="https://nextjs.org/docs/migrating/from-create-react-app">
            her
          </a>
          .
        </Text>
      </header>
      <main className="app-main">
        <Wrap gap={3} justify="center">
          {cats.map((cat) => (
            <Card
              key={cat.id}
              colorScheme={get_random(cardColors)}
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
    </div>
  );
}

export default App;
