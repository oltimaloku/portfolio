/**
 * A longitudinal section through the Pantheon, generated from its real
 * proportions. 1 m = 8 drawing units. The rotunda is 43.30 m across and
 * 43.30 m from floor to oculus, so a perfect sphere fits inside it.
 *
 * Output is a flat list of strokes, each tagged with a layer and timing so
 * the drawing can be plotted in the order an architect would draw it:
 * construction lines, structure, detail, poché, then annotation.
 */

export type Layer = "construction" | "structure" | "detail" | "fine" | "hidden";

export interface Stroke {
  d: string;
  layer: Layer;
  delay: number;
  dur: number;
  /** Closed shapes that should fill white to mask what's behind them. */
  mask?: boolean;
}

export interface Label {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "middle" | "end";
  rotate?: number;
  delay: number;
  size?: "sm" | "md";
}

export const S = 8; // units per metre
export const FLOOR = 690;
export const CX = 560;
export const R = 21.65 * S;
export const VIEWBOX = { x: 86, y: 262, w: 760, h: 512 };

const WALL = 6 * S;
const xL = CX - R;
const xR = CX + R;
const xLo = xL - WALL;
const xRo = xR + WALL;
const yS = FLOOR - R; // springing line = centre of the sphere
const OCULUS = 4.46 * S;
const yOcIn = yS - Math.sqrt(R * R - OCULUS * OCULUS);
const yOcOut = yOcIn - 1.5 * S;
const yDrum = FLOOR - 30 * S;
const STEP = 7;
const STEPS = 6;
const DOOR_TOP = 610;
const BLOCK_X = xLo - 8 * S;
const PORTICO_X = BLOCK_X - 16 * S;
const COL_TOP = FLOOR - 14.15 * S;
const CORNICE = 576;

const f = (n: number) => Math.round(n * 10) / 10;
const rad = (deg: number) => (deg * Math.PI) / 180;

// Outer dome: a circle centred on the axis passing through the oculus rim and
// the top of the step rings.
const stepTop = { x: xRo - STEP * STEPS - CX, y: yDrum - STEP * STEPS };
const yOuterC =
  (stepTop.x ** 2 + stepTop.y ** 2 - OCULUS ** 2 - yOcOut ** 2) / (2 * (stepTop.y - yOcOut));
const rOuter = Math.sqrt(OCULUS ** 2 + (yOuterC - yOcOut) ** 2);

function steps(dir: 1 | -1, up: boolean): string {
  let d = "";
  for (let i = 0; i < STEPS; i++) {
    d += up ? ` h ${-dir * STEP} v ${-STEP}` : ` v ${STEP} h ${-dir * STEP}`;
  }
  return d;
}

/** The cut through the walls and dome — outlined, then filled with hatching. */
export const poche = {
  right:
    `M ${f(xR)} ${FLOOR} L ${f(xRo)} ${FLOOR} L ${f(xRo)} ${yDrum}` +
    steps(1, true) +
    ` A ${f(rOuter)} ${f(rOuter)} 0 0 0 ${f(CX + OCULUS)} ${f(yOcOut)}` +
    ` L ${f(CX + OCULUS)} ${f(yOcIn)}` +
    ` A ${f(R)} ${f(R)} 0 0 1 ${f(xR)} ${f(yS)} Z`,
  left:
    `M ${f(xL)} ${DOOR_TOP} L ${f(xL)} ${f(yS)}` +
    ` A ${f(R)} ${f(R)} 0 0 1 ${f(CX - OCULUS)} ${f(yOcIn)}` +
    ` L ${f(CX - OCULUS)} ${f(yOcOut)}` +
    ` A ${f(rOuter)} ${f(rOuter)} 0 0 0 ${f(xLo + STEP * STEPS)} ${f(yDrum - STEP * STEPS)}` +
    steps(1, false) +
    ` L ${f(xLo)} 470 L ${f(BLOCK_X)} 470 L ${f(BLOCK_X)} ${DOOR_TOP} Z`,
};

