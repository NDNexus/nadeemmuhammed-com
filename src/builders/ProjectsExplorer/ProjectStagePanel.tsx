
import "./ProjectStagePanel.css";

import type { ProjectStagePanelProps } from "./ProjectStagePanel.types";

import Image from "next/image";

/**
 * Displays the content for a single project.
 *
 * The panel presents the project context, work performed,
 * resulting outcome, and optional live project link.
 */
export function ProjectStagePanel({ project }: ProjectStagePanelProps) {
  return (
    <article className="project-stage-panel">
      {/* Project overview */}

      <header className="project-stage-panel__header">
        <p className="text-overline">Project Overview</p>

        <p className="project-stage-panel__overview">{project.overview}</p>
      </header>

      {/* Project image */}

      <div className="project-stage-panel__media">
        <div className="project-stage-panel__image-scroll">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="project-stage-panel__image"
          />
        </div>
      </div>

      {/* Work performed */}

      <section className="project-stage-panel__work">
        <header className="project-stage-panel__section-header">
          <p className="text-overline">What I Worked On</p>
        </header>

        <div className="project-stage-panel__work-grid">
          {project.work.map((item) => (
            <article key={item.title} className="project-stage-panel__work-item">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Project outcome */}

      <section className="project-stage-panel__outcome">
        <header className="project-stage-panel__section-header">
          <p className="text-overline">Outcome</p>
        </header>

        <div className="project-stage-panel__outcome-content">
          <p className="project-stage-panel__outcome-description">{project.outcome}</p>

          {/* Live project link */}

          {project.link && (
            <a
              href={project.link.href}
              className="btn btn-primary project-stage-panel__project-link"
              target={project.link.external ? "_blank" : undefined}
              rel={project.link.external ? "noopener noreferrer" : undefined}
            >
              {project.link.label ?? "View project"}
            </a>
          )}
        </div>
      </section>
    </article>
  );
}
