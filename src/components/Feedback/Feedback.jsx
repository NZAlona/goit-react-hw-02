export default function Feedback({ children, value, totalSum }) {
  return (
    <>
      {totalSum ? (
        <p>
          {children}:{value}
        </p>
      ) : null}
    </>
  );
}
