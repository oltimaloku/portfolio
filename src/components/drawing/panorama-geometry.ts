/**
 * Vancouver and Rome on one ground line. Vancouver's ridge and towers are traced
 * from a photo (vancouver-data.ts); its landmarks and all of Rome are drawn here.
 * The two cities are joined by a great-circle arc labelled with the real distance.
 *
 * Every stroke carries an x position so the drawing can plot west to east.
 */
import { RIDGE, TOWERS } from "./vancouver-data";

export type Weight = "structure" | "detail" | "fine" | "faint";

export interface PStroke {
  d: string;
  weight: Weight;
  /** Left edge, used to stagger the plot from west to east. */
  x: number;
  fill?: boolean;
  dashed?: boolean;
}

export interface PLabel {
  x: number;
  y: number;
  text: string;
  size: "sm" | "md" | "lg";
  anchor?: "start" | "middle" | "end";
}

export const W = 2400;
export const BASE = 400;
export const VIEWBOX = "0 20 2400 480";

const f = (n: number) => Math.round(n * 10) / 10;

/* ----------------------------------------------------------------------------
   Vancouver
   ------------------------------------------------------------------------- */

function ridge(): string {
  return "M " + RIDGE.map(([x, y]) => `${x} ${y}`).join(" L ");
}

/** Towers as one stepped silhouette, plus separators and window bands. */
function towers(): { outline: string; separators: string; windows: string; x: number } {
  const ts = [...TOWERS].sort((a, b) => a[0] - b[0]);
  let outline = `M ${f(ts[0][0])} ${BASE}`;
  let separators = "";
  let windows = "";
  let end = ts[0][0];
  ts.forEach(([x0, w, h], i) => {
    const x = Math.max(x0, end);
    const x1 = x0 + w;
    if (x1 <= x) return;
    if (x > end + 0.5) outline += ` V ${BASE - 8} H ${f(x)}`;
    outline += ` V ${f(BASE - h)} H ${f(x1)}`;
    const next = ts[i + 1];
    if (next) {
      const lower = Math.min(h, next[2]);
      separators += `M ${f(x1)} ${f(BASE - lower)} V ${BASE} `;
    }
    if (h > 60 && x1 - x > 7) {
      for (let y = BASE - h + 8; y < BASE - 6; y += 9) windows += `M ${f(x + 2)} ${f(y)} H ${f(x1 - 2)} `;
    }
    end = x1;
  });
  outline += ` V ${BASE}`;
  return { outline, separators: separators.trim(), windows: windows.trim(), x: ts[0][0] };
}

function quadY(y0: number, yc: number, y1: number, t: number) {
  return (1 - t) ** 2 * y0 + 2 * t * (1 - t) * yc + t * t * y1;
}

function lionsGate(): PStroke[] {
  const deck = BASE - 30;
  const t1 = 72;
  const t2 = 184;
  const top = BASE - 98;
  const tower = (x: number) =>
    `M ${x - 4} ${BASE} V ${top} M ${x + 4} ${BASE} V ${top} M ${x - 4} ${top} H ${x + 4} M ${x - 4} ${BASE - 62} H ${x + 4} M ${x - 4} ${BASE - 86} H ${x + 4}`;
  // main span cable as a quadratic: x is linear in t, so suspenders can be computed exactly
  const sag = BASE - 8;
  let suspenders = "";
  for (let x = t1 + 8; x < t2; x += 8) {
    const t = (x - t1) / (t2 - t1);
    suspenders += `M ${x} ${f(quadY(top, sag, top, t))} V ${deck} `;
  }
  return [
    { d: `M 8 ${deck} H 252 M 8 ${deck + 4} H 252`, weight: "structure", x: 8 },
    { d: `${tower(t1)} ${tower(t2)}`, weight: "detail", x: t1 },
    {
      d: `M 8 ${deck - 3} Q 40 ${BASE - 70} ${t1} ${top} Q ${(t1 + t2) / 2} ${sag} ${t2} ${top} Q 220 ${BASE - 70} 252 ${deck - 3}`,
      weight: "detail",
      x: 8,
    },
    { d: suspenders.trim(), weight: "fine", x: t1 },
  ];
}

/** Stanley Park: a canopy of scalloped crowns at the bridge's south end. */
function trees(x0: number, x1: number, h: number): string {
  let d = `M ${x0} ${BASE}`;
  let x = x0;
  let i = 0;
  while (x < x1) {
    const r = 7 + ((i * 7) % 5);
    const y = BASE - h + ((i * 13) % 9);
    d += ` L ${f(x)} ${f(y + r)} A ${r} ${r} 0 0 1 ${f(x + 2 * r)} ${f(y + r)}`;
    x += 2 * r - 3;
    i++;
  }
  return d + ` V ${BASE} Z`;
}

