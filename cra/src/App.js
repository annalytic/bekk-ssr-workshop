import React, { useState, useEffect } from "react";
import moment from "moment";
import logo from "./logo.svg";

import "./App.css";

function App() {
  const [cats, setCats] = useState([]);

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
    <div className="App">
      <header className="App-header">
        <p>I am using CRA</p>
        <p>
          Lorem ipsum dolor sit amet, at quo meis nonumy, mel no causae
          salutandi iudicabit, et iuvaret appellantur cum. Vis aperiri principes
          ei, id qui doctus instructior signiferumque. Ut alia vidit quo, no pri
          sint possim vocent. Ad vim mollis facilisi dissentias, ne vis saperet
          adipiscing. Ex nisl populo saperet mea. Hinc labore sanctus pri no,
          pro in intellegebat conclusionemque. Veniam nusquam eam no, sit
          minimum fabellas reformidans cu, ei tation tempor nonumes mea. Pro an
          ipsum tation.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>{`Dagens dato: ${moment()}`}</span>
        {cats.map((cat) => (
          <figure key={cat.id}>
            <img
              id={cat.id}
              src={cat.url}
              alt={cat.alt}
              width="200px"
              height="200px"
            />
          </figure>
        ))}
      </header>
    </div>
  );
}

export default App;
