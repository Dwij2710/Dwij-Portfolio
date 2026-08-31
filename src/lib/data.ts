export const profile = {
  name: 'Dwij Prajapati',
  role: 'AI, Backend & Full-Stack Engineer',
  location: 'Bharuch, Gujarat, India',
  email: 'dwijprajapati46476@gmail.com',
  phone: '+91-9979246476',
  github: 'https://github.com/Dwij2710',
  linkedin: 'https://linkedin.com/in/dwij-prajapati',
  resumeUrl: '/Dwij_Prajapati_Resume.pdf',
  roles: [
    'AI & GenAI Engineer',
    'Backend Systems Engineer',
    'Full-Stack Developer',
    'Voice AI Agent Builder',
  ],
  bioIntro:
    'AI, Backend & Full-Stack Engineer with extensive experience designing, building, and deploying end-to-end Generative AI applications, intelligent systems, and scalable backend platforms. Proven expertise in building low-latency asynchronous microservices, robust API architectures, and responsive web applications.',
  summary:
    'Skilled across the full lifecycle—from architecting high-performance Python backends (FastAPI, Django, Asyncio) and distributed state management (Redis) to multi-step LLM orchestration, agentic workflows, and automated evaluation engines.',
}

export const metrics = [
  { label: 'conversational latency', value: '<1s', unit: 'WebRTC / SFU live pipeline' },
  { label: 'compensation model fit', value: '0.93', unit: 'R² score (22% RMSE reduction)' },
  { label: 'edge cases resolved', value: '20+', unit: 'in multilingual eval pipeline' },
  { label: 'session recovery buffer', value: '24h', unit: 'zero-data-loss redis buffer' },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C++', 'C', 'JavaScript', 'SQL', 'Bash / Shell'],
  },
  {
    title: 'AI / Machine Learning',
    items: [
      'LLMs',
      'Agentic Architectures',
      'Prompt Engineering & Scaffolding',
      'LLM Evaluation & Scoring Pipelines',
      'Multi-Turn Conversation Systems',
      'Speech AI (STT/TTS & VAD)',
      'Scikit-learn',
      'TensorFlow',
      'NLP',
    ],
  },
  {
    title: 'Backend & System Design',
    items: [
      'FastAPI',
      'Django',
      'Asyncio',
      'RESTful API Design',
      'WebSockets',
      'Webhook Architecture',
      'Distributed Session Management',
      'Pydantic',
      'Event-Driven Architecture',
      'HTTPX',
    ],
  },
  {
    title: 'Databases & State',
    items: ['Redis (In-Memory Caching & Session Checkpointing)', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Cloud, DevOps & Tools',
    items: [
      'Docker',
      'Docker Compose',
      'AWS (EC2, S3)',
      'Caddy (Reverse Proxy/TLS)',
      'Git',
      'GitHub',
      'Pytest (E2E & Unit Testing)',
      'Postman',
    ],
  },
]

