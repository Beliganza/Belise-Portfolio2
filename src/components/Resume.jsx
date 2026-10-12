import Icon from "./Icon";

// Swap `resumeUrl` for your real file (e.g. "/Ganza_Belise_Resume.pdf")
const resumeUrl = "resume.pdf";

export default function Resume() {
  return (
    <section className="section resume" id="resume">
      <div className="wrap">
        <h2 className="section-title">Resume</h2>
        <p className="section-sub">View my professional experience and qualifications</p>

        {/* Inline preview; mobile browsers often can't render PDFs inline, so it's hidden there via CSS */}
        <div className="resume-preview">
          <object data={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`} type="application/pdf" aria-label="Resume preview">
            <p className="resume-fallback">
              Your browser can't preview PDFs here. <a href={resumeUrl} target="_blank" rel="noreferrer">Open the resume</a> instead.
            </p>
          </object>
        </div>

        <div className="resume-actions">
          <a className="btn-primary" href={resumeUrl} download>
            <Icon name="download" size={20} />
            Download Resume
          </a>
          <a className="btn-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
            <Icon name="external" size={20} />
            Open in New Tab
          </a>
        </div>
      </div>
    </section>
  );
}
