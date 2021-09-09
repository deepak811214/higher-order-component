import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Hoc component={Normal} />
      <Hoc component={Hover} />
    </div>
  );
}

function Hoc(props) {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((value) => value + 1);
  };
  return (
    <div>
      <props.component handleClick={handleClick} value={value} />
    </div>
  );
}

const Normal = (props) => {
  return (
    <div>
      {props.value}
      <button onClick={props.handleClick}>click</button>
    </div>
  );
};

const Hover = (props) => {
  return (
    <div>
      {props.value}
      <p onMouseOver={props.handleClick}>click</p>
    </div>
  );
};
