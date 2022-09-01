import React from "react";
import { useState, useEffect } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const data = await response.json();
    setFacts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="continer">
      <p> {facts.text} </p>
      <button onClick={fetchData}>Give me a fact</button>
    </div>
  );
}

export default CatFacts;
