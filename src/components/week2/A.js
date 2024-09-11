export default function A({ redChild, blueChild }) {
  return (
    <>
      <h1>Component A</h1>
      <div className="red">{redChild}</div>
      <div className="blue">{blueChild}</div>
    </>
  );
}
