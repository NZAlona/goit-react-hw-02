export default function Options({ onUpdate, totalSum }) {
  return (
    <>
      <section>
        <button onClick={() => onUpdate('good')}>Good</button>
        <button onClick={() => onUpdate('neutral')}>Neutral</button>
        <button onClick={() => onUpdate('bad')}>Bad</button>
        {totalSum ? <button>Reset</button> : null}
      </section>
    </>
  );
}
