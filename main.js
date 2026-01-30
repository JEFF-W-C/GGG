function calcDesignFlow() {
  const Q = getDesignFlow();
  document.getElementById("designFlowResult").innerText =
    `Design Flow = ${Q.toFixed(1)} LPM`;
}

window.onload = function () {
  const el = document.getElementById("versionInfo");
  el.innerText = `Version ${VERSION_INFO.version} | Last Updated: ${VERSION_INFO.lastUpdated}`;
};
