function calcPipe() {
  const Q_lpm = getDesignFlow();
  const Q = Q_lpm / 1000 / 60; // m³/s
  const V = DESIGN.MAX_CHEM_VELOCITY;

  const D = Math.sqrt((4 * Q) / (Math.PI * V)); // meters

  document.getElementById("pipeResult").innerText =
    `Required Pipe ID ≈ ${(D * 1000).toFixed(1)} mm`;
}
