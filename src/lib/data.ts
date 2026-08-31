export const profile = {
  name: 'Dwij Prajapati',
  role: 'AI & Backend Engineer',
  location: 'Bharuch, Gujarat, India',
  email: 'dwijprajapati46476@gmail.com',
  phone: '+91-9979246476',
  github: 'https://github.com/Dwij2710',
  linkedin: 'https://linkedin.com/in/dwij-prajapati',
  resumeUrl: '/Dwij_Prajapati_Resume.pdf',
  roles: [
    'AI Engineer',
    'Backend Systems Engineer',
    'GenAI & Voice Agent Builder',
    'Distributed Systems Tinkerer',
  ],
  bioIntro:
    'I build end-to-end generative AI systems and the high-throughput backend infrastructure underneath them — low-latency voice agents, evaluation pipelines that catch hallucinations, and fault-tolerant APIs.',
}

export const metrics = [
  { label: 'voice pipeline latency', value: '<1s', unit: 'end-to-end WebRTC' },
  { label: 'compensation model fit', value: '0.93', unit: 'R² score (CatBoost)' },
  { label: 'eval edge cases resolved', value: '20+', unit: 'in eval pipeline' },
  { label: 'session recovery window', value: '24h', unit: 'redis checkpointing' },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Bash / Shell'],
  },
  {
    title: 'AI / Machine Learning',
    items: [
      'LLM Orchestration',
      'Agentic Architectures',
      'Prompt Engineering & Scaffolding',
      'LLM-as-a-Judge Evaluation',
      'Multi-Turn Dialog Systems',
      'Speech AI (STT / TTS / VAD)',
      'Scikit-learn',
      'TensorFlow',
      'NLP / Transformers',
    ],
  },
  {
    title: 'Backend & Systems',
    items: [
      'FastAPI',
      'Django',
      'Asyncio',
      'RESTful API Design',
      'WebSockets',
      'Webhook Architecture',
      'Pydantic',
      'Event-Driven Architecture',
      'HTTPX',
    ],
  },
  {
    title: 'Data & State',
    items: ['Redis', 'PostgreSQL', 'MySQL', 'Vector Stores'],
  },
  {
    title: 'Cloud & Tooling',
    items: [
      'Docker',
      'Docker Compose',
      'AWS (EC2, S3, IAM)',
      'Caddy / Nginx',
      'Git / GitHub CI/CD',
      'Pytest',
      'Postman',
    ],
  },
]

export const experience = [
  {
    date: 'Feb 2026 — Present',
    role: 'AI Developer Intern',
    org: 'Banao Technologies · InterviewGod.ai',
    summary:
      'Building the real-time voice AI agent and multi-modal candidate evaluation pipeline behind InterviewGod.ai — from sub-second conversational latency to the governance layer that turns interview signal into a hiring decision.',
    details: [
      'Architected an asynchronous, event-driven voice pipeline on LiveKit (WebRTC), GPT-4o, ElevenLabs and Sarvam AI, using semantic turn-taking and acoustic VAD filtering to hold conversational latency under a second.',
      'Designed an adaptive multi-turn dialog state machine with repeat-request and filler-word interceptors, bounding per-topic probing so conversations stay on track instead of stalling or drifting.',
      'Built an LLM-as-a-Judge validity gate (gpt-4o-mini) with fail-open resiliency to catch STT hallucinations and non-answers, fixing a denominator-inflation bug that was skewing weighted skill scores.',
      'Engineered Redis-backed session checkpointing with a 24-hour handoff buffer for zero-data-loss reconnects, synced bidirectionally with core services via webhooks.',
      'Audited a four-layer evaluation and call-screening pipeline — scenario detection, telemetry, semantic intelligence, policy, governance — closing 20+ edge cases across bilingual Hindi/English speech and speaker-attribution logic.',
      'Built the aggregation engine that weighs resume, screening call, assessment, interview and integrity signals into a calibrated PROCEED / HOLD / REJECT recommendation.',
      'Shipped multi-service stacks to AWS EC2 with Docker Compose and Caddy-managed TLS, and supported a Serverless migration across accounts with IAM OIDC and CodeBuild CI/CD.',
    ],
  },
]

export interface ProjectData {
  id: string
  name: string
  tagline: string
  problem: string
  approach: string
  results: string[]
  stack: string[]
  githubUrl?: string
  demoUrl?: string
  architectureOverview: string
  keyMilestones: string[]
}

