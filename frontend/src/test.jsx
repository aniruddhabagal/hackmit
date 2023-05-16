import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./test.css";

// const finalSpaceCharacters = [
//   {
//     id: "gary",
//     name: "Gary Goodspeed",
//     thumb: "/images/gary.png",
//   },
//   {
//     id: "cato",
//     name: "Little Cato",
//     thumb: "/images/cato.png",
//   },
//   {
//     id: "kvn",
//     name: "KVN",
//     thumb: "/images/kvn.png",
//   },
//   {
//     id: "mooncake",
//     name: "Mooncake",
//     thumb: "/images/mooncake.png",
//   },
//   {
//     id: "quinn",
//     name: "Quinn Ergon",
//     thumb: "/images/quinn.png",
//   },
// ];

// const data = [
//   [
//     {
//       id: "0",
//       word: "dog",
//       part: "verb",
//     },
//     {
//       id: "1",
//       word: "cat",
//       part: "verb",
//     },
//     {
//       id: "3",
//       word: "cdft",
//       part: "verffeb",
//     },
//   ],
// ];

const data = [
  [
    {
      id: "1",
      word: "dog",
      part: "verb",
    },
    {
      id: "2",
      word: "cat",
      part: "verb",
    },
    { id: "3", word: "fff", part: "verb" },
    {
      id: 4,
      word: "ggg",
      part: "verb",
    },
    {
      id: 5,
      word: "hh",
      part: "verb",
    },
  ],
  [
    {
      id: 6,
      word: "do1g",
      part: "verb",
    },
    {
      id: 7,
      word: "cat1",
      part: "verb",
    },
    {
      id: 8,
      word: "fff1",
      part: "verb",
    },
    {
      id: 9,
      word: "ggg1",
      part: "verb",
    },
    {
      id: 10,
      word: "hh1",
      part: "verb",
    },
  ],
  [
    {
      id: "11",
      word: "dog2",
      part: "verb",
    },
    {
      id: "12",
      word: "cat2",
      part: "verb",
    },
    {
      id: "13",
      word: "fff2",
      part: "verb",
    },
    {
      id: 14,
      word: "gg2g",
      part: "verb",
    },
    {
      id: 15,
      word: "hh2",
      part: "verb",
    },
  ],
];

function Test() {
  const [characters, updateCharacters] = useState(data);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map((value, index) => {
                  return (
                    <Draggable
                      key={value}
                      draggableId={value[1].id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <p>{`${value[1].word}`}</p>
                          </div>
                          <p>{value[1].part}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default Test;
