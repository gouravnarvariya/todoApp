import React, { useState } from "react";
import ListCard from "./ListCard";

const List = () => {
  const [value, setValue] = useState({ title: "", description: "" });
  const [listItem, setListItem] = useState([]);
  const getData = () => {
    setListItem((oldA) => [...oldA, value]);
  };

  return (
    <div className="p-2 m-2">
      <input
        className="w-96 h-10 border border-gray-100 shadow-lg rounded-sm"
        onChange={(e) => setValue({ ...value, title: e.target.value })}
        type="text"
        placeholder="title"
        value={value.title}
      ></input>

      <input
        className="w-96 h-10 border border-gray-100 shadow-lg rounded-sm"
        onChange={(e) => setValue({ ...value, description: e.target.value })}
        type="text"
        placeholder="description"
        value={value.description}
      ></input>

      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => {
          getData();
        }}
      >
        Submit
      </button>
      {/* <div>
        <h1>hello items </h1>
        {listItem.map((props, index) => {
          return (
            <div key={index}>
              <li>{props.title}</li>
              <li>{props.description}</li>
            </div>
          );
        })}
      </div> */}
      <ListCard info={listItem}/>
    </div>
  );
};

export default List;
