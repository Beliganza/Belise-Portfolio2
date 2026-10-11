// Swap `heroImage` for any photo you like (a file in /public or an image URL)
const heroImage = "headshot.jpeg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="hero-eyebrow">Muraho — Welcome</p>
        <h1 className="hero-title">
          Data, technology<br />&amp; <em>human impact</em>
        </h1>
        <p className="hero-description">
          I'm Ganza Belise, originally from Rwanda and a recent Dartmouth graduate
          with a <em>BA in Mathematical Data Science</em> and a minor in Computer
          Science. I enjoy working at the intersection of technology and human
          experience. Outside of work, I like creating spaces for connection —
          whether by serving on boards or organizing events — to help others, and
          myself, find a home away from home.
        </p>
        <div className="hero-actions">
          <a href="#work" className="hero-cta">View My Work →</a>
          <a href="#contact" className="hero-link">Get in touch</a>
        </div>
      </div>
      <div className="hero-visual">
        <figure className="hero-frame">
          <img src={heroImage} alt="Belise Ganza" />
          <figcaption className="hero-image-caption">Rwanda → Hanover, NH</figcaption>
        </figure>
      </div>
    </section>
  );
}
