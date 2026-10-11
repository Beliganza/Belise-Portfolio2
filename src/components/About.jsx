// Photo lives in /public
const photoUrl = "about.jpg";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <img className="about-photo" src={photoUrl} alt="Portrait of Belise Ganza" />
          <div className="about-copy">
            <p>
              A recent Dartmouth College graduate with a BA in Mathematical Data
              Science and a minor in Computer Science, I'm passionate about using
              data-driven technology to solve real-world challenges — particularly
              those in global health, healthcare equity, and community development.
            </p>
            <p>
              Through academic and professional experiences, I've developed a strong
              foundation in data science, software engineering, and quantitative
              research, with a focus on building scalable, impactful solutions. My
              work has been shaped by a belief in the power of data and technology to
              create tangible, positive change.
            </p>
            <p>
              Alongside my technical focus, I have a deep interest in business
              strategy, entrepreneurship, and work that supports and strengthens
              communities. I enjoy collaborating with others and learning from diverse
              perspectives to create practical, well-informed solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
