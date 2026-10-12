import { useState } from "react";
import Icon from "./Icon";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const shown = project.tags.slice(0, 3);
  const extra = project.tags.length - shown.length;

  return (
    <article className={`card${open ? " open" : ""}`}>
      <button
        className="card-head"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="thumb">
          {project.image
            ? <img src={project.image} alt="" />
            : project.title.split(" ").slice(0, 2).join(" ")}
        </div>
        <div className="card-meta">
          <h3>{project.title}</h3>
          <p className="card-cat">{project.subtitle}</p>
          <div className="chips">
            {shown.map((t) => <span className="chip" key={t}>{t}</span>)}
            {extra > 0 && <span className="chip more">+{extra}</span>}
          </div>
        </div>
        <span className="chev"><Icon name="chevron" size={24} /></span>
      </button>

      <div className="card-body">
        <div className="card-body-inner">
          <div className="chips chips-full">
            {project.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
          </div>

          {project.image && (
            <a className="card-figure" href={project.image} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.title} loading="lazy" />
            </a>
          )}

          <Block label="Overview">{project.overview}</Block>
          <Block label="Challenge" icon="target">{project.challenge}</Block>
          {project.opportunity && <Block label="Opportunity" icon="bulb">{project.opportunity}</Block>}
          {project.approach && <Block label="Approach" icon="bolt">{project.approach}</Block>}
          {project.impact && <Block label="Impact" icon="trend">{project.impact}</Block>}

          {project.teamSize && (
            <div className="team">
              <div className="blk-label muted">Team Size</div>
              <p>{project.teamSize}</p>
            </div>
          )}

          {project.url && (
            <a className="btn-code" href={project.url} target="_blank" rel="noreferrer">
              <Icon name={project.linkType === "code" ? "github" : "external"} />
              {LINK_LABELS[project.linkType] ?? "View Code"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const LINK_LABELS = {
  site: "Visit Website",
  prototype: "View Prototype",
  paper: "Read Paper",
  poster: "View Poster",
};

function Block({ label, icon, children }) {
  return (
    <div className="blk">
      <div className="blk-label">
        {icon && <Icon name={icon} />}
        {label}
      </div>
      <p>{children}</p>
    </div>
  );
}
