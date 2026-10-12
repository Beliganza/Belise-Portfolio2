import Icon from "./Icon";
import Reveal from "./Reveal";

const emailUrl = "mailto:Ganza.Belise.Aloysie.Isingizwe@dartmouth.edu";
const linkedinUrl = "https://www.linkedin.com/in/beliseganza/";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="halo"><b /></div>
        <h2 className="section-title">Get In Touch</h2>
        <Reveal as="p" className="contact-copy">
          As I continue learning and growing, I'm looking for opportunities at the
          intersection of technology, business, and social impact, where I can
          contribute to projects that not only optimize performance but also uplift
          communities.
        </Reveal>

        <Reveal className="loc-row" delay={100}>
        <div className="loc">
          <Icon name="pin" />
          Hanover, NH (Open to Relocation)
        </div>
        </Reveal>

        <Reveal className="contact-btns" delay={200}>
          <a href={emailUrl}><Icon name="mail" size={20} />Email</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={20} />LinkedIn
          </a>
        </Reveal>

        <Reveal as="p" className="quote" delay={300}>
          "And the best news of all is that it is never too late to become the person you've always wanted to be." — Cleo Wade
        </Reveal>
      </div>
    </section>
  );
}
