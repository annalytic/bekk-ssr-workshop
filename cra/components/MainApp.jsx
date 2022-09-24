import React, { useState, useEffect } from "react";
import { Wrap } from "@vygruppen/spor-react";
import { ShowCard } from "./Card";

const pageLimit = 3;

export const MainApp = () => {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Feilmelding med statuskode ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCharacters((prev) => [...prev, ...data.results]);
          setUrl(data.info.next);
          setPageCount((prev) => setPageCount(prev + 1));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (pageCount <= pageLimit) {
      fetchData();
    }
  }, [url, pageCount, characters]);

  if (characters.length === 0) return <h1>Loading characters...</h1>;

  return (
    <main className="app-main">
      <Wrap gap={3} justify="center">
        {characters.map((character) => (
          <ShowCard
            character={character}
            key={`${character.id}-${character.name}`}
          />
        ))}
      </Wrap>
    </main>
  );
};
