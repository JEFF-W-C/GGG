const utilityDatabase = {
  CCBTU: {
    CDA: 120,     // NL/min
    GN2: 80,      // NL/min
    UPW: 2,       // L/min
    EXH: 600,     // CMH
    DRAIN: 1,     // L/min
    POWER: 1.2,   // kW
    SIGNAL: "DI:8 / DO:8"
  },
  CDU: {
    CDA: 150,
    GN2: 100,
    UPW: 3,
    EXH: 800,
    DRAIN: 2,
    POWER: 2.0,
    SIGNAL: "DI:12 / DO:12"
  }
};

function calculateUtility() {
  const toolType = document.getElementById("toolType").value;
  const qty = Number(document.getElementById("toolQty").value);
  const safety = Number(document.getElementById("safetyFactor").value) / 100;

  const base = utilityDatabase[toolType];
  const factor = qty * (1 + safety);

  document.getElementById("cda").innerText =
    (base.CDA * factor).toFixed(1) + " NL/min";

  document.getElementById("gn2").innerText =
    (base.GN2 * factor).toFixed(1) + " NL/min";

  document.getElementById("upw").innerText =
    (base.UPW * factor).toFixed(2) + " L/min";

  document.getElementById("exh").innerText =
    (base.EXH * factor).toFixed(0) + " CMH";

  document.getElementById("drain").innerText =
    (base.DRAIN * factor).toFixed(2) + " L/min";

  document.getElementById("power").innerText =
    (base.POWER * factor).toFixed(2) + " kW";

  document.getElementById("signal").innerText =
    base.SIGNAL + " (per tool)";
}