function column(x: number, base: number, top: number, w: number): string {
  const capH = Math.min(16, (base - top) * 0.14);
  const shaftTop = top + capH + 3;
  const b = w * 0.5;
  const t = w * 0.43;
  return [
    // plinth and torus
    `M ${f(x - b * 1.5)} ${base} h ${f(b * 3)} v -3 h ${f(-b * 3)} Z`,
    `M ${f(x - b * 1.25)} ${base - 3} h ${f(b * 2.5)} v -4 h ${f(-b * 2.5)} Z`,
    // shaft with entasis taper
    `M ${f(x - b)} ${base - 7} L ${f(x - t)} ${f(shaftTop)} L ${f(x + t)} ${f(shaftTop)} L ${f(x + b)} ${base - 7}`,
    // capital and abacus
    `M ${f(x - t)} ${f(shaftTop)} L ${f(x - w * 0.8)} ${f(top + 3)} L ${f(x + w * 0.8)} ${f(top + 3)} L ${f(x + t)} ${f(shaftTop)}`,
    `M ${f(x - w * 0.92)} ${f(top + 3)} h ${f(w * 1.84)} v -3 h ${f(-w * 1.84)} Z`,
  ].join(" ");
}

function fluting(x: number, base: number, top: number, w: number): string {
  const capH = Math.min(16, (base - top) * 0.14);
  const shaftTop = top + capH + 4;
  return [-0.22, 0.22]
    .map((k) => `M ${f(x + k * w)} ${base - 8} L ${f(x + k * w * 0.9)} ${f(shaftTop)}`)
    .join(" ");
}

function acanthus(x: number, top: number, w: number): string {
  return [8, 12].map((dy) => `M ${f(x - w * 0.62)} ${top + dy} h ${f(w * 1.24)}`).join(" ");
}

/** Coffers on the far half of the dome, foreshortened. One path per ring so each ring plots in sequence. */
function cofferRings(): string[] {
  const rings: [number, number][] = [
    [12, 21],
    [24, 32],
    [35, 42],
    [45, 51],
    [54, 59],
  ];
  const n = 28;
  const half = (360 / n) * 0.36;
  return rings.map(([a1, a2]) => {
    const y1 = yS - R * Math.sin(rad(a1));
    const y2 = yS - R * Math.sin(rad(a2));
    const r1 = R * Math.cos(rad(a1));
    const r2 = R * Math.cos(rad(a2));
    let d = "";
    for (let j = 0; j < n / 2; j++) {
      const phi = (j + 0.5) * (360 / n);
      const quad = (w: number, ya: number, yb: number, ra: number, rb: number) => {
        const p = [
          [CX + ra * Math.cos(rad(phi - w)), ya],
          [CX + ra * Math.cos(rad(phi + w)), ya],
          [CX + rb * Math.cos(rad(phi + w)), yb],
          [CX + rb * Math.cos(rad(phi - w)), yb],
        ];
        return `M ${p.map(([x, y]) => `${f(x)} ${f(y)}`).join(" L ")} Z `;
      };
      d += quad(half, y1, y2, r1, r2);
      // stepped inner recess, shifted upward the way the real coffers are
      const h = y1 - y2;
      d += quad(half * 0.55, y1 - h * 0.22, y2 + h * 0.18, r1 - 2, r2 - 2);
    }
    return d.trim();
  });
}

function attic(): string {
  let d = `M ${f(xL)} ${CORNICE} H ${f(xR)} M ${f(xL)} ${CORNICE - 5} H ${f(xR)} M ${f(xL)} ${CORNICE - 9} H ${f(xR)}`;
  d += ` M ${f(xL)} ${f(yS + 5)} H ${f(xR)}`;
  const n = 14;
  for (let j = 0; j < n; j++) {
    const phi = (j + 0.5) * (180 / n);
    const x = CX + R * Math.cos(rad(phi));
    const w = 15 * Math.sin(rad(phi));
    d += ` M ${f(x - w / 2)} ${CORNICE - 16} h ${f(w)} v -22 h ${f(-w)} Z`;
  }
  return d;
}

