import React, { ChangeEvent, useState } from "react";

const App = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);
    if (isNaN(newValue)) newValue = 0;
    if (e.target.id === "x") setX(newValue);
    else setY(newValue);
  };

  return (
    <div>
      <h3>제어컴포넌트</h3>X : <input id="x" type="text" value={x} onChange={changeValue}></input>
      <br />Y : <input id="y" type="text" value={y} onChange={changeValue}></input>
      <br />
      결과 : <span>{x + y}</span>
    </div>
  );
};

export default App;
