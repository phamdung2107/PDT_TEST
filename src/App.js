import { useMemo, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import SoundButton from "./components/SoundButton";
import SoundContext from "./context/soundContext";

function App() {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  const soundValue = useMemo(
    () => ({
      isSoundOn,
      toggleSound,
    }),
    [isSoundOn]
  );

  return (
    <div className="container">
      <SoundContext.Provider value={soundValue}>
        <Keyboard />
        <SoundButton />
      </SoundContext.Provider>
    </div>
  );
}

export default App;