function aedicule(phi: number): string {
  const x = CX + R * Math.cos(rad(phi));
  const s = Math.sin(rad(phi));
  const w = 34 * s;
  const top = FLOOR - 66;
  return [
    `M ${f(x - w / 2)} ${FLOOR} v -18 h ${f(w)} v 18`,
    `M ${f(x - w * 0.42)} ${FLOOR - 18} V ${top} M ${f(x + w * 0.42)} ${FLOOR - 18} V ${top}`,
    `M ${f(x - w * 0.55)} ${top} h ${f(w * 1.1)} v -4 h ${f(-w * 1.1)} Z`,
    `M ${f(x - w * 0.55)} ${top - 4} L ${f(x)} ${top - 17} L ${f(x + w * 0.55)} ${top - 4}`,
    `M ${f(x - w * 0.24)} ${FLOOR - 20} V ${top - 6 + 8} A ${f(w * 0.24)} ${f(w * 0.24)} 0 0 1 ${f(x + w * 0.24)} ${top + 2} V ${FLOOR - 20}`,
  ].join(" ");
}

function exedra(phi: number): { frame: string; columns: string } {
  const x = CX + R * Math.cos(rad(phi));
  const s = Math.sin(rad(phi));
  const w = 80 * s;
  const cw = 9 * s + 2;
  return {
    frame: `M ${f(x - w / 2)} ${FLOOR} V ${CORNICE} M ${f(x + w / 2)} ${FLOOR} V ${CORNICE} M ${f(x - w / 2 + 4)} ${FLOOR} V ${CORNICE + 4} H ${f(x + w / 2 - 4)} V ${FLOOR}`,
    columns: [-0.2, 0.2]
      .map((k) => column(x + k * w, FLOOR, CORNICE, cw))
      .join(" "),
  };
}

function apse(): string {
  const w = 40;
  const spring = 625;
  return [
    `M ${CX - w} ${FLOOR} V ${spring} A ${w} ${w} 0 0 1 ${CX + w} ${spring} V ${FLOOR}`,
    `M ${CX - w - 6} ${spring} A ${w + 6} ${w + 6} 0 0 1 ${CX + w + 6} ${spring}`,
    `M ${CX - w - 6} ${spring} h 6 M ${CX + w} ${spring} h 6`,
  ].join(" ");
}

function portico(): { columns: string; flutes: string; entablature: string; roof: string; truss: string } {
  const xs = [PORTICO_X + 16, PORTICO_X + 62, PORTICO_X + 108];
  const w = 1.48 * S;
  const ent = [COL_TOP, COL_TOP - 8, COL_TOP - 16, COL_TOP - 22];
  const ridge = COL_TOP - 22 - 7 * S;
  const front = PORTICO_X - 8;
  return {
    columns: xs.map((x) => column(x, FLOOR, COL_TOP, w)).join(" "),
    flutes: xs.map((x) => fluting(x, FLOOR, COL_TOP, w) + " " + acanthus(x, COL_TOP, w)).join(" "),
    entablature:
      ent.map((y, i) => `M ${f(front - (i === 3 ? 6 : 0))} ${f(y)} H ${f(BLOCK_X)}`).join(" ") +
      ` M ${f(front)} ${f(ent[0])} V ${f(ent[2])} M ${f(front - 6)} ${f(ent[2])} V ${f(ent[3])}`,
    roof:
      `M ${f(front)} ${f(ent[3])} V ${f(ridge)} M ${f(front - 6)} ${f(ridge)} H ${f(BLOCK_X)}` +
      ` M ${f(front - 6)} ${f(ridge)} v -5 H ${f(BLOCK_X)}` +
      ` M ${f(BLOCK_X)} ${f(ridge - 5)} V 470`,
    truss: [0, 1, 2, 3]
      .map((i) => {
        const x = front + 22 + i * 32;
        return `M ${f(x)} ${f(ent[3])} V ${f(ridge)} M ${f(x)} ${f(ent[3])} L ${f(x + 32)} ${f(ridge)}`;
      })
      .join(" "),
  };
}

