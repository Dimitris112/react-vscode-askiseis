export default function Message() {
  function handleClick() {
    alert("Hello!");
    console.log("Hello!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click for message</button>
    </div>
  );
}
