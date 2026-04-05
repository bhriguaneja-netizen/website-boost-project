import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Minimize2, Maximize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm the XO Data Co. AI Specialist. How can I help you today?" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      // Read standard JSON response
      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.text || "I'm having trouble processing that request." }]);
    } catch (error: any) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}. Please check your Gemini API key in Vercel.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-bg text-white shadow-2xl flex items-center justify-center z-[9999] hover:scale-110 active:scale-95 transition-all"
      >
        <MessageSquare size={28} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans text-foreground">
      <div className={`bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all ${isMinimized ? 'h-16 w-72' : 'h-[500px] w-[380px] max-w-[90vw]'}`}>
        <div className="p-4 gradient-bg text-white flex items-center justify-between cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
          <div className="flex items-center gap-3">
            <Bot size={20} />
            <span className="font-bold text-sm">XO Assistant</span>
          </div>
          <div className="flex gap-2">
            <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}><Minimize2 size={16} /></button>
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}><X size={16} /></button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                    m.role === 'user' 
                      ? 'bg-primary text-white whitespace-pre-wrap' 
                      : 'bg-background border border-border text-foreground prose prose-sm prose-invert max-w-none'
                  }`}>
                    {m.role === 'user' ? (
                      m.content
                    ) : (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-[10px] text-muted-foreground animate-pulse px-2">Thinking...</div>}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-muted border border-border rounded-xl px-4 py-2 text-sm focus:outline-none text-foreground"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`p-2 rounded-xl gradient-bg text-white ${(!input.trim() || isLoading) ? 'opacity-50' : 'hover:opacity-90'}`}
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AIChatbot;