function harbourCentre(cx: number): string {
  const top = BASE - 158;
  return [
    `M ${cx - 6} ${BASE} V ${top} H ${cx + 6} V ${BASE}`,
    `M ${cx - 17} ${top} L ${cx - 12} ${top - 10} H ${cx + 12} L ${cx + 17} ${top} Z`,
    `M ${cx - 17} ${top} H ${cx + 17}`,
    `M ${cx} ${top - 10} V ${top - 32}`,
  ].join(" ");
}

function canadaPlace(x0: number): string {
  let d = `M ${x0 - 8} ${BASE} V ${BASE - 8} H ${x0 + 108} V ${BASE} `;
  for (let i = 0; i < 5; i++) {
    const x = x0 + 10 + i * 22;
    d += `M ${x - 11} ${BASE - 8} Q ${x - 3} ${BASE - 20} ${x} ${BASE - 42} Q ${x + 3} ${BASE - 20} ${x + 11} ${BASE - 8} `;
  }
  return d.trim();
}

function bcPlace(x0: number, x1: number): { shell: string; masts: string } {
  const roof = BASE - 26;
  const apex = BASE - 46;
  const mid = (x0 + x1) / 2;
  let masts = "";
  const n = 8;
  for (let i = 0; i < n; i++) {
    const x = x0 + 8 + (i * (x1 - x0 - 16)) / (n - 1);
    const t = (x - x0) / (x1 - x0);
    const y = quadY(roof, apex - 20, roof, t);
    masts += `M ${f(x)} ${f(y)} V ${BASE - 64} L ${f(x + (mid - x) * 0.25)} ${f(y - 4)} `;
  }
  return {
    shell: `M ${x0} ${BASE} V ${roof} Q ${mid} ${apex - 20} ${x1} ${roof} V ${BASE} Z`,
    masts: masts.trim(),
  };
}

function water(x0: number, x1: number): string {
  let d = "";
  for (let row = 0; row < 3; row++) {
    const y = BASE + 9 + row * 8;
    for (let x = x0 + row * 11; x < x1; x += 34) d += `M ${x} ${y} h ${12 - row * 3} `;
  }
  return d.trim();
}

/* ----------------------------------------------------------------------------
   Roma
   ------------------------------------------------------------------------- */

function stonePine(x: number, h: number, w: number): { crown: string; trunk: string } {
  const cy = BASE - h;
  let crown = `M ${f(x - w / 2)} ${f(cy + 8)}`;
  const bumps = 5;
  for (let i = 0; i < bumps; i++) {
    const a = x - w / 2 + (i * w) / bumps;
    const b = a + w / bumps;
    crown += ` Q ${f((a + b) / 2)} ${f(cy - 9 - (i % 2) * 3)} ${f(b)} ${f(cy + (i === bumps - 1 ? 8 : 0))}`;
  }
  crown += ` Q ${f(x)} ${f(cy + 16)} ${f(x - w / 2)} ${f(cy + 8)} Z`;
  const trunk = `M ${f(x - 2)} ${BASE} Q ${f(x - 6)} ${f(BASE - h * 0.5)} ${f(x - 1)} ${f(cy + 11)} M ${f(x + 2)} ${BASE} Q ${f(x - 2)} ${f(BASE - h * 0.5)} ${f(x + 3)} ${f(cy + 11)}`;
  return { crown, trunk };
}

function cypress(x: number, h: number): string {
  return `M ${x - 5} ${BASE} Q ${x - 9} ${f(BASE - h * 0.55)} ${x} ${BASE - h} Q ${x + 9} ${f(BASE - h * 0.55)} ${x + 5} ${BASE} Z`;
}

