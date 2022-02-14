
import React from "react";
import ReactDOM from "react-dom";
// import React from "https://dev.jspm.io/react@16.13.1";
// import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1"; 

// ReactDOM.render(
//   React.createElement('h1', { children: 'Hello world!' }),
//   document.getElementById('root')
// );


function CounterDisplay({ count }) {
  // We pass the mutable state to the counter display function
  return <h2>The current counter count is {count}</h2>;
}

function CounterButton({ count, incrementOnClick }) {
  // We pass the mutable state and increment function from the app to the button function
  return <button onClick={incrementOnClick}>{count}</button>;
}

function Counter() {
  // We lift state up one level, from the component to the app
  const [count, setCount] = React.useState(0);
  const incrementCounter = () => setCount(current => current + 1);
  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton count={count} incrementOnClick={incrementCounter} />
      <h3>State is lifted from component to app level</h3>
    </div>
  );
}

let HelloWorld = React.createElement('h1', { children: 'Hello world!' })

const rootElement = document.getElementById("root");
ReactDOM.render(<><HelloWorld /><Counter /> </>, rootElement);




