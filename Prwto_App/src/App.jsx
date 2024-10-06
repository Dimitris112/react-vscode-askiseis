import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

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
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}

export default App;