function castelSantAngelo(x0: number): { body: string; detail: string } {
  const x1 = x0 + 150;
  const cx = (x0 + x1) / 2;
  let teeth = "";
  for (let x = x0 + 24; x < x1 - 24; x += 8) teeth += `M ${x} ${BASE - 78} v -4 h 4 v 4 `;
  return {
    body: [
      `M ${x0} ${BASE} L ${x0 + 8} ${BASE - 30} H ${x1 - 8} L ${x1} ${BASE} Z`,
      `M ${x0 + 22} ${BASE - 30} V ${BASE - 78} H ${x1 - 22} V ${BASE - 30} Z`,
      `M ${cx - 24} ${BASE - 82} V ${BASE - 104} H ${cx + 24} V ${BASE - 82} Z`,
    ].join(" "),
    detail: [
      teeth.trim(),
      `M ${x0 + 22} ${BASE - 46} H ${x1 - 22}`,
      `M ${cx} ${BASE - 104} V ${BASE - 124} M ${cx - 7} ${BASE - 118} L ${cx} ${BASE - 113} L ${cx + 7} ${BASE - 118}`,
      `M ${cx - 16} ${BASE - 96} h 6 v 8 h -6 Z M ${cx + 10} ${BASE - 96} h 6 v 8 h -6 Z`,
    ].join(" "),
  };
}

function sanPietro(cx: number): { dome: string; ribs: string; facade: string; columns: string } {
  const drumTop = BASE - 132;
  const drumBot = BASE - 84;
  const lantern = BASE - 220;
  const dome =
    `M ${cx - 52} ${drumTop} C ${cx - 52} ${BASE - 192} ${cx - 26} ${BASE - 214} ${cx - 9} ${lantern}` +
    ` L ${cx + 9} ${lantern} C ${cx + 26} ${BASE - 214} ${cx + 52} ${BASE - 192} ${cx + 52} ${drumTop} Z` +
    ` M ${cx - 56} ${drumBot} V ${drumTop} H ${cx + 56} V ${drumBot} Z` +
    ` M ${cx - 9} ${lantern} V ${lantern - 22} H ${cx + 9} V ${lantern} Z` +
    ` M ${cx - 11} ${lantern - 22} Q ${cx} ${lantern - 34} ${cx + 11} ${lantern - 22} Z`;
  let ribs = `M ${cx} ${lantern - 32} V ${lantern - 46} M ${cx - 4} ${lantern - 41} H ${cx + 4} `;
  for (const k of [-0.62, -0.25, 0.25, 0.62]) {
    ribs += `M ${f(cx + k * 52)} ${drumTop} Q ${f(cx + k * 46)} ${BASE - 196} ${f(cx + k * 9)} ${lantern} `;
  }
  for (let i = -5; i <= 5; i += 2) ribs += `M ${cx + i * 9} ${drumBot} V ${drumTop} `;
  // minor domes
  for (const s of [-1, 1]) {
    const mx = cx + s * 88;
    ribs += `M ${mx - 14} ${BASE - 86} Q ${mx} ${BASE - 118} ${mx + 14} ${BASE - 86} M ${mx} ${BASE - 107} V ${BASE - 116} `;
  }
  const facade =
    `M ${cx - 112} ${BASE} V ${BASE - 70} H ${cx + 112} V ${BASE} Z` +
    ` M ${cx - 104} ${BASE - 70} V ${BASE - 84} H ${cx + 104} V ${BASE - 70}` +
    ` M ${cx - 34} ${BASE - 84} L ${cx} ${BASE - 100} L ${cx + 34} ${BASE - 84}`;
  let columns = "";
  for (let i = -4; i <= 4; i++) columns += `M ${cx + i * 24 - 2} ${BASE - 4} V ${BASE - 66} M ${cx + i * 24 + 2} ${BASE - 4} V ${BASE - 66} `;
  columns += `M ${cx - 112} ${BASE - 66} H ${cx + 112} M ${cx - 10} ${BASE} V ${BASE - 26} A 10 10 0 0 1 ${cx + 10} ${BASE - 26} V ${BASE}`;
  return { dome, ribs: ribs.trim(), facade, columns: columns.trim() };
}

function obelisk(x: number): string {
  return [
    `M ${x - 10} ${BASE} V ${BASE - 14} H ${x + 10} V ${BASE} Z`,
    `M ${x - 6} ${BASE - 14} L ${x - 3} ${BASE - 96} L ${x} ${BASE - 104} L ${x + 3} ${BASE - 96} L ${x + 6} ${BASE - 14} Z`,
    `M ${x} ${BASE - 104} V ${BASE - 112} M ${x - 3} ${BASE - 109} H ${x + 3}`,
  ].join(" ");
}

