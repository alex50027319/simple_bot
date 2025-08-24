import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

interface ChatBodyProps {
  messages: { text: string; sender: 'user' | 'bot' }[];
}

export default function ChatBody({ messages }: ChatBodyProps) {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 메시지가 추가된 후 다음 화면 리페인트 시점에 스크롤
    const scrollToBottom = () => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    };
    requestAnimationFrame(scrollToBottom);
  }, [messages]);

  return (
    <div
      className="chat-body"    
    >
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} text={msg.text} sender={msg.sender} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
