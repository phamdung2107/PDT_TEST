import { useCallback, useContext } from "react";
import "./key.css";
import soundFile from "../assets/cach.mp3";
import SoundContext from "../context/soundContext";

function Key({ index, item, onPayload }) {
  const { isSoundOn } = useContext(SoundContext);

  const CssItem = useCallback((classNameCss, keyPressed, keyDown) => {
    if (keyDown) {
      return classNameCss + " keyondown";
    } else if (keyPressed) {
      return classNameCss + " keypressed";
    }
    return classNameCss;
  }, []);

  const handleKeyPress = () => {
    if (isSoundOn) {
      const audio = new Audio(soundFile);
      audio.play();
    }
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
        {item.children ? (
          <>
          {item.children.map((childrenItem,index)=>(
            <span key={index} className={childrenItem.className}>{childrenItem.name}</span>
          ))}
        </>
        ) :item.name}
      </li>
    </>
  );
}

export default Key;
