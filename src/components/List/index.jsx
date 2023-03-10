import React from "react";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";
import Card from "../Card";

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="buttom">
            <MdAdd size={24} color={"#FFF"} />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
}
