import React, { useContext } from "react";
import SoundContext from "../context/soundContext";

function SoundButton() {
  const { isSoundOn, toggleSound } = useContext(SoundContext);

  const handleClick = () => {
    toggleSound();
  };

  return (
    <button onClick={handleClick} style={{
        position: 'absolute',
        top:80,
        left:100,
    }}>
      {isSoundOn ? "Tắt âm thanh" : "Bật âm thanh"}
    </button>
  );
}

export default SoundButton;