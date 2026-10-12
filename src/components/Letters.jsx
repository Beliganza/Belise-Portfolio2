// Splits text into per-letter spans so CSS can drop them in one after another.
// `start` offsets the stagger so several <Letters> in a row read as one line.
export default function Letters({ text, start = 0 }) {
  let i = start;
  return (
    <span aria-hidden="true">
      {text.split(/(\s+)/).map((tok, w) =>
        /^\s+$/.test(tok) ? tok : (
          <span className="word" key={w}>
            {[...tok].map((c) => (
              <span className="ch" style={{ "--i": i++ }} key={i}>{c}</span>
            ))}
          </span>
        )
      )}
    </span>
  );
}
