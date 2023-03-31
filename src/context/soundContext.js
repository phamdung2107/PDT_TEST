import { createContext } from "react";

const SoundContext = createContext({
  isSoundOn: true,
  toggleSound: () => {},
});

export default SoundContext;