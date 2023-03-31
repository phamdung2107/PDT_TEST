export type stateInterface = {
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
  
export  type actionInterface = {
    type: typeInterface,
    payload: Number,
  };