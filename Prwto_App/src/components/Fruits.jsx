import Fruit from "./Fruit";
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
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
