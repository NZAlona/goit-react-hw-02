import css from './Feedback.module.css';

export default function Feedback({ children, value, totalSum }) {
  return (
    <>
      {totalSum ? (
        <p className={css.textFeedback}>
          {children}: {value}
        </p>
      ) : null}
    </>
  );
}
