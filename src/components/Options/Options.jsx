import css from './Options.module.css';

export default function Options({ onUpdate, totalSum }) {
  return (
    <>
      <section>
        <button onClick={() => onUpdate('good')} className={css.btn}>
          Good
        </button>
        <button onClick={() => onUpdate('neutral')} className={css.btn}>
          Neutral
        </button>
        <button onClick={() => onUpdate('bad')} className={css.btn}>
          Bad
        </button>
        {totalSum ? (
          <button
            className={css.btn}
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
