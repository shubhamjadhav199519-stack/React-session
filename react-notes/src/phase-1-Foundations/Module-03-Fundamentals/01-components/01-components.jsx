//component -> one default export

// Named export
export function ButtonCompo() {
  return <button>click</button>;
}

export function InputComp() {
  return <input type="text" />;
}

// default export
function CardComp() {
  return (
    <div>
      <p>Card Component1</p>
      <InputComp />
      <ButtonCompo />
    </div>
  );
}
export default CardComp;
