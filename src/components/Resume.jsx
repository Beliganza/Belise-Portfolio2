import Icon from "./Icon";

// Swap `resumeUrl` for your real file (e.g. "/Ganza_Belise_Resume.pdf")
const resumeUrl = "resume.pdf";

export default function Resume() {
  return (
    <section className="section resume" id="resume">
      <div className="wrap">
        <h2 className="section-title">Resume</h2>
        <p className="section-sub">View my professional experience and qualifications</p>
        <a className="btn-primary" href={resumeUrl} download>
          <Icon name="download" size={20} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
