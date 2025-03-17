let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

// Output:  why? Because in strict mode, React render component twice during development.
// Tea cup for guest #2
// Tea cup for guest #4
// Tea cup for guest #6
export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
