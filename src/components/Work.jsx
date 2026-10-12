import { useState } from "react";
import { projects, filters } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Work() {
  const [active, setActive] = useState("coding");
  const visible = projects.filter((p) => p.category === active);

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <h2 className="section-title">Work</h2>

        <Reveal className="filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter${active === f.id ? " active" : ""}`}
              onClick={() => setActive(f.id)}
            >
              <Icon name={f.icon} size={17} />
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="cards">
          {visible.length > 0
            ? visible.map((p) => <ProjectCard key={p.title} project={p} />)
            : <p className="empty">Projects coming soon.</p>}
        </div>
      </div>
    </section>
  );
}
