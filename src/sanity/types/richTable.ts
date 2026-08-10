/**
 * =========================================================
 * RICH TABLE FRONTEND TYPES
 * =========================================================
 *
 * Frontend rendering types for the Sanity rich table block.
 *
 * These describe the serialized `richTableBlock` returned
 * by Sanity and intentionally remain separate from the
 * generated Sanity types.
 * =========================================================
 */

import type { PortableTextBlock } from "@portabletext/types";

/**
 * Portable Text content stored inside a rich table cell.
 */
export type RichTableCell = {
  _key: string;
  _type: "richTableCell";
  content?: PortableTextBlock[];
};

/**
 * A row in the rich table.
 */
export type RichTableRow = {
  _key: string;
  _type: "row";
  title?: string | null;
  cells?: RichTableCell[];
};

/**
 * Optional column metadata supplied by the plugin.
 */
export type RichTableColumnHeader = {
  _key: string;
  _type: "columnHeader";
  cellIndex: number;
  title?: string | null;
  width?: number | null;
};

/**
 * The Portable Text `richTableBlock` stored by Sanity.
 */
export type RichTableBlock = {
  _key: string;
  _type: "richTableBlock";

  columnHeaders?: RichTableColumnHeader[];

  rows: RichTableRow[];

  hasColumnTitles?: boolean | null;
  hasRowTitles?: boolean | null;
  rowTitleWidth?: number | null;
};
