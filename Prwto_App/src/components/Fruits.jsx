export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 5, emoji: "🍌" },
    { name: "Orange", price: 15, emoji: "🍊" },
    { name: "Mango", price: 20, emoji: "🥭" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} ${fruit.price} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
