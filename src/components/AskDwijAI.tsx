import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, Bot, User, Radio, Volume2, ShieldCheck, Terminal } from 'lucide-react'
import { profile, experience, skillGroups, education, metrics, projects } from '../lib/data'

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ''

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const suggestedPrompts = [
  'Explain the Real-Time Voice AI pipeline',
  'Why use Redis Session Checkpointing?',
  'How does the LLM-as-a-Judge gate work?',
  'Tell me about FinSight AI & RL trading',
  'What is Dwij\'s core backend tech stack?',
  'How do I get in touch with Dwij?',
]

// System prompt constructed from verified portfolio data
const SYSTEM_PROMPT = `You are Dwij Prajapati's official Portfolio AI Assistant. Answer questions accurately, concisely, and professionally on behalf of Dwij Prajapati based strictly on the verified information below.

About Dwij:
Name: ${profile.name}
Role: ${profile.role}
Location: ${profile.location}
Email: ${profile.email}
Phone: ${profile.phone}
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}
Summary: ${profile.bioIntro} ${profile.summary}

Education:
Degree: ${education.degree} (${education.years})
School: ${education.school}
GPA: ${education.gpa}

Work Experience:
Company: ${experience[0].org} (${experience[0].date})
Role: ${experience[0].role}
Scope: ${experience[0].projectsSubtitle}
Key Deliverables:
${experience[0].details.map((d, i) => `${i + 1}. ${d}`).join('\n')}

Key Projects:
1. InterviewGod.ai: Real-Time Voice AI Agent & LLM Evaluation Platform using LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, Sarvam AI, Redis Session Checkpointing (24h state buffer), gpt-4o-mini LLM-as-a-Judge answer-validity gate (<1s latency, 99.8% pass rate, 20+ multilingual edge cases resolved).
2. FinSight AI: Quantitative Intelligence & Autonomous Trading Platform using SARIMAX, LSTM, FinBERT NLP, MDP RL trading agents (PPO/A2C/DQN), and Markowitz Modern Portfolio Theory (SLSQP optimization, Monte Carlo, VaR/CVaR).
3. CompInsight AI: Enterprise ML Compensation Modeling Engine benchmarking CatBoost, XGBoost, and LightGBM (5-Fold Bayesian CV, R² of 0.93, 22% RMSE reduction), FastAPI REST sub-40ms P99 latency, and SHAP TreeExplainer.

Technical Skills:
${skillGroups.map((g) => `${g.title}: ${g.items.map((i) => `${i.name} (${i.tier})`).join(', ')}`).join('\n')}

Rules:
1. Always be helpful, precise, technical, and concise.
2. If asked about something not present in Dwij's profile, politely state that you only have verified information about Dwij's engineering background.
3. Keep responses clean, well-formatted with bullet points when explaining architecture.`

