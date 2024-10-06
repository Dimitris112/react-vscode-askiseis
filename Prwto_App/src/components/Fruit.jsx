export default function Fruit({ name, price, emoji }) {
  return (
    <>
      {/* {name} ${price} {emoji} */}
      {price > 10 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
