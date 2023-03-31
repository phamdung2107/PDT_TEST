import { keyData } from "../data";
import { stateInterface , actionInterface } from './constants'

export const stateInit = {
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

export const reducer = (state: stateInterface, action: actionInterface = "key") => {
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