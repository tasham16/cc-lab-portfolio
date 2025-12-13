const tribes = [
  {
    tribe: "Kikuyu",
    population: 8148668,
    language: "Gikuyu",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Luhya",
    population: 6823842,
    language: "Luhya (aggregate)",
    vitality: "institutional",
    digital_support: "Emerging",
  },
  {
    tribe: "Kalenjin",
    population: 6358113,
    language: "Kalenjin (aggregate)",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Luo",
    population: 5066966,
    language: "Dholuo",
    vitality: "institutional",
    digital_support: "Vital",
  },
  {
    tribe: "Kamba",
    population: 4663910,
    language: "Kamba",
    vitality: "institutional",
    digital_support: "Ascending",
  },
  {
    tribe: "Somali",
    population: 2780502,
    language: "Somali",
    vitality: "institutional",
    digital_support: "Vital",
  },
  {
    tribe: "Kisii",
    population: 2703325,
    language: "Ekegusii",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Mijikenda",
    population: 2488691,
    language: "Mijikenda (aggregate)",
    vitality: "institutional",
    digital_support: "Ascending",
  },
  {
    tribe: "Meru",
    population: 1975869,
    language: "Meru (aggregate)",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Maasai",
    population: 1189522,
    language: "Maasai",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Turkana",
    population: 1016174,
    language: "Turkana",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Teso",
    population: 417670,
    language: "Ateso",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Embu",
    population: 404801,
    language: "Kiembu",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Taita",
    population: 344415,
    language: "Taita (aggregate)",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Samburu",
    population: 333471,
    language: "Samburu",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Kuria",
    population: 313854,
    language: "Kuria",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Borana",
    population: 276236,
    language: "Borana",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Tharaka",
    population: 220015,
    language: "Kitharaka",
    vitality: "institutional",
    digital_support: "Ascending",
  },
  {
    tribe: "Mbeere",
    population: 195250,
    language: "Kiembu",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Orma",
    population: 158993,
    language: "Orma",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Suba",
    population: 157787,
    language: "Suba",
    vitality: "stable",
    digital_support: "Still",
  },
  {
    tribe: "Gabra",
    population: 141200,
    language: "Borana-Arsi-Guji Oromo",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Pokomo",
    population: 112075,
    language: "Kipfokomu",
    vitality: "institutional",
    digital_support: "Ascending",
  },
  {
    tribe: "Rendile",
    population: 96313,
    language: "Rendille",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Bajuni",
    population: 91422,
    language: "Swahili",
    vitality: "institutional",
    digital_support: "Vital",
  },
  {
    tribe: "Swahili",
    population: 56074,
    language: "Swahili",
    vitality: "institutional",
    digital_support: "Vital",
  },
  {
    tribe: "Burji",
    population: 36938,
    language: "Burji",
    vitality: "endangered",
    digital_support: "Emerging",
  },
  {
    tribe: "Njemps",
    population: 32949,
    language: "Maasai",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Sakuye",
    population: 27006,
    language: "Borana-Arsi-Guji Oromo",
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Taveta",
    population: 26590,
    language: "Taveta",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Dorobo",
    population: 23171,
    language: "Dorobo (aggregate)",
    vitality: "endangered",
    digital_support: "Emerging",
  },
  {
    tribe: "Walwana",
    population: 21774,
    language: "Kiwilwana",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Nubi",
    population: 21319,
    language: "Nubi",
    vitality: "endangered",
    digital_support: "still",
  },
  {
    tribe: "Aweer",
    population: 20103,
    language: "Aweer",
    vitality: "stable",
    digital_support: "Still",
  },
  {
    tribe: "Dasenach",
    population: 19337,
    language: "Daasanach",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Makonde",
    population: 3764,
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Wayyu",
    population: 3761,
    language: "Waata",
    vitality: "stable",
    digital_support: "Emerging",
  },
  {
    tribe: "Konso",
    population: 1299,
    language: "Konso",
    vitality: "institutional",
    digital_support: "Ascending",
  },
  {
    tribe: "El Molo",
    population: 1104,
    language: "El Molo",
    vitality: "endangered",
    digital_support: "Still",
  },
  {
    tribe: "Gosha",
    language: "Maay",
    population: 685,
    vitality: "stable",
    digital_support: "Ascending",
  },
  {
    tribe: "Dahalo",
    population: 575,
    language: "Dahalo",
    vitality: "endangered",
    digital_support: "Still",
  },
];