export default function AskDwijAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hi! I am Dwij\'s Voice AI & Systems Assistant. Ask me anything about his real-time LiveKit SFU pipeline, Redis Session Checkpointing, LLM-as-a-Judge evaluation gates, or quantitative ML systems.',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  // Comprehensive local knowledge engine (RAG-like search over verified portfolio)
  const localRAGQuery = (query: string): string => {
    const q = query.toLowerCase()

    if (q.includes('voice') || q.includes('webrtc') || q.includes('livekit') || q.includes('sfu') || q.includes('pipeline') || q.includes('latency')) {
      return `### Real-Time Voice AI Pipeline (Sub-Second Latency)
Dwij architected an asynchronous event-driven voice streaming pipeline for **InterviewGod.ai**:

• **Transport & Routing**: LiveKit SFU (WebRTC) over Opus audio with sub-50ms distribution latency.
• **Semantic Turn-Taking**: Acoustic VAD energy filtering paired with heuristic repeat-request and filler-word interceptors.
• **Reasoning Core**: OpenAI GPT-4o with multi-turn dialog state machine to prevent conversational topic drift.
• **Audio Warmup Gates**: Streamed initial synthesis tokens to ElevenLabs & Sarvam AI before full completion, achieving **<1s end-to-end conversational turnaround**.`
    }

    if (q.includes('redis') || q.includes('buffer') || q.includes('checkpoint') || q.includes('session') || q.includes('disconnect') || q.includes('recovery')) {
      return `### Redis Session Checkpointing Architecture
Dwij standardized **Redis Session Checkpointing** to eliminate session loss in high-concurrency environments:

• **24-Hour Handoff Buffer**: Active dialog states, conversational turns, and candidate scores are continuously serialized to Redis.
• **Zero-Data-Loss Recovery**: When a user encounters network dropouts or websocket reconnects, the session state is seamlessly restored from the Redis checkpoint.
• **Microservice Sync**: Uses bidirectional webhooks to sync session metadata back to core FastAPI application servers.`
    }

    if (q.includes('judge') || q.includes('eval') || q.includes('validity') || q.includes('hallucination') || q.includes('scoring')) {
      return `### LLM-as-a-Judge Evaluation Gate
Dwij built an automated answer-validity gate using **gpt-4o-mini** with fail-open resilience:

• **Hallucination Interception**: Detects STT transcription artifacts, silent non-answers, and evasive replies during candidate screening calls.
• **Denominator Normalization**: Fixed mathematical denominator inflation bugs in weighted skill scoring algorithms by penalizing invalid responses and re-centering zero-score distributions.
• **Benchmark**: Achieved a **99.8% validity pass rate** across bilingual (Hindi & English) evaluation datasets.`
    }

    if (q.includes('finsight') || q.includes('trading') || q.includes('quant') || q.includes('rl') || q.includes('markowitz') || q.includes('stock')) {
      return `### FinSight AI — Quantitative Intelligence & RL
FinSight AI combines reinforcement learning with time-series econometric modeling:

• **Autonomous RL Trading**: Markov Decision Process (MDP) supporting PPO, A2C, and DQN agents trained on dynamic technical indicators (RSI, MACD, Bollinger Bands).
• **Markowitz Modern Portfolio Theory (MPT)**: Numerical optimization via SLSQP and 10,000 Monte Carlo paths to determine the Efficient Frontier (Max Sharpe Ratio = 2.14).
• **Regime Forecasting**: SARIMAX combined with LSTM/MLP neural networks and FinBERT financial news sentiment extraction.`
    }

    if (q.includes('compinsight') || q.includes('compensation') || q.includes('catboost') || q.includes('salary') || q.includes('shap')) {
      return `### CompInsight AI — Enterprise ML Compensation Engine
CompInsight AI predicts market compensation packages using gradient-boosted ensembles:

• **Benchmark Results**: Achieved **R² = 0.93** and a **22% reduction in RMSE** over baseline models using 5-Fold Bayesian Cross-Validated CatBoost, LightGBM, and XGBoost.
• **SHAP TreeExplainer**: Integrated Shapley feature attribution to quantify tech stack scarcity (+38%), tenure elasticity (+29%), and geographic tiering (+24%).
• **FastAPI REST Service**: Containerized Docker microservice with Pydantic contracts achieving **sub-40ms P99 inference latency**.`
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('fastapi') || q.includes('python')) {
      return `### Dwij's Core Production Stack
• **Languages**: Python (Core), C++, SQL, JavaScript, Bash
• **AI & LLM Orchestration**: LiveKit SFU (WebRTC), OpenAI GPT-4o, Speech AI (STT/TTS/VAD), Evaluation Gates, PyTorch, Scikit-learn
• **Backend Infrastructure**: FastAPI, Asyncio, Redis Session Checkpointing, Django, REST, WebSockets, Pydantic V2
• **Cloud & DevOps**: AWS (EC2, S3, CodeBuild CI/CD), Docker Compose, Caddy Reverse Proxy (TLS/SSL), Pytest`
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('phone') || q.includes('linkedin')) {
      return `### Contact Dwij Prajapati
You can connect with Dwij directly:

• **Email**: ${profile.email}
• **Phone**: ${profile.phone}
• **LinkedIn**: ${profile.linkedin}
• **GitHub**: ${profile.github}
• **Location**: ${profile.location}`
    }

    if (q.includes('banao') || q.includes('experience') || q.includes('intern') || q.includes('role')) {
      return `### Professional Experience at Banao Technologies
Dwij is currently an **AI Developer Intern** (Feb 2026 – Present) at Banao Technologies:

• Shipped the flagship **InterviewGod.ai** real-time voice agent using LiveKit SFU and GPT-4o.
• Built deterministic candidate evaluation and decision governance pipelines.
• Resolved 20+ edge cases across bilingual (Hindi/English) speech models.
• Containerized production microservices on AWS EC2 with Docker Compose and Caddy automated TLS.`
    }

    return `Dwij Prajapati is an AI, Backend & Full-Stack Systems Engineer specializing in real-time voice AI agents (LiveKit SFU, WebRTC, GPT-4o), distributed Redis checkpointing, and quantitative ML models (0.93 R²).

Feel free to ask about:
1. The Voice AI architecture and latency budget
2. Redis Session Checkpointing implementation
3. LLM-as-a-Judge answer validity gates
4. FinSight AI or CompInsight AI case studies`
  }

  const callGroqAPI = async (history: ChatMessage[]): Promise<string> => {
    if (!GROQ_API_KEY) {
      return localRAGQuery(history[history.length - 1]?.content || '')
    }

    try {
      const groqMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history.map((m) => ({ role: m.role, content: m.content })),
      ]

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: groqMessages,
          temperature: 0.3,
          max_tokens: 550,
        }),
      })

      if (!response.ok) {
        throw new Error(`Groq API returned ${response.status}`)
      }

      const data = await response.json()
      return data.choices?.[0]?.message?.content || localRAGQuery(history[history.length - 1]?.content || '')
    } catch (err) {
      console.warn('Using verified local knowledge engine:', err)
      return localRAGQuery(history[history.length - 1]?.content || '')
    }
  }

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
    }

    const updatedHistory = [...messages, userMsg]
    setMessages(updatedHistory)
    setInput('')
    setIsTyping(true)

    // Simulate realistic sub-second conversational latency
    setTimeout(async () => {
      const answer = await callGroqAPI(updatedHistory)

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: answer,
      }

      setMessages((prev) => [...prev, assistantMsg])
      setIsTyping(false)
    }, 450)
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Ask Dwij's Voice AI Assistant"
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,229,199,0.4)] hover:bg-accent-hover hover:scale-105 transition-all flex items-center gap-2 border border-white/20"
      >
        <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
        <span className="hidden sm:inline">Ask Dwij's AI</span>
        <span className="sm:hidden">AI Assistant</span>
      </button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[450px] max-h-[620px] rounded-3xl glass-panel border border-white/15 shadow-2xl flex flex-col overflow-hidden bg-[#08090C]/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accent text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Ask Dwij's AI</span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                      RAG Verified
                    </span>
                  </h3>
                  <p className="text-[10px] text-secondary font-mono">
                    Voice AI & Systems Knowledge Base
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-secondary hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 max-h-[360px] text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] ${
                      msg.role === 'user'
                        ? 'bg-accent text-slate-950 font-bold'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-accent/20 border border-accent/40 text-white rounded-tr-none'
                        : 'bg-white/[0.04] border border-white/10 text-slate-200 rounded-tl-none font-sans'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-muted font-mono text-[11px] pl-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="text-accent">Dwij's Knowledge Engine inferencing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="p-3 border-t border-white/5 bg-white/[0.01] flex flex-wrap gap-1.5 max-h-[90px] overflow-y-auto">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-accent/15 border border-white/10 hover:border-accent/40 text-[10px] font-mono text-secondary hover:text-white transition-all text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="p-3 border-t border-white/10 flex items-center gap-2 bg-black/40"
            >
              <input
                type="text"
                placeholder="Ask about LiveKit SFU, Redis, R² 0.93, FinSight..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-0 text-white text-xs font-mono placeholder:text-muted focus:outline-none px-2"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2 rounded-full bg-accent text-slate-950 hover:bg-accent-hover disabled:opacity-40 transition-all shadow-md"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
