import Key from "./Key";
import { keyData } from "../data";
import { useReducer } from "react";

type stateInterface = {
  keys: Array,
  text: String,
  keyLogger: Array,
  specialKey: Object,
};

type typeInterface =
  | "key"
  | "shift"
  | "numlock"
  | "tab"
  | "capslock"
  | "space"
  | "backspace"
  | "action";

type actionInterface = {
  type: typeInterface,
  payload: Number,
};

const stateInit = {
  keys: keyData,
  text: "",
  keyLogger: [],
  specialKey: {
    shift: false,
    numlock: false,
    tab: false,
    capslock: false,
    backspace: false,
  },
};

const numberRights = [...Array(12).keys()]
  .map((i) => i + 83)
  .filter((item) => item !== 86 && item !== 93);

const textLogger = (old_text, new_key, specialKey) => {
  if (specialKey.capslock) {
    return `${old_text}${new_key.toUpperCase()}`;
  }else if (specialKey.shift) {
    return `${old_text}${new_key.toUpperCase()}`;
  }
  return `${old_text}${new_key}`;
};

const reducer = (state: stateInterface, action: actionInterface = "key") => {
  let newkey = [...state.keys];
  newkey = newkey.map((item) => ({ ...item, onDown: false }));
  newkey[action.payload] = {
    ...newkey[action.payload],
    onDown: true,
    pressed: true,
  };
  // xử lý numlock
  if (
    numberRights.includes(action.payload) &&
    state.specialKey.numlock === false
  ) {
    return state;
  }
  switch (action.type) {
    case "key":
      return {
        ...state,
        keys: newkey,
        text: textLogger(
          state.text,
          newkey[action.payload].name,
          state.specialKey
        ),
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };
    case "action":
      return {
        ...state,
        keys: newkey,
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };
    case "capslock":
      return {
        ...state,
        keys: newkey,
        specialKey: {
          ...state.specialKey,
          capslock: !state.specialKey.capslock,
        },
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };
    case "shift":
      return {
        ...state,
        keys: newkey,
        specialKey: {
          ...state.specialKey,
          shift: !state.specialKey.shift,
        },
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };
    case "numlock":
      return {
        ...state,
        keys: newkey,
        specialKey: {
          ...state.specialKey,
          numlock: !state.specialKey.numlock,
        },
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };

    case "space":
      return {
        ...state,
        keys: newkey,
        text: `${state.text} `,
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };

    case "tab":
      return {
        ...state,
        keys: newkey,
        text: `${state.text}\t`,
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };

    case "enter":
      return {
        ...state,
        keys: newkey,
        text: `${state.text}\n`,
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };

    case "backspace":
      return {
        ...state,
        keys: newkey,
        text: state.text.substring(0, state.text.length - 1),
        keyLogger: [newkey[action.payload].name, ...state.keyLogger],
      };
    default:
      return state;
  }
  // return state;
};

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