function pantheon(cx: number): { body: string; detail: string } {
  const body =
    `M ${cx - 58} ${BASE} V ${BASE - 58} H ${cx + 58} V ${BASE} Z` +
    ` M ${cx - 58} ${BASE - 58} Q ${cx} ${BASE - 112} ${cx + 58} ${BASE - 58}` +
    ` M ${cx - 42} ${BASE} V ${BASE - 40} H ${cx + 42} V ${BASE} Z` +
    ` M ${cx - 46} ${BASE - 40} V ${BASE - 47} H ${cx + 46} V ${BASE - 40} Z` +
    ` M ${cx - 46} ${BASE - 47} L ${cx} ${BASE - 64} L ${cx + 46} ${BASE - 47} Z`;
  let detail = `M ${cx - 52} ${BASE - 66} h 10 M ${cx + 42} ${BASE - 66} h 10 M ${cx - 46} ${BASE - 72} h 8 M ${cx + 38} ${BASE - 72} h 8 `;
  for (let i = 0; i < 8; i++) {
    const x = cx - 36 + i * (72 / 7);
    detail += `M ${f(x)} ${BASE} V ${BASE - 38} `;
  }
  return { body, detail: detail.trim() };
}

function trajanColumn(x: number): string {
  let d = `M ${x - 10} ${BASE} V ${BASE - 16} H ${x + 10} V ${BASE} Z M ${x - 6} ${BASE - 16} V ${BASE - 112} H ${x + 6} V ${BASE - 16} M ${x - 8} ${BASE - 112} h 16 v -4 h -16 Z M ${x} ${BASE - 116} V ${BASE - 132} M ${x - 3} ${BASE - 125} H ${x + 3} `;
  for (let y = BASE - 22; y > BASE - 108; y -= 9) d += `M ${x - 6} ${y} L ${x + 6} ${y - 6} `;
  return d.trim();
}

function colosseo(x0: number, x1: number): { shell: string; arches: string } {
  const levels = [0, 36, 72, 108, 138];
  // The ruined outer ring: on the east side the wall breaks away tier by tier
  const ruinStart = x1 - 80;
  const steps = [138, 108, 108, 72, 72, 40, 40];
  const profile = (x: number) => {
    if (x < ruinStart) return BASE - 138;
    const i = Math.min(steps.length - 1, Math.floor(((x - ruinStart) / (x1 - ruinStart)) * steps.length));
    return BASE - steps[i] + ((x * 7) % 5);
  };
  let shell = `M ${x0} ${BASE} V ${BASE - 138} H ${ruinStart}`;
  for (let x = ruinStart; x <= x1; x += 6) shell += ` L ${x} ${f(profile(x))}`;
  shell += ` V ${BASE} Z`;
  let arches = "";
  for (const y of levels.slice(1, 4)) {
    const yy = BASE - y;
    let end = x0;
    for (let x = x0; x <= x1; x += 2) if (profile(x) < yy - 2) end = x;
    arches += `M ${x0} ${yy} H ${end} M ${x0} ${yy + 3} H ${end} `;
  }
  const bay = 22;
  for (let li = 0; li < 3; li++) {
    const bottom = BASE - levels[li];
    const top = BASE - levels[li + 1];
    for (let x = x0 + bay / 2; x < x1 - 4; x += bay) {
      if (profile(x + 8) > top + 2) continue;
      const r = 6.5;
      const spring = top + 9 + r;
      arches += `M ${f(x - r)} ${f(bottom - (li === 0 ? 0 : 4))} V ${f(spring)} A ${r} ${r} 0 0 1 ${f(x + r)} ${f(spring)} V ${f(bottom - (li === 0 ? 0 : 4))} `;
      if (x + bay / 2 < x1 - 8) arches += `M ${f(x + bay / 2)} ${f(bottom - 2)} V ${f(top + 4)} `;
    }
  }
  for (let x = x0 + bay; x < ruinStart; x += bay * 2) arches += `M ${x - 3} ${BASE - 128} h 6 v 6 h -6 Z `;
  return { shell, arches: arches.trim() };
}

function earth(x0: number, x1: number): string {
  let d = "";
  for (let x = x0; x < x1; x += 9) d += `M ${x} ${BASE + 14} L ${x + 10} ${BASE + 4} `;
  return d.trim();
}

/* ----------------------------------------------------------------------------
   Assembly
   ------------------------------------------------------------------------- */

export const VANCOUVER_EDGE = 1090;
export const ROMA_EDGE = 1290;
const HC = 610;
const SP = 1690;

