import { keyData } from "../data";
import {
  handleActionAction,
  handleBackspaceAction,
  handleCapslockAction,
  handleEnterAction,
  handleKeyAction,
  handleNumlockAction,
  handleShiftAction,
  handleSpaceAction,
  handleTabAction,
  numberRights,
} from "./actions";
import { stateInterface, actionInterface } from "./constants";

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

const actions = {
  key: handleKeyAction,
  action: handleActionAction,
  capslock: handleCapslockAction,
  shift: handleShiftAction,
  numlock: handleNumlockAction,
  space: handleSpaceAction,
  tab: handleTabAction,
  enter: handleEnterAction,
  backspace: handleBackspaceAction,
};

export const reducer = (
  state: stateInterface,
  action: actionInterface = "key"
) => {
  let newkey = [...state.keys];
  newkey = newkey.map((item) => ({ ...item, onDown: false }));
  newkey[action.payload] = {
    ...newkey[action.payload],
    onDown: true,
    pressed: true,
  };
  if (numberRights.includes(action.payload) && !state.specialKey.numlock) {
    return state;
  }

  const handler = actions[action.type] || ((state) => state);
  return handler(state, newkey, action);
};