function vitalityScore(v) {
  switch (v) {
    case "institutional":
      return 1;
    case "stable":
      return 0.6;
    case "endangered":
      return 0.3;
    case "extinct":
      return 0.0;
    default:
      return 0.5;
  }
}

// digital support → numeric risk
function digitalScore(d) {
  switch (d) {
    case "vital":
      return 0.9;
    case "ascending":
      return 0.6;
    case "emerging":
      return 0.3;
    case "still":
      return 0;
    default:
      return 0.3;
  }
}

const HORIZON_YEARS = 120;
const POP_MIN = 1000;
const POP_MAX = 8500000; // ≈ Kikuyu top; set to your true max
const RUN_SECONDS = 30;

let VW = 0.6;
let DW = 0.25;
let PW = 0.15;

//  function normPop(P) {
//   if (!P || P <= 0) return 0;
//   const x =
//     (Math.log(P) - Math.log(POP_MIN)) / (Math.log(POP_MAX) - Math.log(POP_MIN));
//   return constrain(x, 0, 1);
// }

function calculate_risk_score(population, v, d) {
  // const v = vitalityScore(vitality.toLowerCase().trim());
  // const d = digitalScore(digital.toLowerCase().trim());
  const p = normPop(population);
  const R = VW * v + DW * (1 - d) + PW * (1 - p);

  return constrain(R, 0, 1);
}

function yearsLeft(fields) {
  const v = (fields.vitality || "").toLowerCase();
  const d = (fields.digital_support || "").toLowerCase();
  const V =
    { endangered: 0.3, stable: 0.7, institutional: 0.9, extinct: 0.0 }[v] ??
    0.5;
  const D = { still: 0.3, emerging: 0.6, ascending: 0.8, vital: 1.0 }[d] ?? 0.5;
  return HORIZON_YEARS * 0.5 * ((V + D) / 2); // baseline without pop
}

function tempo(fields) {
  let vs = vitalityScore(fields.vitality);
  let ds = digitalScore(fields.digital_support);
  let risk = 1 - (vs + ds) / 2;
  return map(risk, 0, 1, 1, 5);
}

function normPop(P) {
  const POP_MIN = 1000,
    POP_MAX = 10000000;
  const x =
    (Math.log(P) - Math.log(POP_MIN)) / (Math.log(POP_MAX) - Math.log(POP_MIN));
  return constrain(isFinite(x) ? x : 0, 0, 1); // 0..1
}
function growthRateBase(fields, population, refYrs) {
  const v = (fields.vitality || "").toLowerCase();
  const d = (fields.digital_support || "").toLowerCase();
  const p = normPop(population);

  let G = 0,
    S = 0;

  // tempered growth; scaled by pop
  if (d === "vital") G = 0.06 * (0.3 + 0.7 * p);
  else if (d === "ascending") G = 0.04 * (0.25 + 0.75 * p);

  // declines; small pops shrink more
  if (d === "emerging") S = 0.18 * (1.0 + 0.5 * (1 - p));
  if (d === "still") S = 0.32 * (1.0 + 0.4 * (1 - p));

  // endangered floors
  if (v === "endangered") {
    const floor = d === "vital" || d === "ascending" ? 0.16 : 0.34;
    S = max(S, floor * (1.0 + 0.4 * (1 - p)));
  }

  // tiny time acceleration on shrink
  const tFrac = constrain(refYrs / HORIZON_YEARS, 0, 1);
  S *= 1 + 0.2 * tFrac;

  return { G, S };
}
