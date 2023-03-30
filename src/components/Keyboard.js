import Key from "./Key";

const keys = [
  {
    name: "`",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "1",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "2",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "3",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "4",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "5",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "6",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "7",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "8",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "9",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "0",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "-",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "+",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "delete",
    className: "delete lastitem",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "tab",
    className: "tab",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "q",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "w",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "e",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "r",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "t",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "y",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "u",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "i",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "o",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "p",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "{",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "}",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "|",
    className: "symbol lastitem",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "Caps Lock",
    className: "capslock",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "a",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "s",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "d",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "f",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "g",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "h",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "j",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "k",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "l",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: ";",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "'",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "Enter",
    className: "return lastitem",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "shift",
    className: "left-shift",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "z",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "x",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "c",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "v",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "b",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "n",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "m",
    className: "letter",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: ",",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: ".",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "/",
    className: "symbol",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "Shift",
    className: "right-shift lastitem",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
  {
    name: "&nbsp;",
    className: "space lastitem",
    onClick: (e) =>{
     console.log(e.target.value); 
    }
  },
];


function Keyboard() {
  return (
    <>
      <ul className="keyboard">
        {keys.map((item, index) => {
          return <Key key={index} item={item} />;
        })}
      </ul>
    </>
  );
}

export default Keyboard;
