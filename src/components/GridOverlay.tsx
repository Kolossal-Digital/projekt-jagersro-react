const columns = Array.from({ length: 12 }, (_, index) => index + 1);

/** Non-interactive development overlay showing the active page grid. */
export function GridOverlay() {
  return (
    <div aria-hidden="true" className="grid-overlay">
      {columns.map((column) => (
        <span className="grid-overlay__column" key={column} />
      ))}
    </div>
  );
}
