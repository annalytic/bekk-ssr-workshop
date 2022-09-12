import React, { useState, useEffect } from "react";
import moment from "moment";
import { Wrap, Card } from "@vygruppen/spor-react";
import Header from "./components/Header";
import "./App.css";

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

  const get_random = (list) => {
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
    <div className="app">
      <Header />
      <main className="app-main">
        <Wrap gap={3} justify="center">
          {cats.map((cat) => (
            /* Dette må burde flyttes inn i en Card komponent */
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
