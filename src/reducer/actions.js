export const numberRights = [...Array(12).keys()]
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

export const handleKeyAction = (state, newkey, action) => {
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

export const handleActionAction = (state, newkey, action) => {
  return {
    ...state,
    keys: newkey,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleCapslockAction = (state, newkey, action) => {
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

export const handleShiftAction = (state, newkey, action) => {
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

export const handleNumlockAction = (state, newkey, action) => {
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

export const handleSpaceAction = (state, newkey, action) => {
  return {
    ...state,
    keys: newkey,
    text: `${state.text} `,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleTabAction = (state, newkey, action) => {
  return {
    ...state,
    keys: newkey,
    text: `${state.text}\t`,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleEnterAction = (state, newkey, action) => {
  return {
    ...state,
    keys: newkey,
    text: `${state.text}\n`,
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};

export const handleBackspaceAction = (state, newkey, action) => {
  return {
    ...state,
    keys: newkey,
    text: state.text.substring(0, state.text.length - 1),
    keyLogger: [newkey[action.payload].name, ...state.keyLogger],
  };
};
