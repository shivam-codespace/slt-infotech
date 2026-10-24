// PLACEHOLDER: replace with real client names (with their permission).
const CLIENTS = ["Nova Health", "Ridgeline Analytics", "Loopwave", "Brightfield Co", "Cedar & Vine"];

// Each half of the track must be wider than the viewport for a seamless loop.
const HALF = [...CLIENTS, ...CLIENTS];

export default function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-label="Clients">
      <div className="container">
        <p className="logo-marquee-label">Trusted by product and operations teams at</p>
        <div className="logo-marquee-viewport">
          <ul className="sr-only">
            {CLIENTS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <div className="logo-track" aria-hidden="true">
            {[...HALF, ...HALF].map((name, i) => (
              <span className="logo-chip" key={`${name}-${i}`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
