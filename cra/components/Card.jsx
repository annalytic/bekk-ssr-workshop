import React from "react";
import { Card, Text } from "@vygruppen/spor-react";
import moment from "moment";
import Image from "next/image";

export const ShowCard = ({
  character: {
    created,
    episode,
    gender,
    id,
    image,
    location,
    name,
    species,
    status,
  },
}) => {
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

  const checkIfValidDate = (date) => {
    return moment(date).isValid();
  };

  const numberOfDaysBetween = () => {
    const diffInDays = moment().diff(moment(created), "days");
    return diffInDays;
  };

  if (id === undefined) return null;

  return (
    <Card
      colorScheme={getRandom(cardColors)}
      p={4}
      size="lg"
      width="fit-content"
    >
      <figure key={id}>
        <Image id={id} src={image} alt={name} width={400} height={400} />
      </figure>
      <Text>{`Name: ${name}`}</Text>
      <Text>{`Location: ${location.name}`}</Text>
      <Text>{`Species: ${species}`}</Text>
      <Text>{`Gender: ${gender}`}</Text>
      <Text>{`Status: ${status}`}</Text>
      <Text>{`Episode: ${episode[0].replace(
        "https://rickandmortyapi.com/api/episode/",
        ""
      )}`}</Text>
      {checkIfValidDate(created) && (
        <Text>{`Days since Air Date: ${numberOfDaysBetween()}`}</Text>
      )}
    </Card>
  );
};
