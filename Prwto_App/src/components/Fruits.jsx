import Fruit from "./Fruit";
export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Banana", price: 5, emoji: "🍌", soldout: true },
    { name: "Orange", price: 15, emoji: "🍊", soldout: false },
    { name: "Mango", price: 20, emoji: "🥭", soldout: true },
    { name: "Pineapple", price: 25, emoji: "🍍", soldout: false },
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
