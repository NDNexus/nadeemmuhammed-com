import "./ProcessStagePanel.css";

import type { ProcessStagePanelProps } from "./ProcessStagePanel.types";

/**
 * Displays the content for a single process stage.
 */
export function ProcessStagePanel({ stage }: ProcessStagePanelProps) {
  return (
    <article className="process-stage-panel">
      <header className="process-stage-panel__header">
        <p className="text-overline">Stage Overview</p>

        <p className="process-stage-panel__overview">{stage.overview}</p>
      </header>

      <section className="process-stage-panel__steps-section">
        <header className="process-stage-panel__section-header">
          <p className="text-overline">What Happens In This Stage</p>
        </header>

        <div className="process-stage-panel__step-grid">
          {stage.steps.map((step) => (
            <article key={step.title} className="process-stage-panel__step">
              {step.icon && <div className="process-stage-panel__step-icon">{step.icon}</div>}

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-stage-panel__outcome">
        <header className="process-stage-panel__section-header">
          <p className="text-overline">{stage.outcome.title}</p>
        </header>

        <div className="process-stage-panel__outcome-content">
          <p>{stage.outcome.description}</p>

          {stage.illustration && (
            <div className="process-stage-panel__illustration">{stage.illustration}</div>
          )}
        </div>
      </section>
    </article>
  );
}
