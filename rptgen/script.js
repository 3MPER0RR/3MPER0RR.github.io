function generateReport() {
  const target = document.getElementById("target").value;
  const url = document.getElementById("url").value;
  const type = document.getElementById("type").value;
  const desc = document.getElementById("desc").value;

  const report = `
--- ${type} Report ---
Target: ${target}
URL: ${url}

Vulnerabilità trovate:
${desc}

Fine del report
`;

  document.getElementById("output").textContent = report;
}
