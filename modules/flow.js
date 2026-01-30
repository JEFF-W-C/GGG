function getDesignFlow() {
  const peak = Number(document.getElementById("peakFlow").value);
  const qty = Number(document.getElementById("toolCount").value);
  const df = Number(document.getElementById("diversity").value);

  return peak * qty * df; // LPM
}
