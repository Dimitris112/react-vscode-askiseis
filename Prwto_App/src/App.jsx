import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const person = {
    name: "Dim",
    message: "Hi",
    emoji: "👋",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <br />
      <Fruits />
      <br />
      <ConditionalComponent />
      <br />
      <Message />
      <br />
      <Counter />
      <br />
      <Form />
      <br />
    </div>
  );
}

export default App;
