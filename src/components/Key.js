import { useCallback } from "react";
import "./key.css";
import soundFile from "../assets/cach.mp3";

function Key({ index, item, onPayload }) {
  const CssItem = useCallback((classNameCss, keyPressed, keyDown) => {
    if (keyDown) {
      return classNameCss + " keyondown";
    } else if (keyPressed) {
      return classNameCss + " keypressed";
    }
    return classNameCss;
  }, []);

  const handleKeyPress = () => {
    const audio = new Audio(soundFile);
    audio.play();
    onPayload({
      type: item.type ? item.type : "key",
      payload: index,
    });
  };

  return (
    <>
      <li
        className={CssItem(item.className, item.pressed, item.onDown)}
        onClick={handleKeyPress}
      >
        {item.name}
      </li>
    </>
  );
}

export default Key;
