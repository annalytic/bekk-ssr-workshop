import React, { useEffect, useState } from "react";
import { Card, Text } from "@vygruppen/spor-react";
import moment from "moment";

export const ShowCard = ({ url, episode: { episode, air_date } }) => {
  const [character, setCharacter] = useState({});

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
    const getCharacter = async () => {
      const response = await fetch(url);
      const responseJson = await response.json();
      setCharacter(responseJson);
    };
    getCharacter();
  }, []);

  return (
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
      <Text>{`Dagens dato: ${moment().format("LL")}`}</Text>
      <Text>{`Location : ${character.location?.name}`}</Text>
      <Text>{`Species : ${character.species}`}</Text>
      <Text>{`Status : ${character.status}`}</Text>
      <Text>{`Air date : ${air_date}`}</Text>
      <Text>{`Episode : ${episode}`}</Text>
    </Card>
  );
};
