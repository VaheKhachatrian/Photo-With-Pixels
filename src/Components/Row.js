import React from "react";
import Item from "./item"; 

const itemSize = 20;

const ItemContainer = () => {
  const maxRowCount = Math.floor(window.innerHeight / itemSize);
  const maxColumnCount = Math.floor(window.innerWidth / itemSize);

  const items = [];
  for (let row = 0; row < maxRowCount; row++) {
    for (let col = 0; col < maxColumnCount; col++) {
      items.push(<Item key={`${row}-${col}`} />);
    }
  }

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden' 
  };

  return <div style={containerStyle}>{items}</div>;
}

export default ItemContainer;
