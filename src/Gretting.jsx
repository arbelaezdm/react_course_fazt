export function Gretting(props) {
  console.log(props)
  return (
    <>
      <h1>Este es un componente</h1>
      <p>este es un P</p>
      <p>{props.title}</p>
    </>
  );
}

// individual export
export function Sum() {
  function add(x, y) {
    return x + y;
  }

  return (
    <>
      <h1>{add(2, 2)}</h1>
    </>
  );
}