export const projects: ProjectData[] = [
  {
    id: 'finsight-ai',
    name: 'FinSight AI',
    tagline: 'Quantitative intelligence & autonomous trading platform',
    problem:
      'Markets move on more than price history — sentiment, macro conditions and non-linear momentum all matter, and most retail-grade tools model none of it together.',
    approach:
      'Combined SARIMAX (with ADF stationarity testing and seasonal decomposition) with regularized LSTM/MLP networks and FinBERT sentiment scoring, feeding in cross-asset signals like the S&P 500, VIX and 10-year yields. On top of that, an MDP trading environment trains PPO, A2C and DQN agents against RSI, MACD and Bollinger Band state spaces to learn risk-adjusted strategies.',
    results: [
      'Efficient Frontier generated via SLSQP optimization and Monte Carlo simulation, maximizing Sharpe ratio under Markowitz portfolio theory',
      'Downside risk quantified with Historical/Parametric VaR, CVaR and macro stress testing',
      'Real-time financial news sentiment extraction using fine-tuned FinBERT transformer weights',
    ],
    stack: ['Python', 'PyTorch', 'SARIMAX', 'LSTM / MLP', 'FinBERT', 'PPO / A2C / DQN', 'Monte Carlo', 'NumPy/Pandas'],
    githubUrl: 'https://github.com/Dwij2710/finsight-ai',
    demoUrl: 'https://github.com/Dwij2710/finsight-ai#demo',
    architectureOverview:
      'Multi-modal pipeline orchestrating statistical time-series forecasting (SARIMAX), neural deep learning (LSTM/MLP), NLP market sentiment (FinBERT), and reinforcement learning execution agents (PPO/A2C/DQN) in an OpenAI Gym/Gymnasium compatible MDP environment.',
    keyMilestones: [
      'Engineered Markowitz Efficient Frontier optimization using SLSQP with boundary constraints',
      'Implemented Monte Carlo engine running 10,000+ stochastic asset trajectory simulations',
      'Formulated custom reward function penalizing max drawdown and downside volatility',
    ],
  },
  {
    id: 'compinsight-ai',
    name: 'CompInsight AI',
    tagline: 'Enterprise ML compensation modeling & valuation engine',
    problem:
      'Compensation data is heavy-tailed and high-cardinality — a naive regression either overfits rare titles or ignores what actually drives pay.',
    approach:
      'Benchmarked gradient-boosted trees (XGBoost, LightGBM, CatBoost) against Ridge and Random Forest baselines, using log-normal target transforms and target/one-hot encoding for high-cardinality features, tuned with 5-fold cross-validation and Bayesian hyperparameter search.',
    results: [
      'R² of 0.93 with a 22% reduction in RMSE over baseline models',
      'SHAP (TreeExplainer) and partial dependence plots exposing what actually moves salary — tech-stack scarcity, tenure, geography',
      'FastAPI backend with Pydantic contracts and serialized model DAGs hitting sub-40ms P99 inference, feeding an executive dashboard',
    ],
    stack: ['Python', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP', 'FastAPI', 'Pydantic', 'Streamlit', 'Docker'],
    githubUrl: 'https://github.com/Dwij2710/compinsight-ai',
    demoUrl: 'https://github.com/Dwij2710/compinsight-ai#demo',
    architectureOverview:
      'Production ML pipeline consisting of automated data pre-processing with log-transform and target encoding, Bayesian cross-validated gradient boosted ensembles, and a FastAPI inference engine serving SHAP local explanations with sub-40ms P99 latency.',
    keyMilestones: [
      'Trained and evaluated CatBoost, LightGBM, and XGBoost with Optuna Bayesian hyperparameter optimization',
      'Extracted global and local feature importance using TreeExplainer SHAP values',
      'Containerized high-concurrency FastAPI microservice with Docker and automated input validation',
    ],
  },
]

export const education = {
  degree: 'B.Tech, Computer Engineering',
  school: 'G.H. Patel College of Engineering, Anand',
  years: '2022 — 2026',
  gpa: 'CGPA 8.18 / 10',
}

export const achievements = [
  'Machine Learning A-Z: AI, Python & R + ChatGPT — Prize Winner',
  'Complete Python Bootcamp — Professional Certification',
  'Academic Excellence in Computer Engineering — Top Percentile',
]
