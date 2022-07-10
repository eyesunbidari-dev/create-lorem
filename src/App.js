import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handelerSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 4) {
      amount = 4;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="section-center">
      <h4>لورم ساز فارسی</h4>
      <form className="lorem" onSubmit={handelerSubmit}>
        <label htmlFor="total">تعداد پاراگراف</label>
        <input
          type="number"
          value={count}
          name="total"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit"> بساز</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
}

export default App;
