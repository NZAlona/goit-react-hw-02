export default function Options({ onUpdate, totalSum }) {
  return (
    <>
      <section>
        <button onClick={() => onUpdate('good')}>Good</button>
        <button onClick={() => onUpdate('neutral')}>Neutral</button>
        <button onClick={() => onUpdate('bad')}>Bad</button>
        {totalSum ? (
          <button
            onClick={() => {
              onUpdate('reset');
            }}
          >
            Reset
          </button>
        ) : null}
      </section>
    </>
  );
}
