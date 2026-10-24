// Decorative background layers: soft aurora glow, faint grid, and grain.
export default function Backdrop({ aurora = true, grid = true, grain = true }) {
  return (
    <>
      {aurora && (
        <div className="aurora" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
      {grid && <div className="grid-lines" aria-hidden="true" />}
      {grain && <div className="grain" aria-hidden="true" />}
    </>
  );
}