function ground(): string {
  return `M 96 ${FLOOR} H 836`;
}

function foundations(): string {
  return [
    `M ${f(xRo + 10)} ${FLOOR} V ${FLOOR + 38} H ${f(xR - 8)} V ${FLOOR}`,
    `M ${f(xLo - 10)} ${FLOOR} V ${FLOOR + 38} H ${f(xL + 8)} V ${FLOOR}`,
    `M ${f(PORTICO_X - 10)} ${FLOOR} V ${FLOOR + 22} H ${f(BLOCK_X)}`,
  ].join(" ");
}

const tick = (x: number, y: number) => `M ${f(x - 4)} ${f(y + 4)} L ${f(x + 4)} ${f(y - 4)}`;

function dimensions(): string {
  const yH = FLOOR + 58;
  const xV = xRo + 42;
  const top = yS - R;
  return [
    // horizontal: inner diameter
    `M ${f(xL)} ${FLOOR + 16} V ${yH + 6} M ${f(xR)} ${FLOOR + 16} V ${yH + 6}`,
    `M ${f(xL - 8)} ${yH} H ${f(xR + 8)}`,
    tick(xL, yH),
    tick(xR, yH),
    // vertical: floor to oculus
    `M ${f(xRo + 8)} ${FLOOR} H ${f(xV + 6)} M ${f(CX + OCULUS + 8)} ${f(top)} H ${f(xV + 6)}`,
    `M ${f(xV)} ${FLOOR + 8} V ${f(top - 8)}`,
    tick(xV, FLOOR),
    tick(xV, top),
  ].join(" ");
}

function construction(): string {
  const top = yS - R;
  return [
    // the sphere
    `M ${f(CX - R)} ${f(yS)} A ${f(R)} ${f(R)} 0 1 1 ${f(CX + R)} ${f(yS)} A ${f(R)} ${f(R)} 0 1 1 ${f(CX - R)} ${f(yS)}`,
    // the cube it sits in
    `M ${f(xL)} ${f(top)} H ${f(xR)} V ${FLOOR} M ${f(xL)} ${f(top)} V ${f(yS)}`,
    // axis and springing line
    `M ${CX} ${f(top - 52)} V ${FLOOR + 30}`,
    `M ${f(xLo - 24)} ${f(yS)} H ${f(xRo + 24)}`,
  ].join(" ");
}

function centreMark(): string {
  return `M ${CX - 7} ${f(yS)} h 14 M ${CX} ${f(yS - 7)} v 14 M ${CX + 3.5} ${f(yS)} A 3.5 3.5 0 1 1 ${CX - 3.5} ${f(yS)} A 3.5 3.5 0 1 1 ${CX + 3.5} ${f(yS)}`;
}

function radius(): { line: string; x: number; y: number } {
  const a = rad(38);
  const x = CX + R * Math.cos(a);
  const y = yS - R * Math.sin(a);
  return { line: `M ${CX} ${f(yS)} L ${f(x)} ${f(y)}`, x: (CX + x) / 2, y: (yS + y) / 2 };
}

function oculusLeader(): string {
  return `M ${f(CX + OCULUS * 0.5)} ${f(yOcOut - 2)} L ${f(CX + 96)} 300 H ${f(CX + 190)}`;
}

