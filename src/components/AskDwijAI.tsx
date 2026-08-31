import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, Bot, User } from 'lucide-react'
import { profile, experience, skillGroups, education, metrics } from '../lib/data'

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ''

interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
}

const suggestedPrompts = [
  'What did Dwij build at Banao / InterviewGod.ai?',
  'Explain the Voice AI WebRTC pipeline',
  'Tell me about FinSight AI and RL trading',
  'What is Dwij\'s core backend tech stack?',
  'How do I get in touch with Dwij?',
]

// System prompt constructed from verified portfolio data
const SYSTEM_PROMPT = `You are Dwij's official Portfolio AI Assistant. Answer questions accurately, concisely, and professionally on behalf of Dwij Prajapati based strictly on the verified information below.

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
1. InterviewGod.ai: Real-Time Voice AI Agent & LLM Evaluation Platform using LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, Sarvam AI, Redis 24h state buffer, gpt-4o-mini LLM-as-a-Judge answer-validity gate (<1s latency, 99.8% pass rate, 20+ multilingual edge cases resolved).
2. FinSight AI: Quantitative Intelligence & Autonomous Trading Platform using SARIMAX, LSTM, FinBERT NLP, MDP RL trading agents (PPO/A2C/DQN), and Markowitz Modern Portfolio Theory (SLSQP optimization, Monte Carlo, VaR/CVaR).
3. CompInsight AI: Enterprise ML Compensation Modeling Engine benchmarking CatBoost, XGBoost, and LightGBM (5-Fold Bayesian CV, R² of 0.93, 22% RMSE reduction), FastAPI REST sub-40ms P99 latency, and SHAP TreeExplainer.

Technical Skills:
${skillGroups.map((g) => `${g.title}: ${g.items.join(', ')}`).join('\n')}

Metrics:
${metrics.map((m) => `• ${m.label}: ${m.value} (${m.unit})`).join('\n')}

Rules:
1. Always be helpful, precise, and technical.
2. If asked about something not present in Dwij's profile, politely state that you only have information about Dwij's verified portfolio and engineering background.
3. Keep responses clean, well-formatted with bullet points when explaining architecture.`

export default function AskDwijAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello! I am Dwij\'s AI Assistant. Ask me anything about his Voice AI systems, distributed backend architecture, machine learning models, or tech stack.',
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

  const callGroqAPI = async (history: ChatMessage[]): Promise<string> => {
    if (!GROQ_API_KEY) {
      return fallbackAnswer(history[history.length - 1]?.content || '')
    }

    try {
      const groqMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history.filter((m) => m.role !== 'system').map((m) => ({
          role: m.role,
          content: m.content,
        })),
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
          max_tokens: 600,
        }),
      })

      if (!response.ok) {
        throw new Error(`Groq API returned ${response.status}`)
      }

      const data = await response.json()
      return data.choices?.[0]?.message?.content || 'I could not generate a response. Please try again.'
    } catch (err) {
      console.warn('Groq API error, using verified knowledge engine:', err)
      return fallbackAnswer(history[history.length - 1]?.content || '')
    }
  }

  const fallbackAnswer = (query: string): string => {
    const q = query.toLowerCase()
    if (q.includes('banao') || q.includes('interviewgod') || q.includes('voice') || q.includes('webrtc') || q.includes('latency')) {
      return `At Banao Technologies, Dwij architected the real-time voice AI pipeline for InterviewGod.ai using LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, and Sarvam AI.\n\n• Sub-second (<1s) conversational latency with acoustic VAD & semantic turn-taking.\n• Built an LLM-as-a-Judge answer validity gate (gpt-4o-mini, 99.8% pass rate).\n• Engineered Redis 24h state buffer checkpointing for zero data loss.\n• Resolved 20+ multilingual (Hindi/English) speech evaluation edge cases.`
    }
    if (q.includes('finsight') || q.includes('trading') || q.includes('rl') || q.includes('markowitz')) {
      return `FinSight AI is Dwij's quantitative intelligence platform:\n\n• Combines SARIMAX, LSTM, and FinBERT sentiment models.\n• Autonomous Markov Decision Process (MDP) RL trading agents (PPO/A2C/DQN).\n• Markowitz Modern Portfolio Theory (SLSQP optimization, Monte Carlo) and VaR/CVaR risk analysis.`
    }
    if (q.includes('compinsight') || q.includes('catboost') || q.includes('salary')) {
      return `CompInsight AI is an enterprise ML compensation engine:\n\n• CatBoost, XGBoost, and LightGBM models with 5-Fold Bayesian CV (R² of 0.93, 22% RMSE reduction).\n• Sub-40ms P99 latency FastAPI REST microservice.\n• Integrated SHAP TreeExplainer for feature importance visualization.`
    }
    if (q.includes('skill') || q.includes('stack') || q.includes('technology')) {
      return `Dwij's core engineering stack spans:\n\n• AI / ML: LLMs, Voice AI (STT/TTS/VAD), Evaluation Gates, Scikit-learn, PyTorch, LangChain.\n• Backend: Python, FastAPI, Django, Asyncio, REST, WebSockets, Pydantic.\n• Databases & Real-Time: LiveKit SFU, WebRTC, Redis, PostgreSQL, MySQL.\n• DevOps: AWS (EC2, S3), Docker Compose, Caddy TLS, CodeBuild CI/CD.`
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('linkedin')) {
      return `You can reach Dwij directly:\n\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• LinkedIn: ${profile.linkedin}\n• GitHub: ${profile.github}`
    }
    return `Dwij Prajapati is an AI, Backend & Full-Stack Engineer specializing in real-time voice AI agents, distributed microservices, and quantitative ML models. You can contact him at ${profile.email}.`
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

    const answer = await callGroqAPI(updatedHistory)

    const assistantMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: answer,
    }

    setMessages((prev) => [...prev, assistantMsg])
    setIsTyping(false)
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
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] max-h-[600px] rounded-3xl glass-panel border border-white/15 shadow-2xl flex flex-col overflow-hidden bg-[#060911]/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Ask Dwij's AI</span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-violet-600/30 text-violet-light border border-violet-500/40">
                      Groq LLaMA 3.3
                    </span>
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
                  <span>Groq LLaMA 3.3 inferencing...</span>
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
                disabled={!input.trim() || isTyping}
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
