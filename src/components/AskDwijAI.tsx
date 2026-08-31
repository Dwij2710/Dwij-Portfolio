import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, MessageSquare, X, Send, Bot, User, ArrowRight, Check, CornerDownLeft } from 'lucide-react'
import { profile, experience, projects, skillGroups, education, metrics } from '../lib/data'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const suggestedPrompts = [
  'What did Dwij build at Banao / InterviewGod.ai?',
  'Explain the Voice AI & WebRTC pipeline',
  'Tell me about FinSight AI and RL trading',
  'What is Dwij\'s core backend tech stack?',
  'How do I get in touch with Dwij?',
]

// Accurate knowledge base matching engine (Zero Hallucinations)
function getVerifiedAnswer(query: string): string {
  const q = query.toLowerCase()

  if (q.includes('banao') || q.includes('interviewgod') || q.includes('voice') || q.includes('webrtc') || q.includes('latency')) {
    return `At Banao Technologies, Dwij architected the production real-time voice AI pipeline for InterviewGod.ai. Key deliverables include:\n\n• Achieved sub-second (<1s) conversational latency using LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, and Sarvam AI.\n• Engineered an adaptive multi-turn dialog state machine with acoustic VAD filtering and repeat-request interceptors.\n• Developed an LLM-as-a-Judge answer-validity filter (gpt-4o-mini) with 99.8% fail-open validity resiliency.\n• Engineered distributed Redis session checkpointing with 24-hour handoff buffers for zero-data-loss reconnect recovery.\n• Resolved 20+ multilingual (Hindi/English) speech evaluation edge cases.\n• Deployed containerized stacks on AWS EC2 with Docker Compose and Caddy reverse proxy TLS.`
  }

  if (q.includes('finsight') || q.includes('trading') || q.includes('markowitz') || q.includes('rl') || q.includes('ppo') || q.includes('finance')) {
    return `FinSight AI is Dwij's quantitative intelligence and autonomous trading platform:\n\n• Combines SARIMAX time-series models, LSTM neural networks, and FinBERT NLP news sentiment analysis.\n• Built an autonomous Markov Decision Process (MDP) trading environment; trained PPO, A2C, and DQN reinforcement learning agents.\n• Implemented Markowitz Modern Portfolio Theory (MPT) via SLSQP numerical optimization and Monte Carlo simulations for Efficient Frontier generation.\n• Modeled downside risk with Historical/Parametric VaR and CVaR (Expected Shortfall).`
  }

  if (q.includes('compinsight') || q.includes('salary') || q.includes('catboost') || q.includes('compensation') || q.includes('shap')) {
    return `CompInsight AI is an enterprise ML compensation modeling engine built by Dwij:\n\n• Trained and benchmarked CatBoost, XGBoost, and LightGBM regressors with 5-Fold Bayesian Cross-Validation.\n• Achieved an R² score of 0.93 and a 22% RMSE reduction over baseline models.\n• Engineered a sub-40ms P99 latency FastAPI microservice with Pydantic validation.\n• Integrated SHAP TreeExplainer and Partial Dependence Plots for salary transparency.`
  }

  if (q.includes('skill') || q.includes('stack') || q.includes('technology') || q.includes('python') || q.includes('fastapi') || q.includes('docker') || q.includes('aws')) {
    return `Dwij's core engineering stack spans 5 main domains:\n\n• AI / ML: LLMs, Agentic Architectures, Prompt Scaffolding, LLM Evaluation Pipelines, Speech AI (STT/TTS/VAD), Scikit-learn, PyTorch, LangChain.\n• Backend: Python, FastAPI, Django, Asyncio, RESTful APIs, WebSockets, Webhooks, Pydantic.\n• Real-Time & Databases: LiveKit SFU, WebRTC, Redis (Caching & Session Buffer), PostgreSQL, MySQL.\n• Cloud & DevOps: AWS (EC2, S3), Docker Compose, Caddy TLS, Git, GitHub Actions, AWS CodeBuild, Pytest.\n• Languages: Python, C++, C, JavaScript, SQL, Bash.`
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('linkedin')) {
    return `You can reach out to Dwij directly:\n\n• Email: dwijprajapati46476@gmail.com\n• Phone: +91-9979246476\n• LinkedIn: linkedin.com/in/dwij-prajapati\n• GitHub: github.com/Dwij2710\n• Location: Bharuch, Gujarat, India (Available for remote & hybrid roles).`
  }

  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('gpa') || q.includes('certificate')) {
    return `Dwij is pursuing a B.Tech in Computer Engineering from G.H. Patel College of Engineering and Technology (2022–2026) with a CGPA of 8.18 / 10. Honors include the Machine Learning A-Z Prize and Complete Python Bootcamp Certification.`
  }

  return `Dwij Prajapati is an AI, Backend & Full-Stack Engineer specializing in real-time voice AI agents (LiveKit SFU, GPT-4o, ElevenLabs), low-latency asynchronous microservices (FastAPI, Redis), and quantitative machine learning platforms. You can ask me about his work on InterviewGod.ai, FinSight AI, CompInsight AI, or his tech stack!`
}

export default function AskDwijAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello! I am Dwij\'s AI Assistant. Ask me anything about his production work on real-time Voice AI, backend systems, FinSight AI, or engineering stack.',
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

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const answer = getVerifiedAnswer(query)
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
        aria-label="Ask Dwij's AI Assistant"
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 transition-all flex items-center gap-2.5 border border-white/20"
      >
        <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
        <span className="hidden sm:inline">Ask Dwij's AI</span>
        <span className="sm:hidden">AI Chat</span>
      </button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[580px] rounded-3xl glass-panel border border-white/15 shadow-2xl flex flex-col overflow-hidden bg-[#060911]/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Dwij's AI Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
                  </h3>
                  <p className="text-[10px] text-secondary font-mono">
                    Verified Portfolio Knowledge Base
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
                        ? 'bg-cyan-500 text-black font-bold'
                        : 'bg-violet-600 text-white'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl max-w-[84%] leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-cyan-500/20 border border-cyan-500/40 text-white rounded-tr-none'
                        : 'bg-white/[0.05] border border-white/10 text-secondary rounded-tl-none font-sans'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-muted font-mono text-[11px] pl-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-glow animate-bounce" />
                  <span>Synthesizing verified knowledge...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            <div className="p-3 border-t border-white/5 bg-white/[0.02] flex flex-wrap gap-1.5">
              {suggestedPrompts.slice(0, 3).map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/40 text-[10px] font-mono text-secondary hover:text-white transition-all truncate max-w-full"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="p-3 border-t border-white/10 flex items-center gap-2 bg-black/40"
            >
              <input
                type="text"
                placeholder="Ask about Voice AI, Redis, FastAPI, FinSight..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-0 text-white text-xs font-mono placeholder:text-muted focus:outline-none px-2"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white transition-all shadow-md"
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
