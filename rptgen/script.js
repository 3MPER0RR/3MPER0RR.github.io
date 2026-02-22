function generateReport() {
  const target = document.getElementById("target").value;
  const url = document.getElementById("url").value;
  const type = document.getElementById("type").value;
  const desc = document.getElementById("desc").value;
  const severity = document.getElementById("severity").value;
  const poc = document.getElementById("poc").value;
  const screenshots = document.getElementById("screenshots").value.split("\n");
  const mitigation = document.getElementById("mitigation").value;

  let report = `--- ${type} Report ---
Target: ${target}
URL: ${url}

Vulnerabilità:
${desc}

Severity: ${severity}

Proof of Concept:
${poc}

Screenshot URLs:
${screenshots.join("\n")}

Mitigation / Recommendations:
${mitigation}

Fine del report
`;

  document.getElementById("output").textContent = report;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const text = document.getElementById("output").textContent;

  let lines = doc.splitTextToSize(text, 180); // wrap testo
  doc.setFontSize(12);
  doc.text(lines, 10, 10);
  doc.save("report.pdf");
}
