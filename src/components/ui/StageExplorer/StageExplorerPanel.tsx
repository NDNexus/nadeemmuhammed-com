import type { Stage } from "./StageExplorer.types";

interface StageExplorerPanelProps {
  /**
   * Currently active stage.
   */
  stage: Stage;
}

/**
 * Renders the active stage's content.
 *
 * The panel is intentionally content-agnostic and simply renders the
 * ReactNode supplied by the active stage.
 */
export function StageExplorerPanel({ stage }: StageExplorerPanelProps) {
  return (
    <section className="stage-explorer-panel" aria-labelledby={`stage-${stage.id}`}>
      <header className="stage-explorer-panel__header">
        <h3 id={`stage-${stage.id}`} className="stage-explorer-panel__title">
          {stage.title}
        </h3>

        {/* {stage.subtitle && <p className="stage-explorer-panel__subtitle">{stage.subtitle}</p>} */}
      </header>

      <div className="stage-explorer-panel__content">{stage.content}</div>
    </section>
  );
}
