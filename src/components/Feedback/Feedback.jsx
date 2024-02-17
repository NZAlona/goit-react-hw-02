import css from './Feedback.module.css';

export default function Feedback({ good, bad, neutral, totalSum }) {
  const positivePercent = Math.round(((good + neutral) / totalSum) * 100);
  return (
    <>
      {totalSum ? (
        <section className={css.textFeedback}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalSum} </p>
          <p>Positive: {positivePercent + '%'} </p>
        </section>
      ) : null}
    </>
  );
}
