import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

interface ChatBodyProps {
  messages: { text: string; sender: 'user' | 'bot' }[];
}

export default function ChatBody({ messages }: ChatBodyProps) {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-body">
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} text={msg.text} sender={msg.sender} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
