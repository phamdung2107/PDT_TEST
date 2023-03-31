import Key from "./Key";
import { useReducer } from "react";
import { reducer, stateInit } from "../reducer/reducer";

function Keyboard() {
  const [data, payload] = useReducer(reducer, stateInit);

  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: 3,
        }}
      >
        {data?.keyLogger.map((key, index) => {
          return <li key={`keylog-${index}`}> {key} </li>;
        })}
      </ul>
      <textarea
        className="write"
        rows="6"
        cols="60"
        defaultValue={data.text}
      ></textarea>
      <ul className="keyboard">
        {data?.keys
          .filter((item) => (item.keyAddress === "left" ? item : null))
          .map((item, index) => {
            return (
              <Key key={index} index={index} item={item} onPayload={payload} />
            );
          })}
      </ul>
      <ul className="keyboard right">
        {data?.keys
          .filter((item) => (item.keyAddress === "right" ? item : null))
          .map((item, index) => {
            return (
              <Key
                key={index + 75}
                index={index + 75}
                item={item}
                onPayload={payload}
              />
            );
          })}
      </ul>
    </>
  );
}

export default Keyboard;
