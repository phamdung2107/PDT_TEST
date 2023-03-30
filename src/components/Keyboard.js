import Key from "./Key";

const keys = [
  {
    name: "esc",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F1",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F2",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F3",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F4",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F5",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F6",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F7",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F8",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F9",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F10",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F11",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "F12",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Prt",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Ins",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "`",
    className: "symbol ctrl",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "1",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "2",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "3",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "4",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "5",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "6",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "7",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "8",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "9",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "0",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "-",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "+",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Backspace",
    className: "delete lastitem",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "tab",
    className: "tab",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "q",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "w",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "e",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "r",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "t",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "y",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "u",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "i",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "o",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "p",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "{",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "}",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "|",
    className: "symbol lastitem",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Caps Lock",
    className: "capslock",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "a",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "s",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "d",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "f",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "g",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "h",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "j",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "k",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "l",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: ";",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "'",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Enter",
    className: "return lastitem",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "shift",
    className: "left-shift",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "z",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "x",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "c",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "v",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "b",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "n",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "m",
    className: "letter",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: ",",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: ".",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "/",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Shift",
    className: "right-shift lastitem",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "ctrl",
    className: "ctrl",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Fn",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Win",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Alt",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "",
    className: "space lastitem",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Alt",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "ctrl",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
];

const key2s = [
  {
    name: "PgUp",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "PgDn",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Home",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "End",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Num",
    className: "num",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "/",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "*",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "-",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "7",
    className: "ctrl",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "8",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "9",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "+",
    className: "symbol height",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "4",
    className: "ctrl mt45",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "5",
    className: "symbol mt45",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "6",
    className: "symbol mt45",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "1",
    className: "ctrl",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "2",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "3",
    className: "symbol",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "Enter",
    className: "symbol height",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: "0",
    className: "ctrl mt45 wid",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
  {
    name: ".",
    className: "symbol mt45",
    onClick: (e) => {
      console.log(e.target.value);
    },
  },
];

function Keyboard() {
  return (
    <>
      <textarea className="write" rows="6" cols="60"></textarea>
      <ul className="keyboard">
        {keys.map((item, index) => {
          return <Key key={index} item={item} />;
        })}
      </ul>
      <ul className="keyboard right">
        {key2s.map((item, index) => {
          return <Key key={index} item={item} />;
        })}
      </ul>
    </>
  );
}

export default Keyboard;