export const experience = [
  {
    date: 'Feb 2026 – Present',
    role: 'AI Developer Intern',
    org: 'Banao Technologies (InterviewGod.ai)',
    projectsSubtitle:
      'Projects: InterviewGod.ai (Real-Time Voice AI Agent & LLM Evaluation Engine) and Multi-Modal Candidate Screening & Decision Governance Pipeline',
    summary:
      'Architected and deployed production real-time voice AI agents, deterministic LLM evaluation engines, and candidate screening governance pipelines across distributed cloud infrastructure.',
    details: [
      'Architected an asynchronous event-driven real-time voice AI pipeline leveraging LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, and Sarvam AI, implementing semantic turn-taking, acoustic VAD filtering, and pre-generated audio warmup gates to achieve sub-second conversational latency.',
      'Engineered an adaptive multi-turn dialog state machine with heuristic repeat-request and filler-word interceptors, enforcing bounded per-topic counter-probing and contextual conversational scaffolding to eliminate topic drift and prevent task stalls.',
      'Developed an LLM-as-a-Judge answer-validity gate (gpt-4o-mini) with fail-open resiliency to intercept STT hallucinations and non-answers, resolving mathematical denominator inflation bugs in weighted skill aggregation algorithms by penalizing invalid responses and normalizing zero-score distributions.',
      'Engineered a distributed session state and checkpointing architecture using Redis with 24-hour handoff buffers, enabling zero-data-loss disconnect/reconnect recovery for active sessions alongside bidirectional webhook synchronization to core microservices.',
      'Audited a four-layer deterministic candidate evaluation and call-screening pipeline (Scenario Detection, Telemetry, Semantic Intelligence, Policy Engine, Governance), resolving 20+ edge cases across multilingual (Hindi/English) speech pipelines, brittle speaker-attribution logic, telemetry constant drifts, and silent fallbacks.',
      'Constructed a multi-modal weighted aggregation engine consolidating Resume, Screening Call, Assessment, Technical Interview, and Integrity signals into automated PROCEED / HOLD / REJECT hiring recommendations with calibrated confidence scoring.',
      'Containerized and deployed multi-service production stacks across AWS EC2 utilizing Docker Compose and Caddy reverse proxies with automated SSL/TLS termination, supporting multi-stage Serverless framework migrations across AWS accounts with IAM OIDC role delegations and CodeBuild CI/CD pipelines.',
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
    tagline: 'Quantitative Intelligence & Autonomous Trading Platform',
    problem:
      'Financial markets move on more than price history — macroeconomic shifts, news sentiment, and non-linear momentum dynamics all interact in complex, non-stationary ways.',
    approach:
      'Engineered time-series models combining SARIMAX (ADF stationarity testing & seasonal decomposition) and regularized LSTM/MLP neural networks with FinBERT NLP sentiment analysis and cross-asset macroeconomic indicators (S&P 500, VIX, 10-Yr Yields) to capture non-linear market dynamics and momentum shifts.',
    results: [
      'Built an autonomous Markov Decision Process (MDP) stock trading environment supporting discrete and continuous action spaces; trained PPO, A2C, and DQN agents on dynamic multi-factor state spaces (14-day RSI, MACD, Bollinger Bands) to optimize risk-adjusted trading strategies.',
      'Implemented Markowitz Modern Portfolio Theory (MPT) using SLSQP numerical optimization and Monte Carlo simulations to generate the Efficient Frontier (maximizing Sharpe Ratio).',
      'Modeled downside risk exposure with Historical/Parametric VaR, CVaR (Expected Shortfall), and macroeconomic stress testing scenarios.',
    ],
    stack: [
      'Python',
      'PyTorch',
      'SARIMAX',
      'LSTM / MLP',
      'FinBERT',
      'PPO / A2C / DQN',
      'Monte Carlo',
      'SLSQP Optimization',
      'NumPy / Pandas',
    ],
    githubUrl: 'https://github.com/Dwij2710/finsight-ai',
    demoUrl: 'https://github.com/Dwij2710/finsight-ai#demo',
    architectureOverview:
      'Autonomous Markov Decision Process (MDP) reinforcement learning trading environment integrated with multi-factor time-series forecasting (SARIMAX), neural deep learning (LSTM/MLP), FinBERT NLP sentiment scoring, and SLSQP Markowitz Efficient Frontier optimization.',
    keyMilestones: [
      'Constructed complete MDP environment supporting discrete and continuous action spaces with PPO, A2C, and DQN agents',
      'Engineered Markowitz Modern Portfolio Theory (MPT) optimization using SLSQP solver and 10,000+ Monte Carlo stochastic paths',
      'Integrated real-time transformer NLP sentiment extraction with FinBERT against macroeconomic indicators',
    ],
  },
  {
    id: 'compinsight-ai',
    name: 'CompInsight AI',
    tagline: 'Enterprise ML Compensation Modeling & Valuation Engine',
    problem:
      'Compensation datasets feature heavy-tailed distributions and high-cardinality categories, causing naive regressions to fail on rare tech stacks and geographic tiers.',
    approach:
      'Engineered a production-grade ML pipeline benchmarking Gradient Boosted Decision Trees (XGBoost, LightGBM, CatBoost) alongside Ridge/Random Forest regressors; implemented log-normal target transformations for heavy-tailed compensation distributions, target/one-hot encoding for high-cardinality features, and 5-Fold Cross-Validation with Bayesian hyperparameter optimization.',
    results: [
      'Achieved an R² score of 0.93 and a 22% reduction in RMSE over baseline models.',
      'Integrated SHAP (SHapley Additive exPlanations) utilizing TreeExplainer and Partial Dependence Plots (PDP) to quantify non-linear feature interactions and marginal contributions (e.g., tech stack scarcity, tenure elasticity, geographic tiering), ensuring algorithmic transparency and bias mitigation in salary benchmarking.',
      'Built a decoupled, container-ready backend using FastAPI with Pydantic data contracts, input sanitation, and serialized preprocessing/model DAGs (Joblib); achieved sub-40ms P99 inference latency across RESTful endpoints with automated OpenAPI schemas integrated into a reactive Streamlit executive dashboard.',
    ],
    stack: [
      'Python',
      'CatBoost',
      'LightGBM',
      'XGBoost',
      'SHAP (TreeExplainer)',
      'FastAPI',
      'Pydantic',
      'Joblib',
      'Streamlit',
      'Docker',
    ],
    githubUrl: 'https://github.com/Dwij2710/compinsight-ai',
    demoUrl: 'https://github.com/Dwij2710/compinsight-ai#demo',
    architectureOverview:
      'Production ML inference service with log-normal target transform, 5-Fold Bayesian tuned gradient boosted ensembles (CatBoost/LightGBM/XGBoost), SHAP TreeExplainer attribution, and sub-40ms P99 FastAPI REST microservice.',
    keyMilestones: [
      'Benchmarked CatBoost, LightGBM, and XGBoost with Optuna Bayesian cross-validation achieving R² = 0.93',
      'Quantified tech-stack scarcity and tenure elasticity using SHAP TreeExplainer and Partial Dependence Plots',
      'Shipped containerized FastAPI microservice serving sub-40ms P99 predictions to Streamlit executive dashboard',
    ],
  },
]

export const education = {
  degree: 'B.Tech in Computer Engineering',
  school: 'G.H. Patel College of Engineering, Anand',
  years: '2022 – 2026',
  gpa: 'CGPA: 8.18 / 10',
}

export const achievements = [
  'Machine Learning A-Z: AI, Python & R + ChatGPT – Prize',
  'Complete Python Bootcamp – Certification',
]