export function buildPanorama() {
  const t = towers();
  const bc = bcPlace(930, 1048);
  const castel = castelSantAngelo(1330);
  const pietro = sanPietro(SP);
  const pan = pantheon(1990);
  const colo = colosseo(2110, 2300);
  const pines = [stonePine(1308, 66, 74), stonePine(1520, 52, 60), stonePine(2362, 58, 56)];

  const strokes: PStroke[] = [
    // Vancouver
    { d: ridge(), weight: "detail", x: 0 },
    { d: water(0, VANCOUVER_EDGE + 30), weight: "faint", x: 0 },
    { d: `M 0 ${BASE} H ${VANCOUVER_EDGE + 40}`, weight: "structure", x: 0 },
    { d: trees(196, 320, 34), weight: "detail", x: 196, fill: true },
    ...lionsGate(),
    { d: t.outline, weight: "structure", x: t.x, fill: true },
    { d: t.separators, weight: "fine", x: t.x },
    { d: t.windows, weight: "faint", x: t.x },
    { d: harbourCentre(HC), weight: "structure", x: HC - 17, fill: true },
    { d: canadaPlace(700), weight: "detail", x: 692, fill: true },
    { d: bc.shell, weight: "structure", x: 930, fill: true },
    { d: bc.masts, weight: "fine", x: 930 },

    // The crossing: a great-circle arc from Harbour Centre to San Pietro
    {
      d: `M ${HC} ${BASE - 192} Q ${(HC + SP) / 2} ${-60} ${SP} ${BASE - 266}`,
      weight: "faint",
      x: VANCOUVER_EDGE - 120,
      dashed: true,
    },
    { d: `M ${VANCOUVER_EDGE + 40} ${BASE} H ${ROMA_EDGE - 30}`, weight: "faint", x: VANCOUVER_EDGE, dashed: true },

    // Roma
    { d: `M ${ROMA_EDGE - 30} ${BASE} H ${W}`, weight: "structure", x: ROMA_EDGE },
    { d: earth(ROMA_EDGE - 20, W), weight: "faint", x: ROMA_EDGE },
    ...pines.flatMap((p, i) => [
      { d: p.trunk, weight: "fine" as const, x: [1270, 1490, 2334][i] },
      { d: p.crown, weight: "detail" as const, x: [1270, 1490, 2334][i], fill: true },
    ]),
    { d: castel.body, weight: "structure", x: 1330, fill: true },
    { d: castel.detail, weight: "fine", x: 1340 },
    { d: pietro.dome, weight: "structure", x: SP - 56, fill: true },
    { d: pietro.ribs, weight: "fine", x: SP - 50 },
    { d: pietro.facade, weight: "structure", x: SP - 112, fill: true },
    { d: pietro.columns, weight: "fine", x: SP - 110 },
    { d: obelisk(1855), weight: "detail", x: 1845, fill: true },
    { d: pan.body, weight: "structure", x: 1932, fill: true },
    { d: pan.detail, weight: "fine", x: 1940 },
    { d: trajanColumn(2080), weight: "detail", x: 2070, fill: true },
    { d: colo.shell, weight: "structure", x: 2110, fill: true },
    { d: colo.arches, weight: "fine", x: 2114 },
    { d: cypress(2318, 74), weight: "detail", x: 2312, fill: true },
  ];

  const labels: PLabel[] = [
    { x: 130, y: BASE + 50, text: "Lions Gate", size: "sm" },
    { x: HC, y: BASE + 50, text: "Harbour Centre", size: "sm" },
    { x: 750, y: BASE + 50, text: "Canada Place", size: "sm" },
    { x: 989, y: BASE + 50, text: "BC Place", size: "sm" },
    { x: 1405, y: BASE + 50, text: "Castel Sant’Angelo", size: "sm" },
    { x: SP, y: BASE + 50, text: "San Pietro", size: "sm" },
    { x: 1855, y: BASE + 50, text: "Obelisco", size: "sm" },
    { x: 1990, y: BASE + 50, text: "Pantheon", size: "sm" },
    { x: 2080, y: BASE + 50, text: "Traiano", size: "sm" },
    { x: 2205, y: BASE + 50, text: "Colosseo", size: "sm" },
    { x: 8, y: BASE + 82, text: "VANCOUVER", size: "lg", anchor: "start" },
    { x: 8, y: BASE + 100, text: "49°17′ N · 123°07′ W", size: "sm", anchor: "start" },
    { x: W - 4, y: BASE + 82, text: "ROMA", size: "lg", anchor: "end" },
    { x: W - 4, y: BASE + 100, text: "41°54′ N · 12°30′ E", size: "sm", anchor: "end" },
    { x: (HC + SP) / 2, y: 72, text: "8,989 km", size: "md" },
    { x: (HC + SP) / 2, y: 90, text: "non in scala", size: "sm" },
  ];

  return { strokes, labels };
}
