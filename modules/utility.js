function calcCDA() {
  const qty = Number(document.getElementById("pumpQty").value);
  const per = Number(document.getElementById("cdaPerPump").value);

  const total = qty * per;
  const design = total * DESIGN.CDA_SPARE_FACTOR;

  document.getElementById("cdaResult").innerText =
    `CDA Demand = ${design.toFixed(0)} NL/min (incl. spare)`;
}
