import fs from 'fs';
import path from 'path';

// Simple text-based standard PDF generator without external dependencies
function generateResumePdf() {
  const contentLines = [
    "DWIJ PRAJAPATI",
    "AI & Backend Engineer",
    "Bharuch, Gujarat, India | dwijprajapati46476@gmail.com | +91-9979246476",
    "GitHub: github.com/dwijprajapati | LinkedIn: linkedin.com/in/dwij-prajapati",
    "",
    "SUMMARY",
    "AI & Backend Engineer building real-time voice AI agents, LLM-as-a-Judge evaluation pipelines,",
    "and high-performance ML platforms with sub-second latency and resilient stateful architecture.",
    "",
    "EXPERIENCE",
    "Banao Technologies (InterviewGod.ai) — AI Developer Intern (Feb 2026 - Present)",
    "- Architected event-driven voice pipeline on LiveKit (WebRTC), GPT-4o, ElevenLabs and Sarvam AI (<1s latency).",
    "- Designed adaptive multi-turn dialog state machine with repeat-request & filler-word interceptors.",
    "- Built LLM-as-a-Judge validity gate (gpt-4o-mini) with fail-open resiliency to eliminate hallucinations.",
    "- Engineered Redis-backed session checkpointing with 24-hour buffer for zero-data-loss reconnects.",
    "- Deployed multi-service Docker Compose stacks to AWS EC2 with Caddy TLS and CI/CD pipelines.",
    "",
    "PROJECTS",
    "FinSight AI — Quantitative Intelligence & Trading Platform",
    "- Combined SARIMAX, regularized LSTM/MLP networks, and FinBERT sentiment scoring.",
    "- Built MDP trading environment training PPO, A2C, and DQN reinforcement learning agents.",
    "- Generated Efficient Frontier via SLSQP Markowitz optimization and 10,000+ Monte Carlo runs.",
    "",
    "CompInsight AI — Enterprise ML Compensation Modeling Engine",
    "- Benchmarked CatBoost, LightGBM, and XGBoost with Optuna Bayesian hyperparameter search.",
    "- Achieved 0.93 R-squared score with 22% reduction in RMSE over baseline regression.",
    "- Exposed feature attribution with SHAP TreeExplainer and served sub-40ms P99 inference via FastAPI.",
    "",
    "TECHNICAL SKILLS",
    "Languages: Python, C++, C, JavaScript, TypeScript, SQL, Bash/Shell",
    "AI & ML: LLM Orchestration, Prompt Scaffolding, LiveKit WebRTC, STT/TTS, Scikit-learn, TensorFlow",
    "Backend & Cloud: FastAPI, Django, Asyncio, Redis, PostgreSQL, Docker, AWS (EC2, S3), Git, Pytest",
    "",
    "EDUCATION",
    "B.Tech in Computer Engineering — G.H. Patel College of Engineering (2022 - 2026) | CGPA 8.18 / 10"
  ];

  // PDF stream construction
  let streamText = "BT\n/F1 16 Tf\n50 780 Td\n(DWIJ PRAJAPATI) Tj\n/F1 10 Tf\n0 -18 Td\n(AI & Backend Engineer  |  dwijprajapati46476@gmail.com  |  +91-9979246476) Tj\n0 -14 Td\n(GitHub: github.com/dwijprajapati  |  LinkedIn: linkedin.com/in/dwij-prajapati) Tj\n0 -22 Td\n";

  let y = 720;
  for (let i = 4; i < contentLines.length; i++) {
    const line = contentLines[i];
    if (line === "SUMMARY" || line === "EXPERIENCE" || line === "PROJECTS" || line === "TECHNICAL SKILLS" || line === "EDUCATION") {
      streamText += `/F2 11 Tf\n0 -18 Td\n(${line}) Tj\n/F1 9 Tf\n`;
    } else if (line === "") {
      streamText += "0 -6 Td\n";
    } else {
      const escaped = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
      streamText += `0 -12 Td\n(${escaped}) Tj\n`;
    }
  }
  streamText += "ET\n";

  const streamLen = Buffer.byteLength(streamText);

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamText}endstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`
  ];

  let body = "%PDF-1.4\n";
  const offsets = [];
  
  for (const obj of objects) {
    offsets.push(Buffer.byteLength(body));
    body += obj;
  }

  const xrefOffset = Buffer.byteLength(body);
  body += `xref\n0 7\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    body += `${String(offset).padStart(10, '0')} 00000 n \n`;
  }
  body += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const outDir = path.resolve('public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Dwij_Prajapati_Resume.pdf');
  fs.writeFileSync(outPath, body, 'latin1');
  console.log('Successfully generated resume PDF at:', outPath);
}

generateResumePdf();
