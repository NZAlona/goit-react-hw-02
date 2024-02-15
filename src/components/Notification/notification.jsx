export default function Notification({ text, sum }) {
  return sum === 0 ? <p> {text}</p> : null;
}
