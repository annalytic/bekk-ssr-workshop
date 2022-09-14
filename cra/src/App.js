import React, { useState, useEffect } from "react";
import moment from "moment";
import { Wrap, Card } from "@vygruppen/spor-react";
import { Header } from "./components/Header";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
`;

function App() {
  const [episodes, setEpisodes] = useState([]);

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
          "https://rickandmortyapi.com/api/episode"
      );
      const episodes = await resp.json();
      setEpisodes(episodes.results);
    };
    fetchData();
  }, []);

  const ShowCard = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
      const getCharacter = async () => {
        const response = await fetch(
            props.url
        );
        const responseJson = await response.json();
        console.log("json", responseJson);
        setData(responseJson);
      };
      getCharacter();
    }, []);

    return (
        <Card
            key={data.id}
            colorScheme={getRandom(cardColors)}
            p={4}
            size="lg"
            width="fit-content"
        >
          <figure key={data.id}>
            <img
                id={data.id}
                src={data.image}
                alt={data.name}
                width="400px"
                height="400px"
            />
            <figcaption>{data.name}</figcaption>
          </figure>
          {/* Todo : bruke css for linjeskift*/}
          <span>{`Dagens dato: ${moment().format("LL")}`}</span>
          <br/>
          <span>{`Location : ${data.location?.name}`}</span>
          <br/>
          <span>{`Species : ${data.species}`}</span>
          <br/>
          <span>{`Status : ${data.status}`}</span>
          <br/>
          <span>{`Air date : ${props.airDate}`}</span>
          <br/>
          <span>{`Episode : ${props.episode}`}</span>
        </Card>
    );
  };

  return (
    <AppContainer>
      <Header />
      <main className="app-main">
        <Wrap gap={3} justify="center">
          {episodes.map((episode) => (
              <div>
              {episode.characters.map(url => <ShowCard url={url} airDate={episode.air_date} episode={episode.episode}/> )}
              </div>
          ))}
        </Wrap>
      </main>
    </AppContainer>
  );
}

export default App;
