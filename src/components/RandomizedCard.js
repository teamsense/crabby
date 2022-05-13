import React, { useState, useEffect } from "react";

import cardData from "../cards.json";

const RandomizedCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const suits = ["spades", "hearts", "diamonds", "clubs"];
    var index = Math.floor(Math.random() * suits.length);

    setSelectedCard(suits[index]);
  }, []);

  if (selectedCard !== null) {
    return (
      <div>
        {cardData[selectedCard].map((item) => {
          return <h3>{item.name}</h3>;
        })}
      </div>
    );
  }
};

export default RandomizedCard;