function scaleBar(): { d: string; fills: string } {
  const x0 = 104;
  const y = FLOOR + 54;
  const seg = 5 * S;
  let fills = "";
  for (let i = 0; i < 4; i += 2) fills += `M ${x0 + i * seg} ${y} h ${seg} v 4 h ${-seg} Z `;
  return { d: `M ${x0} ${y} h ${seg * 4} v 4 h ${-seg * 4} Z M ${x0 + seg * 2} ${y} v 4`, fills: fills.trim() };
}

export function buildPantheon() {
  const p = portico();
  const rings = cofferRings();
  const ex = [exedra(45), exedra(135)];
  const r = radius();
  const bar = scaleBar();

  const strokes: Stroke[] = [
    { d: construction(), layer: "construction", delay: 0.1, dur: 2.2 },
    { d: centreMark(), layer: "structure", delay: 0.5, dur: 0.8 },
    { d: ground(), layer: "structure", delay: 0.3, dur: 1.4 },
    { d: poche.right, layer: "structure", delay: 0.7, dur: 2.2 },
    { d: poche.left, layer: "structure", delay: 0.8, dur: 2.2 },
    { d: foundations(), layer: "hidden", delay: 1.4, dur: 1.2 },
    { d: attic(), layer: "detail", delay: 1.5, dur: 1.6 },
    { d: apse(), layer: "detail", delay: 1.7, dur: 1.2 },
    ...ex.map((e, i) => ({ d: e.frame, layer: "detail" as const, delay: 1.8 + i * 0.1, dur: 1.1 })),
    ...ex.map((e, i) => ({ d: e.columns, layer: "fine" as const, delay: 2.2 + i * 0.1, dur: 1.2 })),
    ...[22.5, 67.5, 112.5, 157.5].map((phi, i) => ({
      d: aedicule(phi),
      layer: "fine" as const,
      delay: 2.0 + i * 0.12,
      dur: 1.2,
    })),
    ...rings.map((d, i) => ({ d, layer: "fine" as const, delay: 1.9 + i * 0.22, dur: 1.6 })),
    { d: p.entablature, layer: "structure", delay: 1.2, dur: 1.3 },
    { d: p.columns, layer: "detail", delay: 1.4, dur: 1.6 },
    { d: p.flutes, layer: "fine", delay: 2.4, dur: 1.0 },
    { d: p.roof, layer: "structure", delay: 1.6, dur: 1.2 },
    { d: p.truss, layer: "hidden", delay: 2.6, dur: 1.0 },
    { d: dimensions(), layer: "detail", delay: 3.0, dur: 1.0 },
    { d: r.line, layer: "detail", delay: 3.1, dur: 0.7 },
    { d: oculusLeader(), layer: "detail", delay: 3.2, dur: 0.8 },
    { d: bar.d, layer: "detail", delay: 3.0, dur: 0.8 },
  ];

  const labels: Label[] = [
    { x: CX, y: FLOOR + 52, text: "Ø 43.30", delay: 3.5 },
    { x: xRo + 36, y: (FLOOR + yS - R) / 2, text: "43.30", rotate: -90, delay: 3.6 },
    { x: r.x + 10, y: r.y - 6, text: "R 21.65", anchor: "start", delay: 3.7, size: "sm" },
    { x: CX + 192, y: 294, text: "OCULUS Ø 8.92", anchor: "end", delay: 3.8, size: "sm" },
    { x: (PORTICO_X + BLOCK_X) / 2, y: FLOOR + 36, text: "PRONAOS", delay: 3.6, size: "sm" },
    { x: 104, y: FLOOR + 72, text: "0", anchor: "start", delay: 3.6, size: "sm" },
    { x: 104 + 10 * S, y: FLOOR + 72, text: "10", delay: 3.6, size: "sm" },
    { x: 104 + 20 * S, y: FLOOR + 72, text: "20 m", delay: 3.6, size: "sm" },
  ];

  return {
    strokes,
    labels,
    poche: [poche.left, poche.right],
    scaleFills: bar.fills,
    oculus: { x: CX, y: yOcOut, r: OCULUS },
    centre: { x: CX, y: yS },
  };
}
