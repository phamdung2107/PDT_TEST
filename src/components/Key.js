

function Key({ item }) {
  return (
    <>
      <li className={item.className} onClick={item.onClick} value={item.name}>
        {item.name}
      </li>
    </>
  );
}


export default Key;
