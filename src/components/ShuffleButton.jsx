/**
 * ShuffleButton – Löst eine neue zufällige Show aus.
 *
 * Props:
 *   - onClick: Callback wenn der Button geklickt wird
 */
function ShuffleButton({ onClick }) {
  return (
    <button className="shuffle-btn" onClick={onClick}>
      Random Lucky Show
    </button>
  );
}

export default ShuffleButton;
