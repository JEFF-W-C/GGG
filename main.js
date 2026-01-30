function calcDesignFlow() {
  const Q = getDesignFlow();
  document.getElementById("designFlowResult").innerText =
    `Design Flow = ${Q.toFixed(1)} LPM`;
}
