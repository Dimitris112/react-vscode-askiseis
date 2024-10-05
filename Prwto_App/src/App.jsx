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
    </div>
  );
}

export default App;
