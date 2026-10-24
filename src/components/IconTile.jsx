// Soft gradient tile holding a line icon — the site's standard icon treatment.
export default function IconTile({ icon: Icon, size = "md", className = "" }) {
  return (
    <span className={`icon-tile icon-tile-${size} ${className}`.trim()} aria-hidden="true">
      <Icon strokeWidth={1.75} />
    </span>
  );
}
