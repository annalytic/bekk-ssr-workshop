import React from "react";
import { Wrap } from "@vygruppen/spor-react";
import { ShowCard } from "./Card";

export const MainApp = ({ characters }) => {
  if (!characters && characters.length === 0)
    return <h1>Loading characters...</h1>;

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
