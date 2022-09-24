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
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Fikk en status kode ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCharacter(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getCharacter();
  }, [url]);

  const checkIfValidDate = (date) => {
    return moment(date).isValid();
  };

  const numberOfDaysBetween = () => {
    const diffInDays = moment().diff(moment(air_date), "days");
    return diffInDays;
  };

  if (character?.id === undefined) return null;

  return (
    <Card
      key={`${episode}-${character.id}`}
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
      </figure>
      <Text>{`Name: ${character.name}`}</Text>
      <Text>{`Location: ${character.location?.name}`}</Text>
      <Text>{`Species: ${character.species}`}</Text>
      <Text>{`Status: ${character.status}`}</Text>
      <Text>{`Episode: ${episode}`}</Text>
      {checkIfValidDate(air_date) && (
        <Text>{`Days since air date: ${numberOfDaysBetween()}`}</Text>
      )}
    </Card>
  );
};
