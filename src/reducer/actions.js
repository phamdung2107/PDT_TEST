const numberRights = [...Array(12).keys()]
  .map((i) => i + 83)
  .filter((item) => item !== 86 && item !== 93);

const textLogger = (old_text, new_key, specialKey) => {
  if (specialKey.capslock) {
    return `${old_text}${new_key.toUpperCase()}`;
  } else if (specialKey.shift) {
    return `${old_text}${new_key.toUpperCase()}`;
  }
  return `${old_text}${new_key}`;
};

export const handleKeyAction = (state, action, newkey) => {
  const key =
    (state.specialKey.shift && newkey[action.payload].name2) ||
    newkey[action.payload].name;
  return {
    ...state,
    keys: newkey,
    text: textLogger(state.text, key, state.specialKey),
    keyLogger: [key, ...state.keyLogger],
    specialKey: {
      ...state.specialKey,
      shift: false,
    },
  };
};

export const handleActionAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleCapslockAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    specialKey: {
      ...state.specialKey,
      capslock: !state.specialKey.capslock,
    },
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleShiftAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    specialKey: {
      ...state.specialKey,
      shift: !state.specialKey.shift,
    },
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleNumlockAction = (state, action, newkey) => {
  if (numberRights.includes(action.payload) && state.specialKey.numlock === false) {
    return state;
  }
  return {
    ...state,
    keys: newkey,
    specialKey: {
      ...state.specialKey,
      numlock: !state.specialKey.numlock,
    },
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleSpaceAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    text: `${state.text} `,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleTabAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    text: `${state.text}\t`,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleEnterAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    text: `${state.text}\n`,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleBackspaceAction = (state, action, newkey) => {
  return {
    ...state,
    keys: newkey,
    text: state.text.substring(0, state.text.length - 1),
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};
