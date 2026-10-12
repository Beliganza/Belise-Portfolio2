import Icon from "./Icon";

const emailUrl = "mailto:Ganza.Belise.Aloysie.Isingizwe@dartmouth.edu";
const linkedinUrl = "https://www.linkedin.com/in/beliseganza/";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="halo"><b /></div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-copy">
          As I continue learning and growing, I'm looking for opportunities at the
          intersection of technology, business, and social impact, where I can
          contribute to projects that not only optimize performance but also uplift
          communities.
        </p>

        <div className="loc">
          <Icon name="pin" />
          Hanover, NH (Open to Relocation)
        </div>

        <div className="contact-btns">
          <a href={emailUrl}><Icon name="mail" size={20} />Email</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={20} />LinkedIn
          </a>
        </div>

        <p className="quote">
          "And the best news of all is that it is never too late to become the person you've always wanted to be." — Cleo Wade
        </p>
      </div>
    </section>
  );
}
